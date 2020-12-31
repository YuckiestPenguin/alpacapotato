import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {client} from "../config/alpacaClient.config";
import {WatchList} from "./watchlist.model";

@Controller('watchlists')
export class WatchlistController {


  @Post('')
  async create(@Body() newWatchList: WatchList) {
    try {
      return await client.createWatchlist({
        name: newWatchList.name,
        symbols: newWatchList.symbols,
      })
    } catch (error) {
      console.log(error);
    }
  }


  @Get('')
  async getAllWatchLists() {
    return await client.getWatchlists();
  }

  @Get(':watchlistID')
  async getQuote(@Param('watchlistID') watchlistID: string) {
    try {
      return await client.getWatchlist({uuid: watchlistID})
    } catch (e) {
      console.log(e);
      return;
    }
  }


  @Post(':watchlistID')
  async addToWatchlist(@Param('watchlistID') watchlistID: string, @Body() newSymbol: newSymbol) {
    try {
      return await client.addToWatchlist({
        uuid: watchlistID,
        symbol: newSymbol.symbol,
      })
    } catch (error) {
      console.log(error);
    }
  }
}


export interface newSymbol {
  symbol: string;
}
