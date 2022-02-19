import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProvider from "./contexts/UserProvider";
import Header from "./components/Header";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <UserProvider>
            <Header />
            <Inbox />
          </UserProvider>
        } />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
