import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

import Main from "./components/Main"
import About from "./components/About"
import Goals from "./components/Goals"
import Competency from "./components/Competency"
import Diagram from "./components/Diagram"
import SignIn from "./components/SignIn"
import Career from "./components/Career"
import Certificate from "./components/Certificate"
import History from "./components/History"
import Location from "./components/Location"
import Gallery from "./components/Gallery"
import Board from "./components/Board/Board"
import Professor from "./components/Professor"
import BoardDetail from "./components/Board/BoardDetail"
import BoardWrite from "./components/Board/BoardWrite"
import BoardUpdate from "./components/Board/BoardUpdate"

function Router() {
  return(
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/sign" element={<SignIn/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/goals" element={<Goals/>} />
          <Route path="/competency" element={<Competency/>} />
          <Route path="/diagram" element={<Diagram/>} />
          <Route path="/career_detail" element={<Career/>} />
          <Route path="/certificate" element={<Certificate/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/location" element={<Location/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/board" element={<Board/>} />
          <Route path="/board/:idx" element={<BoardDetail />} />
          <Route path="/write" element={<BoardWrite />} />
          <Route path="/update/:idx" element={<BoardUpdate />} />
          <Route path="/professor" element={<Professor/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router