const puppeteer = require('puppeteer');

(async () => {
  const USERNAME = "your_username";
  const PASSWORD = "your_password";

  try {
    const browser = await puppeteer.launch({headless: false})
  } catch (e) {
    console.log("Init exception" + e)
  }
  const page = await browser.newPage();
  await page.goto('https://stackoverflow.com/users/login', {waitUntil: 'networkidle2'});
  await page.type('#email', USERNAME)
  await page.type('#password', PASSWORD)
  await page.click('#submit-button')
  await page.waitForNavigation()
  browser.close()

  let datetime = new Date();
  return {
    statusCode: 200,
    body: JSON.stringify(`Done for ${datetime}`),
  };
})();
