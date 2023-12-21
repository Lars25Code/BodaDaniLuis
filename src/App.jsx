import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Classic from "./invitationStyles/Classic.jsx";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/classic-one" element={
              <Classic name1="Daniela" name2="Luis" invitationStyle={"classic-one"} />
            } />
            <Route path="/classic-two" element={
              <Classic name1="Daniela" name2="Luis" invitationStyle={"classic-two"} />
            } />
            <Route path="/classic-three" element={
              <Classic name1="Daniela" name2="Luis" invitationStyle={"classic-three"} />
            } />
            <Route path="/classic-four" element={
              <Classic name1="Daniela" name2="Luis" invitationStyle={"classic-four"} />
            } />
            <Route path="/classic-five" element={
              <Classic name1="Daniela" name2="Luis" invitationStyle={"classic-five"} />
            } />
          <Route path="*" element={<Navigate to="/classic-one" />} />
        </Routes>
      </Provider>
    </>
  );
};
