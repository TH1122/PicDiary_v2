import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const GoogleAPIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoogleAPI = () => {
  return (
    <>
      <GoogleAPIContainer>
        <GoogleOAuthProvider clientId="754572681344-7g2bod7bhfo6u6o5vkrpiid90frla2vu.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              let jwt = jwt_decode(JSON.stringify(credentialResponse));
              localStorage.setItem("credentialResponse", JSON.stringify(jwt));
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
