import React, { Component } from "react";
import withParams from "./withParams";
import Quiz from "./Quiz";
import Result from "./Result";
class QuizHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      answers: [],
      isSubmitted: false,
    };
  }
  componentDidMount() {
    let category = this.props.params.category;
    let level = this.props.params.level;

    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}`
    )
      .then((res) => res.json())
      .then((questions) => {
        this.setState({ questions: questions.results });
      });
  }
  handleAnswerSelect = (ans, currentQuestion) => {
    console.log(ans);
    if (!this.state.answers[currentQuestion]) {
      this.setState((prevState) => {
        let updatedAns = prevState.answers.concat(ans);
        return {
          answers: updatedAns,
        };
      });
    } else {
      this.setState((prevState) => {
        prevState.answers[currentQuestion] = ans;
        return {
          answers: prevState.answers,
        };
      });
    }
  };

  handleSubmit = () => {
    if (!this.state.answers[9]) {
      alert("You must select answer of current question.");
    } else {
      this.setState((prevState) => {
        return {
          isSubmitted: !prevState.isSubmitted,
        };
      });
    }
  };
  render() {
    console.log(this.state.answers, "homestateAns");
    console.log(this.state.questions, "render");
    return (
      <section>
        {this.state.questions ? (
          <Quiz
            questions={this.state.questions}
            handleAnswer={this.handleAnswerSelect}
            allAnswers={this.state.answers}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          ""
        )}
        {this.state.isSubmitted ? (
          <Result
            questions={this.state.questions}
            allAnswers={this.state.answers}
          />
        ) : (
          ""
        )}
      </section>
    );
  }
}
export default withParams(QuizHome);
