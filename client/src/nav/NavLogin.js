import styled from "styled-components";

const NavLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #b5d8dd;
  height: 100%;
  padding: 0px 20px;
  > .NavSide > .NavProfile {
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  > h1 {
    margin: 0px;
    font-size: 28px;
    margin-bottom: 6px;
    font-family: "Pacifico", cursive;
  }
  > .IconWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  > .NavSide {
    width: 180px;
  }
  > .NavSide > .Icon {
    width: 28px;
    height: 28px;
    margin-left: 10px;
  }
`;

const NavLogin = ({ setIsLogin }) => {
  return (
    <>
      <NavLoginContainer>
        <div className="NavSide">
          <div className="NavProfile"></div>
        </div>
        <h1>PicDiary</h1>
        <div className="IconWrapper NavSide">
          <img
            className="Icon"
            alt="MenuIcon"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkuNSAxMmMtMi40ODMgMC00LjUgMi4wMTUtNC41IDQuNXMyLjAxNyA0LjUgNC41IDQuNSA0LjUtMi4wMTUgNC41LTQuNS0yLjAxNy00LjUtNC41LTQuNXptMi41IDVoLTJ2MmgtMXYtMmgtMnYtMWgydi0yaDF2MmgydjF6bS0xOCAwbDQtNS45NiAyLjQ4IDEuOTYgMi41Mi00IDEuODUzIDIuOTY0Yy0xLjI3MSAxLjMwMy0xLjk3NyAzLjA4OS0xLjgyNyA1LjAzNmgtOS4wMjZ6bTEwLjgyIDRoLTE0Ljgydi0xOGgyMnY3LjUwMWMtLjYyMy0uMjYxLTEuMjk3LS40MjItMi0uNDc2di01LjAyNWgtMTh2MTRoMTEuNTAyYy4zMTIuNzQ5Ljc2NSAxLjQyNCAxLjMxOCAyem0tOS4zMi0xMWMtLjgyOCAwLTEuNS0uNjcxLTEuNS0xLjUgMC0uODI4LjY3Mi0xLjUgMS41LTEuNXMxLjUuNjcyIDEuNSAxLjVjMCAuODI5LS42NzIgMS41LTEuNSAxLjV6Ii8+PC9zdmc+"
          />
          <img
            className="Icon"
            alt="MenuIcon"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjAgMjBoLTR2LTRoNHY0em0tNi0xMGgtNHY0aDR2LTR6bTYgMGgtNHY0aDR2LTR6bS0xMiA2aC00djRoNHYtNHptNiAwaC00djRoNHYtNHptLTYtNmgtNHY0aDR2LTR6bTE2LTh2MjJoLTI0di0yMmgzdjFjMCAxLjEwMy44OTcgMiAyIDJzMi0uODk3IDItMnYtMWgxMHYxYzAgMS4xMDMuODk3IDIgMiAyczItLjg5NyAyLTJ2LTFoM3ptLTIgNmgtMjB2MTRoMjB2LTE0em0tMi03YzAtLjU1Mi0uNDQ3LTEtMS0xcy0xIC40NDgtMSAxdjJjMCAuNTUyLjQ0NyAxIDEgMXMxLS40NDggMS0xdi0yem0tMTQgMmMwIC41NTItLjQ0NyAxLTEgMXMtMS0uNDQ4LTEtMXYtMmMwLS41NTIuNDQ3LTEgMS0xczEgLjQ0OCAxIDF2MnoiLz48L3N2Zz4="
          />
          <img
            onClick={() => {
              setIsLogin(false);
              localStorage.clear("credentialResponse");
            }}
            className="Icon"
            alt="MenuIcon"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYgOXYtNGw4IDctOCA3di00aC04di02aDh6bS0xNi03djIwaDE0di0yaC0xMnYtMTZoMTJ2LTJoLTE0eiIvPjwvc3ZnPg=="
          />
        </div>
      </NavLoginContainer>
    </>
  );
};

export default NavLogin;
