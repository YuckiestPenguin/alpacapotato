import {Controller, Get, Param} from '@nestjs/common';
import {client} from "../config/alpacaClient.config";

@Controller('quotes')
export class QuotesController {

  @Get(':stockTicker')
  async getQuote(@Param('stockTicker') stockTicker: string) {
    try {
      return await client.getLastQuote({symbol: `${stockTicker.toUpperCase()}`});
    } catch (e) {

      console.log(e);
      return;
    }
  }

}
