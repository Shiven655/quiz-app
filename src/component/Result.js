import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      score: null,
    };
  }

  componentDidMount() {
    let questions = this.props.questions;
    let allAnswers = this.props.allAnswers;
    let score = 0;

    let result = questions.map((question, i) => {
      if (question.correct_answer === allAnswers[i]) {
        score = score + 1;
      }
      let obj = {
        question: question.question,
        correct_answer: question.correct_answer,
        yourAns: allAnswers[i],
      };
      return obj;
    });
    this.setState({ result: result, score: score });
  }
  render() {
    return (
      <section className="result-sec sec-padding container">
        <h2 className="sec-heading">
          Your Score is :- <span>{this.state.score}</span>
        </h2>

        {this.state.result ? (
          <table>
            <thead>
              <tr>
                <th>Is Correct</th>
                <th>No.</th>
                <th>Question</th>
                <th>Correct Answer</th>
                <th>Your Answer</th>
              </tr>
            </thead>
            <tbody>
              {this.state.result.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td>
                      {ele.correct_answer === ele.yourAns ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                        </svg>
                      )}
                    </td>
                    <td>{i + 1}</td>
                    <td>{ele.question}</td>

                    <td>{ele.correct_answer}</td>
                    <td>{ele.yourAns}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}

        <div className="flex center">
          <NavLink to="/" className="btn btn-pri">
            Go To Home
          </NavLink>
        </div>
      </section>
    );
  }
}

export default Result;
