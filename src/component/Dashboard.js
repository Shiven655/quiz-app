import React from "react";
import {Route, Routes, Fragment} from "react-router-dom";
import Header from "./Header"
import Category from "./Category";
import Level from "./Level";
import QuizHome from "./QuizHome";

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            categories: null,
            levels: null
        }
    }
    handleCategory =(event, category) =>{
        this.setState ({category: category});
    };
    handleLevel = (event, level) =>{
        this.setState ({level : level});
    };

    render(){
        return(
            <>
            <Header/>
            {              /* 
                <Category
                  category={this.state.category}
                  handleCategory={this.handleCategory}
                />
                <Level
                  level={this.state.level}
                  handleLevel={this.handleLevel}
                  category={this.state.category}
                /> */
            }
            <Routes>
                <Route path ="/"
                exact 
                element ={
                    <>
                    <Category category = {this.state.category}
                    handleCategory={this.handleCategory} />
                    <Level level={this.state.level}
                    handleLevel={this.handleLevel}
                    category={this.state.category}
                    />
                    </>
                }
                />
                <Route path ="/quiz/:category/:level" element={<QuizHome />}/>
            </Routes>
            </>
        );
    }
}
export  default Dashboard;