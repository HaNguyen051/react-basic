import logo from "./logo.svg";
import "./App.scss";
import Counter from "./Example/MyComponent";
import HelloComponent from "./Example/HelloComponent";
//import la es6
//require la js5

/**
 * 2 component  : class component / function componnent (function , arrow)
 * JSX
 * Hien nay dung hook thi nen dung function component la chu yeu
 */


//function component => tra ve 1 khoi JSX => html
function App() {
  //JSX
  return (
    //babel webpack
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* ShortCut */}
        <Counter/>
        {/* <MyComponent></MyComponent>  full */}
      </header>
    </div>
  );
}

export default App;
