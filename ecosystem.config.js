module.exports = {
    apps: [{
      name: 'brent-service',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-19-61-244.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/fec-reviews.pem',
        ref: 'origin/development',
        repo: 'git@github.com:yum-ly/brent-service.git',
        path: '/home/ubuntu/fec-reviews',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }