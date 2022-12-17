import "./App.css";
import Nav from "./nav/Nav";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div>
        <Nav isLogin={isLogin} />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
