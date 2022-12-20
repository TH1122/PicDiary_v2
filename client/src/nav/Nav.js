import styled from "styled-components";

import NavLogin from "./NavLogin";
import NavMain from "./NavMain";

const NavContainer = styled.nav`
  width: 100%;
  height: 65px;
`;

const Nav = ({ isLogin, setIsLogin }) => {
  return (
    <>
      <NavContainer>
        {isLogin ? <NavLogin setIsLogin={setIsLogin} /> : <NavMain />}
      </NavContainer>
    </>
  );
};

export default Nav;
