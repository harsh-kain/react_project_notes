// const heading = React.createElement('h1',
// {
//     id: "heading" ,

// },
// "Kain");

/* react.createElement is used to create a element in form of object and it takes 3 parameter (elementName , elementAttributes like ID , content which i have to put in the element )

Then we have to render the created element using root.render and we have to pass the root reference as well 
*/

/* 
    when can also create nested child as well using the react.createdElement 
    we can pass the third argument as a another child 
    or we can also create the sibbling or a parent can have multiple element 
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "h1" }, "I'm H1 tag"),
      React.createElement("h2", { id: "h2" }, "I'm H2 tag"),
    ]),
  ],

  [
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "h1" }, "I'm H1 tag"),
      React.createElement("h2", { id: "h2" }, "I'm H2 tag"),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("id"));
root.render(parent);


// react will replace all the content form root div 