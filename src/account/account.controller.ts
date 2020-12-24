import {Controller, Get} from '@nestjs/common';
import {client} from "../config/alpacaClient.config";

@Controller('account')
export class AccountController {


  @Get('')
  async getAccountInfo() {
    return await client.getAccount()
  }

  @Get('config')
  async getAccountConfig() {
    return await client.getAccountConfigurations()
  }

  @Get('activities')
  async getAccountActivities() {
    return await client.getAccountActivities({})
  }
}

