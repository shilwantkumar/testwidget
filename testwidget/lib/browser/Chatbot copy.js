"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const React = require("react");
const Chatbot = () => {
    const [message, setMessage] = React.useState("");
    const [messages, setMessages] = React.useState([]);
    const onChangeHandler = (event) => {
        setMessage(event.target.value);
    };
    React.useEffect(() => {
        axios_1.default
            .get("http://localhost:8001/get-messages")
            .then((res) => {
            const { data } = res.data;
            setMessages(data);
        })
            .catch((err) => console.log(err));
    }, []);
    const displayMessage = () => {
        axios_1.default
            .post("http://localhost:8001/send-message", { message: message })
            .then((res) => {
            const { data } = res.data;
            // console.log(data.message);
            setMessages([...messages, data]);
            setMessage("");
        })
            .catch((err) => {
            console.log(err);
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "chatbox" },
            React.createElement("div", { className: "chatbot-inner" },
                React.createElement("div", { className: "chat-messages", id: "chat-messages" }, messages.map((msg) => {
                    return React.createElement("p", { key: msg._id }, msg.message);
                })),
                React.createElement("div", { className: "input-container" },
                    React.createElement("input", { type: "text", className: "input-field", id: "user-input", value: message, placeholder: "Type a message...", onChange: onChangeHandler }),
                    React.createElement("button", { className: "send-button", onClick: displayMessage }, "Send"))))));
};
exports.default = Chatbot;
//# sourceMappingURL=Chatbot%20copy.js.map