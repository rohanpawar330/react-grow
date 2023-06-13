import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "container" },
//    "Rohan Pawar 🚀"
// );
// console.log(heading)

// const jsxHeading = <h1 className="heading">Hello React from JSX! ☁️</h1>
// console.log(jsxHeading);

////  JSX code -> transapiled (convert that broswer can understand) "Parcel=> Babel" -> JS Engine i.e. browser

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const Title = () => (<h1>From JSX element 🚀</h1>)
const val = 100
// component composition in react
// JSX sanatise data before injecting it into component
// calling Title in different type all these are same as it's a function
// JSX have only one parent element at root level
var HeadingComponent = () =>
(
   <div>
      <Title />
      <Title></Title>
      {Title()}
      {val}
      <h1>Hello from functional component 😄</h1>
   </div>
)

// React Fragments
// const HeadingComponent = () =>
// (
//    <React.Fragment> or <>
//       <Title />
//       <Title></Title>
//       {Title()}
//       {val}
//       <h1>Hello from functional component 😄</h1>
//    </React.Fragment> or </>
// )


// or

var HeadingComponent1 = () => <h1>Hello from functional component</h1>

// or

var HeadingComponent2 = () => (
   <h1 className="head">Second Root</h1>
)

// // we can have multiple roots in our app
const root = ReactDOM.createRoot(document.getElementById("root"));
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root.render(<HeadingComponent />);
// root2.render(<HeadingComponent2 />);

root.render(<HeadingComponent/>); // rendering react element

