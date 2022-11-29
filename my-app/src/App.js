import logo from './logo.svg';
import './App.css';
// import FunctionalGreetings from "./components/FunctionalGreetings";
// import FunctionalGreetingsWithProps from "./components/FunctionalGreetingsWithProps";
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import StatefulGreetingWithPrevStatePrevProp from './components/StatefulGreetingWithPrevStatePrevProp';
import EventsFunctional from "./components/EventsFunctional";
import EventsClass from "./components/EventsClass";


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetings/>
      <FunctionalGreetingsWithProps greeting="Nice to meet you!" name="Mike" age="32"/>
      <StatefulGreeting greeting="Im a stateful class component" name="Hammad"/>
      <StatefulGreetingWithPrevState />
      <StatefulGreetingWithPrevStatePrevProp/> */}
      <EventsFunctional/>
      <EventsClass/>

    </div>
  );
}

export default App;
