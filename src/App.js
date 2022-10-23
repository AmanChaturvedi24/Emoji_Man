import "./styles.css";
import React, { useState } from "react";
var emojiDb = {
  "😀": "grinning face",
  "😃": "grinning face with big eyes",
  "😅": "grinning face with sweat",
  "🤣": "rolling on the floor laughing",
  "😂": "face with tears of joy",
  "🙂": "slightly smiling face",
  "😉": "smiling face with halo",
  "😊": "smiling face with smiling eyes",
  "😇": "smiling face with halo",
  "🥰": "smiling face with hearts",
  "😍": "smiling face with heart-eyes",
  "🤩": "star-struck",
  "😘": "face blowing a kiss",
  "😗": "kissing face",
  "😋": "face savoring food",
  "😛": "face with tongue",
  "😜": "winking face with tongue",
  "🤪": "zany face",
  "😝": "squinting face with tongue",
  "🤭": "face with hand over mouth",
  "🤫": "shushing face",
  "🤔": "thinking face",
  " ": "it is just a space"
};
var catlog = Object.keys(emojiDb);
export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiCheck(event) {
    var userInput = event.target.value;
    var meaning = emojiDb[userInput];
    if (userInput === "") {
      meaning = " enter some thing";
      setMeaning(meaning);
      console.log(userInput);
      return;
    }

    if (meaning === undefined) {
      meaning = "sorry we both are on same page idk :( ";
    }
    setMeaning(meaning);
  }
  function clickhandler(item) {
    // console.log(item.value);
    var meaning = emojiDb[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>EMOJI CHECK</h1>
      <input onChange={emojiCheck} />
      <h2>{meaning} </h2>
      <h3>emojis we know</h3>
      {catlog.map(function (emoji) {
        return (
          <span
            onClick={() => clickhandler(emoji)}
            key={emoji}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              padding: "1.5rem 0.5rem"
            }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
