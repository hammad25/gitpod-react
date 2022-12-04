import logo from './logo.svg';
import './App.css';
// {/*Class and funtional*/}
// import FunctionalGreetings from "./components/FunctionalGreetings";
// import FunctionalGreetingsWithProps from "./components/FunctionalGreetingsWithProps";
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import StatefulGreetingWithPrevStatePrevProp from './components/StatefulGreetingWithPrevStatePrevProp';

// {/* Events */}
// import EventsFunctional from "./components/EventsFunctional";
// import EventsClass from "./components/EventsClass";

// {/*Methods as Props*/}
// import NestingComponents from "./components/events/NestingComponents"
// import MethodsAsPropsParent from "./components/methodsasprops/MethodsAsPropsParent"

// {/* Rendering Lists */}
// import RenderingLists from "./components/renderinglists/RenderingLists"

// life cycle 
// import LifeCyclesCDM from './components/lifecycle/LifeCycleCDM'
// import LifeCycleCDU from "./components/lifecycle/LifeCycleCDU"
import LifeCyclesCWU from "./components/lifecycle/LifeCyclesCWU"


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetings/>
      <FunctionalGreetingsWithProps greeting="Nice to meet you!" name="Mike" age="32"/>
      <StatefulGreeting greeting="Im a stateful class component" name="Hammad"/>
      <StatefulGreetingWithPrevState />
      <StatefulGreetingWithPrevStatePrevProp/>
      <EventsFunctional/>
      <EventsClass/> */}
      {/* <NestingComponents/> */}
      {/* <MethodsAsPropsParent/> */}

      {/* <RenderingLists/> */}

      {/* <LifeCyclesCDM/> */}
      {/* <LifeCycleCDU/> */}
      <LifeCyclesCWU/>


    </div>
  );
}

export default App;
