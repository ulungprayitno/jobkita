const env = process.env.REACT_APP_ENV || 'LOCAL';
interface IConfig {
  [key: string]: any;
}
const CONFIGS: IConfig = {
  LOCAL: {
    MY_URL: 'http://localhost:3005',
    PARTICLE_ENV: 'local',
    IS_DEBUG: false,
    SENTRY_ENABLE: false,
    GA_ENABLE: false,
    COOKIE_DOMAIN: 'localhost',
    COOKIE_SUFFIX: '_local',
  }
};

let CONFIG = CONFIGS[env] || CONFIGS.LOCAL;

export default CONFIG;
