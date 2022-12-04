import React from "react";

// 1. make components folder
// 2. js file 
// 3. create arrow function, export, import in App
// 4. adding props to component, retriving props and rendering using {}

const FunctionalGreetingsWithProps = (props) => {
    console.log(props)
    return <h1> Hello, {props.name}! I see you're {props.age} years old; {props.greeting} </h1>;
}


export default FunctionalGreetingsWithProps