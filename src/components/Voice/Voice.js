import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// const Voice = ({ voice, setVoice, sendVoice }) => {
const Voice = (props) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const voice = transcript;

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }
  // function sendText(event) {
  //   event.preventDefault();
  //   sendMessage(transcript);
  // }
  // console.log("Message", message);

  function clickbuttonvalue(event) {
    SpeechRecognition.startListening();
    props.message(voice);

    // console.log("THE VALUE ", t);
  }

  // console.log("voice testing ", voice);
  // console.log("Props ...", props);

  return (
    <div>
      <button onClick={clickbuttonvalue}>
        <span>🎤</span>
      </button>
      {/* <button onClick={SpeechRecognition.stopListening}>
        <span>🛑</span>
      </button>
      <button onClick={resetTranscript}>
        <span>✖</span>
      </button> */}
    </div>
  );
};
export default Voice;
