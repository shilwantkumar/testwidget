import React = require("react");
import { MessageService } from "@theia/core";
import {
  inject,
  injectable,
  postConstruct,
} from "@theia/core/shared/inversify";
// import { EditorManager } from "@theia/editor/lib/browser";
import axios from "axios";
export class Chatbot extends React.Component<any> {
  @inject(MessageService)
  protected readonly messageService!: MessageService;
  // @inject(EditorManager) protected readonly editorManager: EditorManager;
  state = {
    message: "",
    messages: [],
  };

  constructor(props: any) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this); // Bind onChangeHandler method in the constructor
  }
  protected onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    // console.log(event.target.value);
    this.setState({ ...this.state, message: event.target.value });
  }

  protected async replaceResult() {}
  protected displayMessage(): void {
    if (this.state.message != "") {
      this.setState({
        messages: [
          ...this.state.messages,
          { type: "user", message: this.state.message },
        ],
        message: "",
      });
    }
    axios
      .post("http://localhost:8001/send-message", {
        message: this.state.message,
      })
      .then((res: any) => {
        const { data } = res.data;
        this.setState({
          messages: [
            ...this.state.messages,
            { type: "bot", message: data.answer },
          ],
          message: "",
        });
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  override render(): React.ReactNode {
    return (
      <>
        <div className="chatbox">
          <div className="chatbot-inner">
            <div className="chat-messages" id="chat-messages">
              {this.state.messages.map((msg: any, index: number) => {
                return (
                  <div key={index}>
                    {msg.type == "user" ? (
                      <div className="user-chat">
                        <p>{msg.message}</p>
                      </div>
                    ) : (
                      <div className="bot-chat">
                        <p>{msg.message}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="input-container">
              <input
                type="text"
                className="input-field"
                id="user-input"
                value={this.state.message}
                placeholder="Type a message..."
                onChange={this.onChangeHandler}
              />
              <button
                className="send-button"
                onClick={(_a) => this.displayMessage()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
