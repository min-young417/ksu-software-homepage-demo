import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Main = React.lazy(() => import("./pages/Main"))
const About = React.lazy(() => import("./pages/About"))
const Goals = React.lazy(() => import("./pages/Goals"))
const Competency = React.lazy(() => import("./pages/Competency"))
const Diagram = React.lazy(() => import("./pages/Diagram"))
const SignIn = React.lazy(() => import("./pages/SignIn"))
const Career = React.lazy(() => import("./pages/Career"))
const Certificate = React.lazy(() => import("./pages/Certificate"))
const History = React.lazy(() => import("./pages/History"))
const Location = React.lazy(() => import("./pages/Location"))
const Gallery = React.lazy(() => import("./pages/Gallery"))
const Board = React.lazy(() => import("./pages/Board/Board"))
const Professor = React.lazy(() => import("./pages/Professor"))
const BoardDetail = React.lazy(() => import("./pages/Board/BoardDetail"))
const BoardWrite = React.lazy(() => import("./pages/Board/BoardWrite"))
const BoardUpdate = React.lazy(() => import("./pages/Board/BoardUpdate"))

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