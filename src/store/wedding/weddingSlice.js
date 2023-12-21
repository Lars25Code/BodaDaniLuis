import { createSlice } from "@reduxjs/toolkit";

export const weddingSlice = createSlice({
  name: "weddings",
  initialState: {
    id: "",
    songs: [],
  },
  reducers: {
    onGetSongs: (state, action) => {
      const { weddingId, songs } = action.payload;
      state.id = weddingId;
      state.songs = songs;
    },

    onAddNewSong: (state, action) => {
      const { song } = action.payload;
      state.songs.push(song);
    },
    onAddNewLike: (state, action) => {
      const { wedding, songId } = action.payload;
      state.songs.map((s) => {
        if (s.id === songId) {
          s.likes += 1;
        }
      });
      state.songs.sort((a, b) => b.likes - a.likes);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddNewSong, onAddNewLike, onGetSongs } = weddingSlice.actions;
