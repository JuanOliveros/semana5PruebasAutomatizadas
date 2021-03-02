const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'firefox']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();
        
        await page.goto('http://localhost:2369/ghost/');
        await page.goto('http://localhost:2369/ghost/#/signin');
        await page.click('[placeholder="Email Address"]');
        await page.fill('[placeholder="Email Address"]', 'christianlzap');
        await page.press('[placeholder="Email Address"]', 'AltGraph');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.press('[placeholder="Email Address"]', 'Tab');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await Promise.all([
          page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/site' }*/),
          page.click('button:has-text("Sign in")')
        ]);
        await Promise.all([
          page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts' }*/),
          page.click('text=Posts')
        ]);
        await page.click('#ember29 svg');
        await page.click('textarea');
        await page.fill('textarea', 'Example Title');
        await Promise.all([
          page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/editor/post/603e4dd834c23b1c6003abc2' }*/),
          page.click('#ember179 div div')
        ]);
        await page.click('div[role="button"]:has-text("Publish")');
        await page.click('button:has-text("Publish")');
        const [page1] = await Promise.all([
          page.waitForEvent('popup'),
          page.click('text=View Post')
        ]);



        await page.screenshot({ path: `screenshots/example-${browserType}.png` });
        await browser.close();
    }
})();
