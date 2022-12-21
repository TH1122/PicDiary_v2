import styled from "styled-components";

const StartPicContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4eee2;
  width: 500px;
  height: 150px;
  border-radius: 0.5em;
  padding: 25px;
  margin: 15px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  > span {
    margin-bottom: 10px;
  }
  > .startPicButton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    background-color: #f3e4e4;
    border-radius: 2.5em;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  > .startPicButton :hover {
    font-weight: bold;
  }
  > .startPicButton > span {
    height: 40px;
    padding: 10px;
  }
`;
const StartPic = () => {
  return (
    <>
      <StartPicContainer>
        <span>현재 등록된 사진이 없습니다.</span>
        <span>아래의 시작하기 버튼을 클릭해 사진을 추가해 주세요!</span>
        <div className="startPicButton">
          <span>시작하기</span>
        </div>
      </StartPicContainer>
    </>
  );
};

export default StartPic;
