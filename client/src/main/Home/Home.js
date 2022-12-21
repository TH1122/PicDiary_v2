import { useState } from "react";
import styled from "styled-components";
import StartPic from "./StartPic";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Home = () => {
  const [picData, setPicData] = useState([]);
  return (
    <>
      <HomeContainer>{!picData.length && <StartPic />}</HomeContainer>
    </>
  );
};

export default Home;
