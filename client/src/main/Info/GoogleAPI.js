import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useEffect } from "react";

const GoogleAPIContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GoogleAPI = ({ setIsLogin }) => {
  function oauth2SignIn() {
    const YOUR_CLIENT_ID =
      "754572681344-7g2bod7bhfo6u6o5vkrpiid90frla2vu.apps.googleusercontent.com";
    const YOUR_REDIRECT_URI = "http://localhost:3000";
    // Google's OAuth 2.0 endpoint for requesting an access token
    const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    // Create element to open OAuth 2.0 endpoint in new window.
    const form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    const params = {
      client_id: YOUR_CLIENT_ID,
      redirect_uri: YOUR_REDIRECT_URI,
      scope:
        "https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/photoslibrary.appendonly",
      state: "try_sample_request",
      include_granted_scopes: "true",
      response_type: "token",
    };

    // Add form parameters as hidden input values.
    for (const p in params) {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

  useEffect(() => {
    let fragmentString = window.location.hash.substring(1);

    // Parse query string to see if page request is coming from OAuth 2.0 server.
    let params = {};
    let regex = /([^&=]+)=([^&]*)/g,
      m;
    while ((m = regex.exec(fragmentString))) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0) {
      localStorage.setItem("oauth2-test-params", JSON.stringify(params));
    }
  }, []);
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
                    oauth2SignIn();
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
