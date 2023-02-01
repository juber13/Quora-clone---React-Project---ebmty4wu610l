import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function getQuestionFromLocalStorage() {
  const items = localStorage.getItem("question");
  if (items) return JSON.parse(localStorage.getItem("question"));
  else return [];
}

function getQuestionAndAnswerFromLocalStorage() {
  const questiond = localStorage.getItem("questiond");
  if (questiond) return JSON.parse(localStorage.getItem("questiond"));
  else return [];
}

function AddAnswerPage() {
  const [questions, setQuestion] = useState(getQuestionFromLocalStorage());
  const [questionedAndAnswer, setQuestionAndAnswer] = useState(
    getQuestionAndAnswerFromLocalStorage()
  );
  const [SelectedQuestion, setSelectedQuestion] = useState();
  const [inputVal, setInputval] = useState("");
  const navigate = useNavigate();

  function addAnswer() {
    if (inputVal === "" || !SelectedQuestion) {
      alert("First select question then Add Answer");
      return;
    } else {
      setQuestionAndAnswer([
        ...questionedAndAnswer,
        {
          id: Math.floor(Math.random() + 1 * 100),
          answerdBy:JSON.parse(localStorage.getItem("userData")).userName || false,
          questionedBy: questionedAndAnswer.answerdBy,
          question: SelectedQuestion,
          answer: inputVal,
        },
      ]);
    }

    setSelectedQuestion("");
    setInputval("");
  }

  useEffect(() => {
    localStorage.setItem("questiond", JSON.stringify(questionedAndAnswer));
  }, [questionedAndAnswer]);

  const updateQuestion = (index) => {
    setSelectedQuestion(questions[index].text);
    const ques = [...questions];
    ques[index].status = true;
    setQuestion(ques);
  };

  useEffect(() => {
    localStorage.setItem("question", JSON.stringify(questions));
  });

  const container = {
    paddingTop: "10px",
  };

  return (
    <>
      <Header />
      <div className="container mt-5 py-4" style={container}>
        <div className="row">
          <div className="col-5  pt-10">
            <h5 className="mt-10 text-danger" style={{ marginLeft: "2rem" }}>
              Select Questions
            </h5>
            <ul>
              {questions.map(
                (ques, index) =>
                  ques.status != true && (
                    <li
                      onClick={() => updateQuestion(index)}
                      key={index}
                      className="select-question"
                      role="button">
                      {ques.text}
                    </li>
                  )
              )}
            </ul>
          </div>
          <div className="col-7">
            <label
              for="exampleFormControlTextarea1"
              className="form-label text-danger"
            >
              Write Your Answer Here!!
            </label>
            <textarea
              required
              value={inputVal}
              onChange={(e) => setInputval(e.target.value)}
              className="form-control"
              placeholder={SelectedQuestion}
              id="exampleFormControlTextarea1"
              rows="15"
              cols="15"
            ></textarea>
            <Link to="/">
              <button className="btn btn-danger m-2">Cancel</button>
            </Link>
            <button className="btn btn-danger" onClick={addAnswer}>
              Add Answer
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddAnswerPage;
