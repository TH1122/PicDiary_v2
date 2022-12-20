import styled from "styled-components";
import Home from "./Home/Home";
import Info from "./Info/Info";

const MainContainer = styled.main`
  width: 100%;
`;

const Main = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <MainContainer>
        {isLogin ? <Home /> : <Info setIsLogin={setIsLogin} />}
      </MainContainer>
    </>
  );
};

export default Main;
