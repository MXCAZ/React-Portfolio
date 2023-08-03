import React from "react";
import styled from "styled-components";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

export function MessageLanguage() {
  return (
    <>
      <MessageContainer>
        <i
          className="fa-solid fa-arrow-left"
          style={{
            color: "black",
            position: "absolute",
            left: "10px",
            bottom: "10px",
            marginRight: "5px",
          }}></i>
        <p style={{ color: "black", fontSize: "14px", marginLeft: "15px" }}>
          Click here change your language here
        </p>
      </MessageContainer>
    </>
  );
}

export function MessageCertification() {
  return (
    <>
      <MessageContainerCertification>
        <i
          className="fa-solid fa-arrow-right"
          style={{
            color: "black",
            position: "absolute",
            right: "10px",
            bottom: "10px",
            marginRight: "5px",
          }}></i>
        <p style={{ color: "black", fontSize: "14px", marginLeft: "15px" }}>
          Click here to see my certification
        </p>
      </MessageContainerCertification>
    </>
  );
}
export function MessageBenito() {
  return (
    <>
      <MessageContainerBenito>
        <i
          className="fa-solid fa-arrow-left"
          style={{
            color: "black",
            position: "absolute",
            left: "10px",
            bottom: "10px",
            marginRight: "5px",
          }}></i>
        <p style={{ color: "black", fontSize: "14px", marginLeft: "15px" }}>
          Click here to chat with my dog benito
        </p>
      </MessageContainerBenito>
    </>
  );
}
export function MessageAbout() {
  return (
    <>
      <MessageContainerAboutMe>
        <i
          className="fa-solid fa-arrow-right"
          style={{
            color: "black",
            position: "absolute",
            right: "10px",
            bottom: "10px",
            marginRight: "5px",
          }}></i>
        <p style={{ color: "black", fontSize: "14px", marginLeft: "15px" }}>
          If you want to know more about me click here
        </p>
      </MessageContainerAboutMe>
    </>
  );
}

const MessageContainer = styled.div`
display:flex;
font-family: "Space Mono", monospace;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 100px;
  top: 20px;
  right:-100px;
  position: absolute;
  background: #fff;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  

  
  }
`;
const MessageContainerBenito = styled.div`
display:flex;
font-family: "Space Mono", monospace;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 100px;
  top: 20px;
  right:-120px;
  position: absolute;
  background: #fff;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  

  
  }
`;
const MessageContainerCertification = styled.div`
display:flex;

  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100px;
  top: 20px;
  left:-100px;
  position: absolute;
  background: #fff;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  

  
  }
`;
const MessageContainerAboutMe = styled.div`
display:flex;
font-family: "Space Mono", monospace;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  top: 20px;
  left:-130px;
  position: absolute;
  background: #fff;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  

  
  }
`;
