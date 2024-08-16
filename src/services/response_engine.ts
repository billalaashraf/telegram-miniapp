import { config } from "../config";
import httpClient from "../httpclient/client";
import { TelegramResponseBody } from "./interfaces";

const greetingCommands = [
  "hi",
  "hello",
  "hey",
  "howdy",
  "greetings",
  "what's up",
  "hi there",
  "hello there",
  "hey there",
  "good day",
  "yo",
  "sup",
  "what's good",
  "hey fam",
  "what's poppin",
  "hey yo",
  "what's crackin",
  "yo yo", 
  "what's up fam",
  "hey hey"
];
const commandList: Record<string, string> = {
  "/start" : "Let's get started",
  "/connect": "Instructions to connect wallet, check balance", 
  "/buy": "Instructions to buy a coin", 
  "/sell": "Instructions to sell a coin",
  "/list": "List of all coins",
  "/help": "List of all commands"
};
const greeting = "Hello, Master! how can i help you? \nyou can type /help to see all commands";
const client = httpClient(`${config.telegramUrl}`);

let chatId = -1;

function responseEngine(body: TelegramResponseBody) {
  parseTelegramResponse(body);
}

function parseTelegramResponse(body: TelegramResponseBody) {
  chatId = body.message.chat.id;
  if (body.message.text.startsWith("/")) {
    executeCommand(body.message.text);
  } else if (greetingCommands.includes(body.message.text.toLowerCase())) {
    sendMessage(greeting);
  } else {
    sendCommandList();
  }
}

function executeCommand(command: string) {
  if (Object.keys(commandList).includes(command)) {
    sendMessage(commandList[command]);
  }
}

function sendCommandList() {
  let commandListMessage = "Master, I am unable to understand your command.\nHere is the list of commands:\n";
  Object.keys(commandList).forEach((command) => {
    commandListMessage += `${command} - ${commandList[command]}\n`;
  });
  sendMessage(commandListMessage);
}

function sendMessage(message: string) {
  if (chatId <= 0) {
    console.error("Chat ID not found");
    return;
  }
  console.log(message);
  client.post("/bot" + config.telegramToken + "/sendMessage", {
    chat_id: chatId,
    text: message
  });
}

export default responseEngine