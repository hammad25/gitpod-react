import React from "react";

class StatefulGreetingWithPrevStatePrevProp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // initial state
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick(){
        // use setState to update 
        // setState is asynchronous and executing in the background
        this.setState((prevState, prevProps) => {
            console.log("previous State", prevState)
            console.log("previous Props", prevProps)
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        })
    }

    // issues with multiple setState Calls?
    increment(){
        // Using callback functions with prev state to chnage state
        this.setState((prevState, prevProps) => {
            console.log("previous State", prevState)
            console.log("previous Props", prevProps)
            return {
                count : prevState.count + 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.introduction} </h1>
                {/* updating the state with onClick(), then use an event handler to listen for the click
                and use setState() to update the state */}
                {/* onClick a js hence in { } and ()=> */}
                <button onClick={()=> this.handleClick()}>{this.state.buttonText}</button>
                
                {/* Increment button */}
                <button onClick={() => this.increment()}>Increment</button>
                <p>You have clicked {this.state.count} times</p>

            </div>
        ) 
    }
}

export default StatefulGreetingWithPrevStatePrevProp