const mongoose = require('mongoose');
const Chat = require("./model/chat.js");

main()
   .then(()=> {
    console.log("connection successful");
   })
   .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "om",
    to : "dron",
    msg: "send me your exam notes",
    created_at: new Date(),
  },
    {
    from: "rohit",
    to : "mohit",
    msg: "Let Hangout",
    created_at: new Date(),
  },
    {
    from: "amit",
    to : "sumit",
    msg: "Drink Coffee",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);

