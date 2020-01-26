const {chromium, firefox, webkit} = require('playwright');


(async () => {
  const USERNAME = "your_username";
  const PASSWORD = "your_password";

  const browser = await chromium.launch({
    headless:false
  });
  const context = await browser.newContext({
    viewport:{width: 1000, height: 1000}
  });
  const page = await context.newPage('https://stackoverflow.com/users/login');
  await page.waitFor('#email');
  const username_selector = await page.$('#email');
  await username_selector.fill(USERNAME);

  const pass_selector = await page.$('#password');
  await pass_selector.fill(PASSWORD);

  const submit = await page.$('#submit-button');
  await submit.click({
    button:"left"
  });
  await browser.close();
})();