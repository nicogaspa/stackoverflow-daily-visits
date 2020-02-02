const {getChrome} = require('./chrome-script')

module.exports.hello = async event => {
  const chrome = await getChrome();

  const browser = await puppeteer.connect({
    browserWSEndpoint: chrome.endpoint
  });

  const page = await browser.newPage();
  await page.goto('https://stackoverflow.com/users/login', {waitUntil: 'networkidle2'});

  //TODO

  let datetime = new Date();
  return {
    statusCode: 200,
    body: JSON.stringify(`Done for ${datetime}`),
  };

};
