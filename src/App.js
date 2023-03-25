import logo from "./logo.svg";
import "./App.css";

import Signin from "./pages/signin/signim";
import SignUp from "./pages/signup/signup";
import HeaderFun from "./components/header/header";
import DemoForPrac from "./pages/demoForPrac/demoForPrac";
import Takenoteone from "./components/takenote1/takenote1";
import Takenotetwo from "./components/takenote2/takenote2";
import DashBoardFun from "./pages/dashboard/dashboard";
import Demo from "./pages/demoForPrac/demoForPrac";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <Signin/>   
        {/*     <SignUp/>   */}
        {/*   <HeaderFun/>   */}
        {/*  <DemoForPrac/>   <Takenotetwo/>    */}

        {/* <DashBoardFun /> */}
        {/* <Demo/> */}
      </div>
    // </Provider>
  );
}

export default App;
