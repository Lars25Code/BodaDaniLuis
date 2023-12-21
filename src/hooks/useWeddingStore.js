import { FirebaseDB } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { useDispatch, useSelector } from "react-redux";
import { uid } from "uid";

import {
  onAddNewLike,
  onAddNewSong,
  onGetSongs,
} from "../store/wedding/weddingSlice";

export const useWeddingStore = () => {
  const dispatch = useDispatch();
  const { weddings } = useSelector((state) => state.weddings);

  const getWeddingSongs = async ({ weddingId }) => {
    const getSongs = await getDocs(collection(FirebaseDB, `${weddingId}`));

    const songs = getSongs.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    // Order Songs by Likes Quantity
    songs.sort((a, b) => b.likes - a.likes);

    dispatch(onGetSongs({ weddingId, songs }));
  };

  const addNewSong = async ({ weddingId, song }) => {
    const newSong = {
      id: uid(),
      title: song.title,
      artist: song.artist,
      likes: 0,
    };
    const docRef = doc(FirebaseDB, `${weddingId}`, `${newSong.id}`);
    await setDoc(docRef, newSong);

    dispatch(onAddNewSong({ song: newSong }));
  };

  const addNewLike = async ({ weddingId, song }) => {
    const { id: songId } = song;
    const docRef = doc(FirebaseDB, `${weddingId}/${songId}`);

    // Update Document from Firebase
    await updateDoc(docRef, {
      likes: song.likes + 1,
    });

    dispatch(onAddNewLike({ weddingId, songId }));
  };

  return {
    weddings,
    addNewLike,
    addNewSong,
    getWeddingSongs,
  };
};
