import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "pythonQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Mention three characteristics of a Python closure ",
            answer:
              "Three characteristics of a Python closure are: it is a nested function. it has access to a free variable in outer scope. it is returned from the enclosing function.",
            id: 1,
          },
          {
            question: "What is meant by recurrence relation?",
            answer:
              "A recurrence relation is an equation that defines a sequence based on a rule that gives the next term as a function of the previous term(s)",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "elixirQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What are the features of Elixir?",
            answer:
              "Scalability, Fault Tolerance, Functional Programming, Build Tools, Erlang Compatibility.",
            id: 1,
          },
          {
            question: "Which platform is used to run Elixir?",
            answer:
              "BEAM(Erlang virtual machine) platform is used to run Elixir",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
