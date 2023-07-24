import React from "react";
export default class Category extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            categories: null,
        };
    }
    componentDidMount(){
    fetch("https://opentdb.com/api_category.php")
    .then((res)=>res.json())
    .then((x)=>{
        this.setState({
            categories: x.trivia_categories,
        });
    });
    }
    render(){
        return(
            <>
            {this.state.categories ?(
            <section className="container">
                <h2 className="sec-heading">Select Category</h2>
                <div className="flex-flex-wrap category-div">
                    {this.state.categories.map((category)=>{
                        return(
                            <button onClick={(event) =>{
                                this.props.handleCategory(event, category);
                            }}
                            className=
                            {this.props.category === category ?
                            'btn btn-sec'
                             :"btn btn-pri"
                            }
                            key={category.id}
                            >
                            </button>
                        );
                    })}
                </div>
            </section>
            ):(
                ""
            )}
            </>
        );
    }
}
