require("dotenv").config({ path: ".env" });

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const port = process.env.SERVER_PORT || 5000;
const TelegramBot = require("node-telegram-bot-api");

const customer = require("./routes/costumer");
const driver = require("./routes/driver");
const order = require("./routes/order");
const logs = require("./routes/logs");
const product = require("./routes/product");
const order_item = require("./routes/order_item");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `Hallo ${msg.from.first_name} selamat datang di SHOPSHOPAN`,
    { parse_mode: "Markdown" }
  );
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.get("/", (req, res) => {
  res.json({
    author: "Abdur Rohman",
    github: "https://github.com/abdur-rohman2883",
  });
});

app.use("/api/order_item", order_item);
app.use("/api/customer", customer);
app.use("/api/product", product);
app.use("/api/driver", driver);
app.use("/api/order", order);
app.use("/api/logs", logs);

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: "Oops page not fund",
  });
});

app.listen(port, "0.0.0.0", () =>
  console.log(`Server is running on http://localhost:${port}`)
);
