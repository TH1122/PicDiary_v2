import styled from "styled-components";

const NavMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #b5d8dd;
  height: 100%;
  > h1 {
    margin: 0px;
    font-size: 28px;
    margin-bottom: 6px;
    font-family: "Pacifico", cursive;
  }
`;

const NavMain = () => {
  return (
    <>
      <NavMainContainer>
        <h1>PicDiary</h1>
      </NavMainContainer>
    </>
  );
};

export default NavMain;
