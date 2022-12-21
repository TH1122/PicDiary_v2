import "./App.css";
import Nav from "./nav/Nav";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("credentialResponse")) setIsLogin(true);
  }, []);
  return (
    <>
      <div>
        <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
        <Main isLogin={isLogin} setIsLogin={setIsLogin} />
        <Footer />
      </div>
    </>
  );
}

export default App;
