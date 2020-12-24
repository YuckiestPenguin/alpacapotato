import alpaca from '@master-chief/alpaca';

export default () => ({
  endpoint: process.env.ALPACA_ENDPOINT,
  apiKeyID: process.env.API_KEY_ID,
  secretKey: process.env.SECRET_KEY,
});

const client = new alpaca.AlpacaClient({
  credentials: {
    key: process.env.API_KEY_ID,
    secret: process.env.SECRET_KEY,
  },
  rate_limit: true,
});
