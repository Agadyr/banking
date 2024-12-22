import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID as string,
      'PLAID-SECRET': process.env.PLAID_SECRET as string,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

export { plaidClient };