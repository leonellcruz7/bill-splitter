import "./App.scss";
import "remixicon/fonts/remixicon.css";
import { FC } from "react";
import { ButtonProps } from "./types/types";
import { Button } from "./components/buttons";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import BillCalculator from "./pages/BillCalculator";
import Member from "./pages/Member";

const App: FC = () => {
  return (
    <div className="App bg-blue w-full min-h-[100vh] p-4">
      <div className="max-w-[1440px] mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<BillCalculator />} />
            <Route path="/member" element={<Member />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
