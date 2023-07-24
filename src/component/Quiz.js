import React from "react";
export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      answers: null,
      correctAnswer: null,
    };
  }
  componentDidMount() {
    let arrOfIncorrect = [
      ...this.props.questions[this.state.currentQuestion].incorrect_answers,
    ];
    let correctAns =
      this.props.questions[this.state.currentQuestion].correct_answer;
    let combinedArr = arrOfIncorrect.concat(correctAns);
    let arrOfAllAns = [...new Set(combinedArr)];

    this.setState({
      answers: arrOfAllAns,
      correctAnswer: correctAns,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuestion !== this.state.currentQuestion) {
      let arrOfIncorrect = [
        ...this.props.questions[this.state.currentQuestion].incorrect_answers,
      ];
      let correctAns =
        this.props.questions[this.state.currentQuestion].correct_answer;
      let combinedArr = arrOfIncorrect.concat(correctAns);
      let arrOfAllAns = [...new Set(combinedArr)];

      this.setState({
        answers: arrOfAllAns,
        correctAnswer: correctAns,
      });
    }
  }

  handleNextQuestion = () => {
    if (!this.props.allAnswers[this.state.currentQuestion]) {
      alert("You must select answer of current question.");
    } else {
      this.setState((prevState) => {
        return {
          currentQuestion: prevState.currentQuestion + 1,
        };
      });
    }
  };
  render() {
    console.log(this.state.currentQuestion, "Q.No");
    let questionToDisplay = this.props.questions[this.state.currentQuestion];
    return (
      <div className="question-div">
        <h2 className="sec-heading ">
          Question No. :- <span>{this.state.currentQuestion + 1} ❓</span>
        </h2>
        <div className="flex center">
          {" "}
          <span className="btn btn-ter">
            Difficulty:- {questionToDisplay.difficulty}
          </span>
        </div>
        <h3>
          Que : <span>{questionToDisplay.question}</span>
        </h3>

        {this.state.answers ? (
          <>
            <ul>
              {this.state.answers.map((answer, i) => {
                return (
                  <li
                    key={i}
                    onClick={(event) => {
                      this.props.handleAnswer(
                        answer,
                        this.state.currentQuestion
                      );
                    }}
                    className={
                      this.props.allAnswers[this.state.currentQuestion] ===
                      answer
                        ? "active"
                        : ""
                    }
                  >
                    {i + 1}:-{answer}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          ""
        )}
        {this.state.currentQuestion === 9 ? (
          <div className="flex center">
            <button
              className="btn btn-sec"
              onClick={(event) => {
                this.props.handleSubmit();
              }}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="flex center">
            <button
              className="btn btn-sec"
              onClick={(event) => {
                this.handleNextQuestion();
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
}
