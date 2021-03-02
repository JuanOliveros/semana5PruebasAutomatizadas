const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'firefox']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();
        
        await page.goto('http://localhost:2369/ghost/#/signin');
        await page.press('[placeholder="Email Address"]', 'Escape');
        await page.click('[placeholder="Email Address"]');
        await page.click('button:has-text("Sign in")');
        await page.click('[placeholder="Email Address"]');
        await page.fill('[placeholder="Email Address"]', 'c');
        await page.click('[placeholder="Email Address"]');
        await page.fill('[placeholder="Email Address"]', 'casduniandes');

        await page.click('[placeholder="Password"]');
        await page.fill('[placeholder="Password"]', 'uniandesmail');
        await page.click('text=Forgot? Retry');

        await page.click('button:has-text("Retry")');
        await page.click('button:has-text("Forgot?")');
        await page.click('text=Forgot? Retry We need your email address to reset your password!');
        await page.click('[placeholder="Email Address"]');
        await page.press('[placeholder="Email Address"]', 'Control+a');
        await page.fill('[placeholder="Email Address"]', 'aaa');
        await page.press('[placeholder="Email Address"]', 'AltGraph');
        await page.fill('[placeholder="Email Address"]', 'aaa@yahoo.jp');
        await page.click('text=Forgot? Retry We need your email address to reset your password!');
        await page.click('#ember9 svg');
        await page.click('button:has-text("Forgot?")');
        await page.click('svg');
        await page.click('[placeholder="Email Address"]');
        await page.press('[placeholder="Email Address"]', 'Control+a');
        await page.fill('[placeholder="Email Address"]', 'christianlzap');
        await page.press('[placeholder="Email Address"]', 'AltGraph');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.co');
        await page.click('[placeholder="Password"]');
        await page.fill('[placeholder="Password"]', 'uniandesmail12');
        await page.click('button:has-text("Retry")');
        await page.click('[placeholder="Email Address"]');
        await page.click('text=Forgot? Retry There is no user with that email address.');
        await page.click('[placeholder="Email Address"]');
        await page.press('[placeholder="Email Address"]', 'Control+a');
        await page.fill('[placeholder="Email Address"]', 'christianlzap');
        await page.press('[placeholder="Email Address"]', 'AltGraph');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.press('[placeholder="Email Address"]', 'Tab');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await page.click('button:has-text("Retry")');
        await page.goto('http://localhost:2369/ghost/#/site');
        await page.click('div[role="button"]:has-text("Example christianlzap@gmail.com")');
        await page.click('div[role="button"]:has-text("Example christianlzap@gmail.com")');
        await page.click('div[role="button"]:has-text("Example christianlzap@gmail.com")');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/signin' }*/),
            page.click('text=Sign Out')
        ]);



        await page.screenshot({ path: `test01.png` });
        await browser.close();
    }
})();
