import logo from './logo.svg';
import './App.css';
import './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo'
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/newContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Pranita">
        <ComponentC></ComponentC>
      </UserProvider>
      
      {/* <User render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />
      <User render = {(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <ClickCounterTwo></ClickCounterTwo>
      <HoverCounterTwo></HoverCounterTwo> */}
      {/* <ClickCounter></ClickCounter> */}
      {/* <PortalDemo></PortalDemo> */}
      {/* <FocusInput></FocusInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentComp></ParentComp> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <Form></Form> */}
      {/* <h1 className='error'> Error</h1>
      <h2 className={styles.success}> Success </h2>
      <Inline></Inline>
      <Stylesheets></Stylesheets> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Greet name= "Pranita"></Greet>
      <Greet name= "Mahadik"></Greet>
      <Welcome></Welcome> */}
    </div>
  );
}

export default App;
