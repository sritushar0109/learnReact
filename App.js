const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something" }, [
    React.createElement("h1", {}, "Adopt e!"),
    React.createElement(Pet, {
      name: "Akarsh",
      animal: "Dog2",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Padf",
      animal: "Dog3",
      breed: "Havanese2",
    }),
    React.createElement(Pet, {
      name: "Shikha",
      animal: "Dog4",
      breed: "Havanese3",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
