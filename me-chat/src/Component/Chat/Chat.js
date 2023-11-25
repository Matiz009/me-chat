import React, { useEffect } from "react";
import { user } from "../Join/Join";
import send from "../../images/send.png";
import "./Chat.css";
import socketIo from "socket.io-client";
const ENDPOINT = "http://localhost:4000";
const Chat = () => {
  const socket = socketIo(ENDPOINT, { transports: ["websocket"] });
  useEffect(() => {
    socket.on("connect", () => {
      alert("connected");
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      console.log(data.user, data.message);
    });
    socket.on("userJoined", (data) => {
      console.log(data.user, data.message);
    });
  }, [socket]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header"> </div> <div className="chatBox"> </div>{" "}
        <div className="inputBox">
          {" "}
          <input type="text" id="chatInput" />
          <button className="sendBtn">
            {" "}
            <img src={send} alt="send" />{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Chat;
