import alpaca from '@master-chief/alpaca';

export const client = new alpaca.AlpacaClient({
  credentials: {
    key: process.env.API_KEY_ID,
    secret: process.env.SECRET_KEY,
  },
  rate_limit: true,
});
