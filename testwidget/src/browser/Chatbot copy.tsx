import axios from "axios";
import * as React from "react";

const Chatbot: React.FC<any> = () => {
  const [message, setMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<any[]>([]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:8001/get-messages")
      .then((res: any) => {
        const { data } = res.data;
        setMessages(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayMessage = () => {
    axios
      .post("http://localhost:8001/send-message", { message: message })
      .then((res: any) => {
        const { data } = res.data;
        // console.log(data.message);
        setMessages([...messages, data]);
        setMessage("");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="chatbox">
        <div className="chatbot-inner">
          <div className="chat-messages" id="chat-messages">
            {messages.map((msg) => {
              return <p key={msg._id}>{msg.message}</p>;
            })}
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-field"
              id="user-input"
              value={message}
              placeholder="Type a message..."
              onChange={onChangeHandler}
            />
            <button className="send-button" onClick={displayMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
