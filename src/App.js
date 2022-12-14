import "./styles.css";
import React, { useState } from "react";
var emojiDb = {
  "ð": "grinning face",
  "ð": "grinning face with big eyes",
  "ð": "grinning face with sweat",
  "ðĪĢ": "rolling on the floor laughing",
  "ð": "face with tears of joy",
  "ð": "slightly smiling face",
  "ð": "smiling face with halo",
  "ð": "smiling face with smiling eyes",
  "ð": "smiling face with halo",
  "ðĨ°": "smiling face with hearts",
  "ð": "smiling face with heart-eyes",
  "ðĪĐ": "star-struck",
  "ð": "face blowing a kiss",
  "ð": "kissing face",
  "ð": "face savoring food",
  "ð": "face with tongue",
  "ð": "winking face with tongue",
  "ðĪŠ": "zany face",
  "ð": "squinting face with tongue",
  "ðĪ­": "face with hand over mouth",
  "ðĪŦ": "shushing face",
  "ðĪ": "thinking face",
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
