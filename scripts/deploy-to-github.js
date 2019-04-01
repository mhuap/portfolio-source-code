const gh-pages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/mhuap/mhuap.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
