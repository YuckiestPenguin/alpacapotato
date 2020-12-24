import alpaca from '@master-chief/alpaca';
import configuration from './alpaca.config';

export const client = new alpaca.AlpacaClient({
  credentials: {
    key: configuration().apiKeyID,
    secret: configuration().secretKey,
  },
  rate_limit: true,
});
