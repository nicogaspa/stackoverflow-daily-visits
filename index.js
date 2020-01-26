const {chromium, firefox, webkit} = require('playwright');


(async () => {
  const browser = await chromium.launch({
    headless:false
  });
  const context = await browser.newContext({
    viewport:{width: 1000, height: 1000}
  });
  const page = await context.newPage('https://stackoverflow.com/users/login');
  // await page.screenshot({path: `example.png`});
  await browser.close();
})();