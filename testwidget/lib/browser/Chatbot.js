"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chatbot = void 0;
const React = require("react");
const core_1 = require("@theia/core");
const inversify_1 = require("@theia/core/shared/inversify");
// import { EditorManager } from "@theia/editor/lib/browser";
const axios_1 = require("axios");
class Chatbot extends React.Component {
    constructor(props) {
        super(props);
        // @inject(EditorManager) protected readonly editorManager: EditorManager;
        this.state = {
            message: "",
            messages: [],
        };
        this.onChangeHandler = this.onChangeHandler.bind(this); // Bind onChangeHandler method in the constructor
    }
    onChangeHandler(event) {
        // console.log(event.target.value);
        this.setState(Object.assign(Object.assign({}, this.state), { message: event.target.value }));
    }
    async replaceResult() { }
    displayMessage() {
        if (this.state.message != "") {
            this.setState({
                messages: [
                    ...this.state.messages,
                    { type: "user", message: this.state.message },
                ],
                message: "",
            });
        }
        axios_1.default
            .post("http://localhost:8001/send-message", {
            message: this.state.message,
        })
            .then((res) => {
            const { data } = res.data;
            this.setState({
                messages: [
                    ...this.state.messages,
                    { type: "bot", message: data.answer },
                ],
                message: "",
            });
        })
            .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "chatbox" },
                React.createElement("div", { className: "chatbot-inner" },
                    React.createElement("div", { className: "chat-messages", id: "chat-messages" }, this.state.messages.map((msg, index) => {
                        return (React.createElement("div", { key: index }, msg.type == "user" ? (React.createElement("div", { className: "user-chat" },
                            React.createElement("p", null, msg.message))) : (React.createElement("div", { className: "bot-chat" },
                            React.createElement("p", null, msg.message)))));
                    })),
                    React.createElement("div", { className: "input-container" },
                        React.createElement("input", { type: "text", className: "input-field", id: "user-input", value: this.state.message, placeholder: "Type a message...", onChange: this.onChangeHandler }),
                        React.createElement("button", { className: "send-button", onClick: (_a) => this.displayMessage() }, "Send"))))));
    }
}
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], Chatbot.prototype, "messageService", void 0);
exports.Chatbot = Chatbot;
//# sourceMappingURL=Chatbot.js.map