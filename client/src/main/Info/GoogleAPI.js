import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";

const GoogleAPIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoogleAPI = ({ setIsLogin }) => {
  return (
    <>
      <GoogleAPIContainer>
        <GoogleOAuthProvider clientId="754572681344-7g2bod7bhfo6u6o5vkrpiid90frla2vu.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              let jwt = jwt_decode(JSON.stringify(credentialResponse));
              axios("http://localhost:3001/user")
                .then((res) => {
                  return res.data;
                })
                .then((data) => {
                  if (data.includes(jwt.email)) {
                    localStorage.setItem(
                      "credentialResponse",
                      JSON.stringify(jwt.email)
                    );
                    window.location.reload();
                  } else
                    alert(
                      "가입되지 않은 유저입니다. 회원가입 먼저 진행해주세요!"
                    );
                });
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </GoogleAPIContainer>
    </>
  );
};

export default GoogleAPI;
