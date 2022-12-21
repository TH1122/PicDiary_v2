import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import StartPic from "./StartPic";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Home = () => {
  const [picData, setPicData] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("oauth2-test-params"));
    axios
      .get("https://photoslibrary.googleapis.com/v1/albums", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token["access_token"]}`,
        },
      })
      .then((res) => {
        return res.data.albums;
      })
      .then((data) => {
        data.forEach((el) => {
          if (el.title === "PicDiary") setPicData([el]);
        });
      });
  }, []);
  return (
    <>
      <HomeContainer>{!picData.length && <StartPic />}</HomeContainer>
    </>
  );
};

export default Home;
