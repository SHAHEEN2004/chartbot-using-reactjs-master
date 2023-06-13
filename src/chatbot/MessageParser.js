class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();
    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
    if (lowercase.includes("python") || lowercase.includes("py")) {
      this.actionProvider.handlePythonQuiz();
    }
    if (lowercase.includes("elixir") || lowercase.includes("elx")) {
      this.actionProvider.handleElixirQuiz();
    }
  }
}
export default MessageParser;
