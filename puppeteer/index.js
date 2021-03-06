const puppeteer = require('puppeteer');

(async () => {
  const USERNAME = "your_username";
  const PASSWORD = "your_password";

  try {
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']})
    const page = await browser.newPage();
    await page.goto('https://stackoverflow.com/users/login', {waitUntil: 'networkidle2'});
    await page.type('#email', USERNAME)
    await page.type('#password', PASSWORD)
    await page.click('#submit-button')
    await page.waitForNavigation()
    await page.waitFor('.my-profile')
    await page.click('.my-profile')
    browser.close()
  } catch (e) {
    console.log("Init exception" + e)
  }

  let datetime = new Date();
  console.log(`Done for ${datetime}`)
})();
