import logo from './logo.svg';
import './App.css';
import FunctionalGreetings from "./components/FunctionalGreetings";
import FunctionalGreetingsWithProps from "./components/FunctionalGreetingsWithProps";
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreetings/>
      <FunctionalGreetingsWithProps greeting="Nice to meet you!" name="Mike" age="32"/>
      <StatefulGreeting greeting="Im a stateful class component" name="Hammad"/>
    </div>
  );
}

export default App;
