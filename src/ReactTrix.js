import * as React from "react";
import { TrixEditor } from "react-trix";
import './ReactTrix.css';

class ReactTrix extends React.Component {
    constructor(props) {
        super(props);
    }
  handleEditorReady(editor) {
    // this is a reference back to the editor if you want to
    // do editing programatically
    editor.insertText("editor is ready");
  }
  handleChange(html, text) {
      console.log(text);
      console.log('html'+html);
    // html is the new html content
    // text is the new text content
    this.props.sendData(html);
  }
  
 
  render() {
    return (
      <div onKeyDown={this.props.sendData}>
        <trix-toolbar id="my_toolbar"></trix-toolbar>
        <span onClick={this.props.saveData}>
        <i  class="far fa-save fa-2x" ></i>
        </span>
  <TrixEditor onChange={this.props.handleChange} onEditorReady={this.handleEditorReady} toolbar="my_toolbar" input="my_input"></TrixEditor>
        </div>
        );
  }
}
export default ReactTrix;