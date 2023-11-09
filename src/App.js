import React from "react";
import { editorText } from "./editorText";
import ReactMarkdown from "react-markdown";
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: editorText,
      preview: editorText
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ editor: event.target.value, preview: event.target.value });
  }
  render() {
    return (
      <div>
        <div id="editor_window">
          <h4>Editor</h4>
          <textarea
            id="editor"
            value=<ReactMarkdown>{this.state.editor}</ReactMarkdown>
            onChange={this.handleChange}
          />
        </div>
        <div id="preview_window">
          <h4>Previewer</h4>
          <textarea id="preview" value={this.state.preview} />
          <div id="preview" />
        </div>
      </div>
    );
  }
}
