module.exports = {
  apps: [{
    name: 'tnShop',
    script: './build/server.js',
    cwd: '/home/thinknetica/client/current',
    instances: 2,
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 9020
    }
  }],

  deploy: {
    production: {
      user: 'thinknetica',
      host: ['tn.x01d.com'],
      ref: 'origin/master',
      repo: 'git@github.com:index01d/tnShop.git',
      path: '/home/thinknetica/client',
      'post-deploy': 'yarn && yarn build:server && pm2 startOrRestart pm2.config.js --env production'
    }
  }
};