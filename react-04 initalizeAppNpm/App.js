import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div>
 *        <div>
 *          <h1>
 *          </h1>
 *          <h2>
 *          </h2>
 *        </div>
 *        <div>
 *          <h1>
 *          </h1>
 *          <h2>
 *          </h2>
 *        </div>
 * </div> 
 * 
 */

// to solve below distroted structure we use JSX


const heading = React.createElement("div", { id: "container" },
    [
        React.createElement("div", { id: "wrapper" },
            [
                React.createElement("h1", { id: "heading" }, "Hello Namaste React 🚀"),
                React.createElement("h2", { id: "heading" }, "Hello this is Heading inside div -> div")
            ]
        ),
        React.createElement("div", { id: "wrapper2" },
            [
                React.createElement("h1", { id: "heading" }, "Hello this is Heading inside div -> div"),
                React.createElement("h2", { id: "heading" }, "Hello this is Heading inside div -> div")
            ])
    ]
); // middle is the props i.e. we pass attributes and last is childrens i.e. single item or array []

console.log(heading); // object return from React.createElement not the h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);