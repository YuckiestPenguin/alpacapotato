import {Injectable} from '@nestjs/common';
import {client} from "./config/alpacaClient.config";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getAccountInfo() {
    return await client.getAccount();
  }
}
