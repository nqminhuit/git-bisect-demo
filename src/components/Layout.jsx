import React, { useEffect, useState } from "react";
import { convertNumberToString, convertStringToNumber, getRandomInt } from "../utils/NumbersUtils.js";

export default function Layout() {

  const [randomStrings, setRandomStrings] = useState([]);
  const [sortByNumberString, setSortByNumberString] = useState([]);
  const [sortString, setSortString] = useState([]);
  const [checkedStringNumber, setCheckedStringNumber] = useState(false);
  const [checkedString, setCheckedString] = useState(false);

  useEffect(() => {
    sortStrings(checkedString ? randomStrings : []);
  }, [checkedString]);

  useEffect(() => {
    sortStringNumber(checkedStringNumber ? randomStrings : []);
  }, [checkedStringNumber]);

  const fromArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "zero", "hello", "hi", "good", "afternoon", "git", "bisect", "demonstration", "central", "management",
    "company", "meta", "defender", "access", "java", "javascript"];

  return (
    <div className="container mt-3">
      <h3>This is git bisect demo</h3>

      <div>
        <input
          type="button"
          className="btn btn-primary"
          value="Random String"
          onClick={() => generateRandomString()} />
        <span className="ms-3">{randomStrings.map(str => " " + str).toString().trim()}</span>
      </div>

      <div className="mt-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="checkedSortNumber"
          checked={checkedStringNumber}
          onChange={e => setCheckedStringNumber(e.target.checked)} />
        <label className="form-check-label user-select-none" htmlFor="checkedSortNumber">Sort by string numbers:</label>
        <span className="ms-3 fw-bold">{sortByNumberString.map(str => " " + str).toString().trim()}</span>
      </div>

      <div className="mt-2 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="checkedSortString"
          checked={checkedString}
          onChange={e => setCheckedString(e.target.checked)} />
        <label className="form-check-label user-select-none" htmlFor="checkedSortString">Sort by strings:</label>
        <span className="ms-3 fw-bold">{sortString.map(str => " " + str).toString().trim()}</span>
      </div>
    </div>
  );

  function generateRandomString(num = 15) {
    const arr = [];
    for (let i = 0; i < num; i++) {
      const index = getRandomInt(0, fromArray.length);
      arr.push(fromArray[index]);
    }
    setRandomStrings(arr);
    setCheckedString(false);
    setCheckedStringNumber(false);
  }

  function sortStringNumber(strArr = []) {
    const res = strArr.map(convertStringToNumber)
      .filter(i => i !== undefined)
      .sort((a, b) => a - b)
      .map(convertNumberToString);

    setSortByNumberString(res);
  }

  function sortStrings(strArr = []) {
    setSortString(strArr.slice().sort());
  }

}
