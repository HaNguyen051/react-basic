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
        <MyComponent/>
        {/* ShortCut */}
        {/* <MyComponent></MyComponent>  full */}
      </header>
    </div>
  );
}

export default App;
