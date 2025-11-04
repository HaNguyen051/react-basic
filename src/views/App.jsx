import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

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
        <p>Hello world with React.js (Ha Nguyen)</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* ShortCut */}
        <MyComponent/>
        {/* <MyComponent></MyComponent>  full */}
      </header>
    </div>
  );
}

export default App;
