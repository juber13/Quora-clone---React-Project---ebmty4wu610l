import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Answers from "./AnswersContainer";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function getFromLocalStorage() {
  const items = localStorage.getItem("question");
  if (items) return JSON.parse(localStorage.getItem("question"));
  else return [];
}

function AddQuestion() {
  const [questions, setQuestion] = useState(getFromLocalStorage());
  const [inputValue, setValue] = useState();
  const navigate = useNavigate();

  const addQuestion = () => {
    if (inputValue === "" || inputValue == null) {
      alert("Please Add Question");
      return;
    } else {
      setQuestion((prev) => {
        return [...prev, { text: inputValue, status: false }];
      });
    }

    setValue("");
  };

  useEffect(() => {
    localStorage.setItem("question", JSON.stringify(questions));
  }, [questions]);

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Write Your Question Here!!!
          </label>
          <textarea
            required
            value={inputValue}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Write something...."
            rows="13"
            cols="10"
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
          <Link to="/dashboard">
            <button className="btn btn-danger m-2">Cancel</button>
          </Link>
          <button className="btn btn-danger" onClick={addQuestion}>
            Add Question
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddQuestion;
