import React from "react";
import { NavLink } from "react-router-dom";
export default class Level extends React.Component{
    render(){
        return (
            <section className="categories-sec">
                <h2 className="sec-heading">Select Difficulty Level</h2>
                <div className="container flex center categories-div">
                    <button onClick={(event)=>{
                        this.props.handleLevel(event, "easy");
                    }}
                    className={this.props.level === "easy" ? " btn btn-sec" : "btn btn-pri"
                }
                    >
                        Easy
                    </button>
                    </div>
            <button
            onClick={(event) => {
              this.props.handleLevel(event, "medium");
            }}
            className={
              this.props.level === "medium" ? "btn btn-sec" : "btn btn-pri"
            }
          >
            Medium
          </button>
          <button
            onClick={(event) => {
              this.props.handleLevel(event, "hard");
            }}
            className={
              this.props.level === "hard" ? "btn btn-sec" : "btn btn-pri"
            }
          >
            Hard
          </button>
          {this.props.category && this.props.level ? (
          <div className="home-btn-div sec-padding flex center">
            <NavLink
              to={`/quiz/${this.props.category.id}/${this.props.level}`}
              className="btn btn-sec"
            >
              {" "}
              Start Quiz
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </section>
        )
    }
}