import React from "react";

class StatefulGreetingWithPrevState extends React.Component {
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
        this.setState({
            introduction: this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
            
            // Any time we need to run some code after the state update is complete
            // place the code in a call back function as a second parametter , () =>{}
        }, () => {
        // excecutes when setState is finished 
        console.log('new state', this.state.introduction);
        console.log('new state', this.state.buttonText);
        });
        // excecutes while setState is still working in the backgroud
        console.log(this.state.introduction);
        console.log(this.state.buttonText);

    }

    increment(){
        this.setState({
            count : this.state.count + 1
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

export default StatefulGreetingWithPrevState