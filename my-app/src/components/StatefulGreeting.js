import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // initial state
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick(){
        // use setState to update 
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        });
        console.log(this.state.introduction);
    }

    render(){
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                {/* updating the state with onClick(), then use an event handler to listen for the click
                and use setState() to update the state */}
                {/* onClick a js hence in { } and ()=> */}
                <button onClick={()=> this.handleClick()}>{this.state.buttonText}</button>
            </div>
        ) 
    }
}

export default StatefulGreeting;