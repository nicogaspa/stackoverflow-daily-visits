const {chromium} = require('playwright');


(async () => {
  const USERNAME = "your_username";
  const PASSWORD = "your_password";

  try {
    const browser = await chromium.launch({headless: true});
    const context = await browser.newContext({
      viewport: {width: 1000, height: 1000}
    });

    const page = await context.newPage('https://stackoverflow.com/users/login');
    await page.waitFor('#email');
    const username_selector = await page.$('#email');
    await username_selector.fill(USERNAME);

    const pass_selector = await page.$('#password');
    await pass_selector.fill(PASSWORD);

    const submit = await page.$('#submit-button');
    await submit.click({button: "left"});
    await page.waitFor('.my-profile');
    const myprofile = await page.$('.my-profile');
    await myprofile.click();
    await browser.close();
  } catch (e) {
    console.log("Init exception" + e)
  }
})();