import styled from "styled-components";
import Home from "./Home/Home";
import Info from "./Info/Info";

const MainContainer = styled.main`
  width: 100%;
`;

const Main = ({ isLogin }) => {
  return (
    <>
      <MainContainer>{isLogin ? <Home /> : <Info />}</MainContainer>
    </>
  );
};

export default Main;
