import httpClient from '../httpclient';
import { config } from '../config';

export default class RegisterController {

  private static client = httpClient(`${config.telegramUrl}`);
  public static async register(): Promise<{ ok: Boolean, error_code: number, description: string } | undefined> {
    const setHookUrl = `/bot${config.telegramToken}/setWebhook?url=${config.applicationUrl}&allowed_updates=["callback_query","message"]`;
    const response: any = await this.client.post(setHookUrl);
    return response;
  }
}