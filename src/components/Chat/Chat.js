import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Voice from "../Voice/Voice";
import "./Chat.css";
import Input from "../Input/Input";
import Text from "../Text/Text";
import Room from "../RoomBar/Room";
import Messages from "../Messages/Messages";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log("MESSA GE ", message);
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const test = (mesage) => {
    console.log("Hi there ", mesage);
    setMessage(mesage);
  };
  // const sendVoice = (event) => {
  //   event.preventDefault();

  //   if (voice) {
  //     socket.emit("sendVoice", voice, () => setVoice(""));
  //   }
  // };

  return (
    <div className='chat_container '>
      <div className='Chat_room'>
        <Room room={room} />
      </div>

      <div>
        <Messages messages={messages} name={name} />
      </div>
      <div className='inner_container'>
        <div>
          <Voice message={test} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
      <Text users={users} />
    </div>
  );
};

export default Chat;
