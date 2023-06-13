import React from "react";
import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    {
      text: "Python",
      handler: props.actionProvider.handlePythonQuiz,
      id: 2,
    },
    { text: "Elixir", handler: props.actionProvider.handleElixirQuiz, id: 3 },
  ];
  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));
  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
