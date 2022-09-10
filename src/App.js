import React, { useState } from "react";
import { Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import Admin from "./components/mainComponents/Admin";

import Client from "./components/mainComponents/Client";
import Error from "./components/mainComponents/Error";
import Signin from "./components/register/Signin";
import Signup from "./components/register/Signup";

function App() {
  const [check, setCheck] = useState(0);

  const { id } = useParams();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Client></Client>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/admin/*" element={<Admin></Admin>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Signin></Signin> */}
    </div>
  );
}

export default App;
