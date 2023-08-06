import React, { useState } from "react";
import styled from "styled-components";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

export default function Modal({ children, state, changeState }) {
  const [isTyping, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello i am Benito what do you want to know?",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const systemMessage = {
      role: "system",
      content: "Speak like you are a dog Benito he is a pug ",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",

      messages: [...apiMessages, systemMessage],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        "content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }

  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer className="container">
            <HeaderContainer>
              <h3>Benito Chat</h3>
              <CloseButton onClick={() => changeState(false)}>
                <i
                  className="fa-solid fa-x"
                  style={{
                    fontSize: "30px",
                  }}></i>
              </CloseButton>
            </HeaderContainer>

            <MainContainer style={{ marginTop: "50px" }}>
              <ChatContainer>
                <MessageList
                  scrollBehavior="smooth"
                  typingIndicator={
                    isTyping ? (
                      <TypingIndicator content="Benito is typing" />
                    ) : null
                  }>
                  {messages.map((message, i) => {
                    console.log(message);
                    return <Message key={i} model={message} />;
                  })}
                </MessageList>
                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}

const Overlay = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
display:flex
  min-height: 400px;
  background: #fff;
  position: relative;
  z-index: 3;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, , 0.2) 0px 7px 29px 0px;
  padding: 20px;
  z-index: 100;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 4;
  height: 40px;
  width: 40px;
  top: 10px;
  right: 10px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
