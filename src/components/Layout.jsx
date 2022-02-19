import React, { useState } from "react";

export default function Layout() {

  const [randomStrings, setRandomStrings] = useState([]);
  const [sortByNumberString, setSortByNumberString] = useState([]);

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
      <div className="mt-3">
        <input type="button" className="btn btn-primary" value="Sort Number String" onClick={() => sortStringNumber(randomStrings)} />
        <span className="ms-3">{sortByNumberString.map(str => str + ", ")}</span>
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

  function sortStringNumber(strArr = []) {
    if (strArr.length < 1) {
      return;
    }
    const res = strArr.map(convertStringToNumber)
      .filter(i => i !== undefined)
      .sort((a, b) => a - b)
      .map(convertNumberToString);
    setSortByNumberString(res);
  }

  function convertStringToNumber(str = "") {
    switch (str) {
      case "zero": return 0;
      case "one": return 1;
      case "two": return 2;
      case "three": return 3;
      case "four": return 4;
      case "five": return 5;
      case "six": return 6;
      case "seven": return 7;
      case "eight": return 8;
      case "nine": return 9;
      case "ten": return 10;
      default: break;
    }
  }

  function convertNumberToString(str = -1) {
    switch (str) {
      case 0: return "zero";
      case 1: return "one";
      case 2: return "two";
      case 3: return "three";
      case 4: return "four";
      case 5: return "five";
      case 6: return "six";
      case 7: return "seven";
      case 8: return "eight";
      case 9: return "nine";
      case 10: return "ten";
      default: break;
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

}
