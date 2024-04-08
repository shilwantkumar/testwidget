const Message = require("./schema");
const data = require("./data");
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    if (messages) {
      return res.status(200).json({
        data: messages,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const answer = data.filter((elem) => elem.question == message)[0];
    if (answer) {
      return res.status(200).json({
        data: answer,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { sendMessage, getMessages };
