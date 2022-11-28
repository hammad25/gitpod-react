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
        // setState is asynchronous and executing in the background
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, () => {
        // excecutes when setState is finished 
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText);
        });
        // excecutes while setState is still working in the backgroud
        console.log(this.state.introduction);
        console.log(this.state.buttonText);

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