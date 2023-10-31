
const mainContianer = React.createElement("div", {id: "parent"}, 
React.createElement("div", {id: "child"}, React.createElement("h1", {id: "reactheading"}, "Rambabu React")))

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(mainContianer)