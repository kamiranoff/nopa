import secret from './secrets';

const envs = {
  dev: {
    CLIENT_ID: secret.client_id,
    SERVICE_SECRET: secret.service_secret,
    APP_SECRET: secret.app_secret,
    BASE_URL_WS: 'https://www.saltedge.com/api/v3/',
    API: {
      LOGINS: 'logins',
      ACCOUNTS: 'accounts',
      TRANSACTIONS: 'transactions',
    },
  },
  // les urls de production tapent en recette avant la mise en production effective
  production: {
    BASE_URL_WS: 'https://www.saltedge.com/api/v3/',
  },
};

// pour eviter de dupliquer les variables identiques
const envGlobal = {};

const getEnvironment = () => {
  const chosenEnv = (__DEV__) ? 'dev' : 'production';
  return Object.freeze(Object.assign(envGlobal, envs[chosenEnv]));
};

export default getEnvironment;
