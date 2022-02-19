import React, { useState } from "react";

export default function Layout() {

  const [randomStrings, setRandomStrings] = useState([]);

  const fromArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "zero", "hello", "hi", "good", "afternoon", "git", "bisect", "demonstration", "central", "management",
    "company", "meta", "defender", "access", "java", "javascript"];

  return (
    <div className="container mt-3">
      <h3>This is git bisect demo</h3>
      <div>
        <input type="button" className="btn btn-primary" value="Random String" onClick={() => generateRandomString()} />
        <span className="ms-3">{randomStrings.map(str => str + ", ")}</span>
      </div>
    </div>
  );

  function generateRandomString(num = 10) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      const index = getRandomInt(0, fromArray.length);
      arr.push(fromArray[index]);
    }
    setRandomStrings(arr);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

}
