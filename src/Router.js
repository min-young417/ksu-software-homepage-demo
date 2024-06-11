import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Main = React.lazy(() => import("./components/Main"))
const About = React.lazy(() => import("./components/About"))
const Goals = React.lazy(() => import("./components/Goals"))
const Competency = React.lazy(() => import("./components/Competency"))
const Diagram = React.lazy(() => import("./components/Diagram"))
const SignIn = React.lazy(() => import("./components/SignIn"))
const Career = React.lazy(() => import("./components/Career"))
const Certificate = React.lazy(() => import("./components/Certificate"))
const History = React.lazy(() => import("./components/History"))
const Location = React.lazy(() => import("./components/Location"))
const Gallery = React.lazy(() => import("./components/Gallery"))
const Board = React.lazy(() => import("./components/Board/Board"))
const Professor = React.lazy(() => import("./components/Professor"))
const BoardDetail = React.lazy(() => import("./components/Board/BoardDetail"))
const BoardWrite = React.lazy(() => import("./components/Board/BoardWrite"))
const BoardUpdate = React.lazy(() => import("./components/Board/BoardUpdate"))

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