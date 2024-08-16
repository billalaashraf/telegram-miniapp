import dotenv from "dotenv";

dotenv.config();
export const config = {
  port: process.env.PORT ?? 3000,
  applicationUrl: process.env.APPLICATION_URL ?? '',
  telegramUrl: process.env.TELEGRAM_URL ?? '',
  telegramToken: process.env.TELEGRAM_TOKEN ?? '',
  botUsername: process.env.BOT_USERNAME ?? '',
}