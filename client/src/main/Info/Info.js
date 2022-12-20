import styled from "styled-components";
import Sample from "../Sample";
import GoogleAPI from "./GoogleAPI";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > div {
    margin: 20px 0px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Info = () => {
  const info = [
    "PicDiary는 날짜별로 사진과 그에 대한 제목과 이야기를 작성해",
    "Google Photos에 등록하여 그림일기를 만들 수 있는 애플리케이션입니다.",
    "또한 날짜와 상관 없이 특정 사진에 대한 카테고리를 설정함으로써,",
    "메인화면에는 카테고리별로 사진을 나열해 사진첩을 만들 수도 있습니다.",
    "PicDiary는 Google Photos와 연동되어 있으므로,",
    "서비스를 이용하기 위해서는 Google 계정으로 가입이 필요하며,",
    "등록하는 사진은 Google Photos에 자동 저장되므로 용량제한이 있을 수 있습니다.",
  ];

  return (
    <>
      <InfoContainer>
        <GoogleAPI />
        <div>
          {info.map((el) => {
            return <span>{el}</span>;
          })}
        </div>
        <Sample />
      </InfoContainer>
    </>
  );
};

export default Info;
