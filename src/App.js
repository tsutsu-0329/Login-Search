import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./CSS/App.css";
import { Header } from "./components/Header";
import { ClientPage } from "./Pages/ClientPage";
import { LoginPage } from "./Pages/LoginPage";
import { MyPage } from "./Pages/MyPage";
import { AddItemPage } from "./Pages/AddItemPage";
import {ClientDetailPage} from './Pages/ClientDetailPage'
import { SignUpPage } from "./Pages/SignUpPage";
import { CssBaseline, Typography } from "@mui/material";

export function App() {
  return (
    <>
    <CssBaseline/>
      <Typography sx={{ backgroundColor:"#7d80813d"}}>
        <Header className="Header" />
        <BrowserRouter>
          <Routes>
            <Route exact path="/items" element={<ClientPage />} />
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/signin" element={<LoginPage />} />
            <Route exact path="/additem" element={<AddItemPage />} />
            <Route exact path="/clientdetail" element={<ClientDetailPage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/mypage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </Typography>
    </>
  );
}

export default App;
