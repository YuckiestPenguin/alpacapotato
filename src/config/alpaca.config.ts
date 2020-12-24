import alpaca from '@master-chief/alpaca';

export default () => ({
  endpoint: process.env.ALPACA_ENDPOINT,
  apiKeyID: process.env.API_KEY_ID,
  secretKey: process.env.SECRET_KEY,
});
