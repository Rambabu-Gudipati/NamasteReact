const mainContianer = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "reactheading"
        }, "This is h1 tag"),
        React.createElement("h1", {
            id: "reactheading"
        }, "This is h2 tag")
    ])
]);
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(mainContianer);

//# sourceMappingURL=index.6bd02f5a.js.map
