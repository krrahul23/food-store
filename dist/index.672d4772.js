const heading = React.createElement("h1", {
    id: "heading",
    name: "Rahul"
}, "Hello World!!!!");
const heading3 = React.createElement("h3", {
    id: "third"
}, "Third");
const root = ReactDOM.createRoot(document.getElementById("root"));
const div3 = React.createElement("div", {
    id: "thirdDiv"
}, heading3);
const heading2 = React.createElement("h2", {
    id: "name"
}, "second");
const div2 = React.createElement("div", {
    id: "secondDiv"
}, [
    div3,
    heading2
]);
const div1 = React.createElement("div", {
    id: "firstDiv"
}, [
    div2,
    heading
]);
root.render(div1);
console.log(heading);
console.log(root);

//# sourceMappingURL=index.672d4772.js.map
