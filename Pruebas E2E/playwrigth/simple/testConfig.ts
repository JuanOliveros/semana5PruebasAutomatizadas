const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'firefox']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();

        await page.goto('http://localhost:2369/ghost/#/signin');
        await page.click('[placeholder="Email Address"]');
        await page.fill('[placeholder="Email Address"]', 'christianlzap');
        // Press AltGraph
        await page.press('[placeholder="Email Address"]', 'AltGraph');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.click('[placeholder="Password"]');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/site' }*/),
            page.click('button:has-text("Sign in")')
        ]);


        
        await page.goto('http://localhost:2369/ghost/#/staff');
        await page.click('text=General');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/settings/general');
        await page.click('button:has-text("Expand")');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts' }*/),
            page.click('text=Posts')
        ]);
        await page.click('text=General >> svg');
        await page.click('input[type="text"]');
        await page.click('input[type="text"]');
        await page.fill('input[type="text"]', 'Redesign n');
        await page.press('input[type="text"]', 'Control+a');
        await page.fill('input[type="text"]', 'rename')
        await page.click('text=Publication Language Set the language/locale which is used on your site Expand >> button');
        await page.click('button:has-text("Upload Image")');
        //await page.setInputFiles('button:has-text("Upload Image")', 'screenshot.png');
        await page.click('text=Meta data Extra content for search engines Expand >> button');
        await page.click('[placeholder="rename"]');
        await page.fill('[placeholder="rename"]', 'ghost uniandes test');
        await page.click('textarea');
        await page.fill('textarea', 'meta description added');
        await page.click('text=Twitter card Customise structured data of your site for Twitter Expand >> button');
        await page.click(':nth-match(button:has-text("Expand"), 3)');
        await page.click('[placeholder="https://www.facebook.com/ghost"]');
        await page.fill('[placeholder="https://www.facebook.com/ghost"]', 'https://www.facebook.com/ghost1');
        await page.click('[placeholder="https://twitter.com/ghost"]');
        await page.fill('[placeholder="https://twitter.com/ghost"]', 'https://twitter.com/ghost1');
        await page.click('button:has-text("Save settings")');

        await page.screenshot({ path: `test05.png` });
        await browser.close();
    }
})();
