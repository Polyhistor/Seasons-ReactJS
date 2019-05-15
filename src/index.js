import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error:{errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
};

// class App extends React.Component {
//   state = { lat: null, erroMessage: "" };

//   // The lifecycle is like this -> constructor - render - commentDidMount - commentDidUpdate - commentWillUnmount

//   componentDidUpdate() {
//     console.log("my component was just updated - rerendered");
//   }

//   renderContent() {
//     if (erroMessage && !lat) {
//       return <div>Error: {erroMessage}</div>;
//     }

//     if (erroMessage && lat) {
//       return <SeasonDisplay lat={lat} />;
//     }

//     return;
//   }

//   // React requirement
//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

ReactDom.render(<App />, document.querySelector("#root"));
