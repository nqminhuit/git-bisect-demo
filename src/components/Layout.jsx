import React, { useState } from "react";
import { convertNumberToString, convertStringToNumber, getRandomInt } from "../utils/NumbersUtils.js";

export default function Layout() {

  const [randomStrings, setRandomStrings] = useState([]);
  const [sortByNumberString, setSortByNumberString] = useState([]);
  const [sortString, setSortString] = useState([]);

  const fromArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "zero", "hello", "hi", "good", "afternoon", "git", "bisect", "demonstration", "central", "management",
    "company", "meta", "defender", "access", "java", "javascript"];

  return (
    <div className="container mt-3">
      <h3>This is git bisect demo</h3>

      <div>
        <input type="button" className="btn btn-primary" value="Random String" onClick={() => generateRandomString()} />
        <span className="ms-3">{randomStrings.map(str => " " + str).toString().trim()}</span>
      </div>

      <div className="mt-3">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkedSortNumber" onClick={() => sortStringNumber(randomStrings)} />
          <label className="form-check-label" for="checkedSortNumber">Sort by string numbers:</label>
          <span className="ms-3">{sortByNumberString.map(str => " " + str).toString().trim()}</span>
        </div>
      </div>

      <div className="mt-2">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="checkedSortString" onClick={() => sortStrings(randomStrings)} />
          <label className="form-check-label">Sort by strings:</label>
          <span className="ms-3">{sortString.map(str => " " + str).toString().trim()}</span>
        </div>
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
      .sort((a, b) => a + b)
      .map(convertNumberToString);

    setSortByNumberString(res);
  }

  function sortStrings(strArr = []) {
    if (strArr.length < 1) {
      return;
    }

    setSortString(strArr.slice().sort());
  }

}
