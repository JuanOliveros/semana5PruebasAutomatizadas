const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();

        const versionGhost = '2999';//'2369';//2999


        await page.goto('http://localhost:' + versionGhost   + '/ghost/#/signin');
        delay(5000);

        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await page.screenshot({ path: `screenshot/001-${versionGhost}.png` });
        await Promise.all([
          page.waitForNavigation(/*{ url: 'http://localhost:2999/ghost/#/site' }*/),
          page.click('button:has-text("Sign in")')
        ]);

        await page.screenshot({ path: `screenshot/002-${versionGhost}.png` });

        await Promise.all([
          page.waitForNavigation(/*{ url: 'http://localhost:2999/ghost/#/settings/design' }*/),
          page.click('text=Design'),
          await page.screenshot({ path: `screenshot/003-${versionGhost}.png` })
        ]);

        


        await page.click('button:has-text("Add")');
        await page.click('text=You must specify a label Add >> [placeholder="Label"]');
        await page.fill('text=You must specify a label Add >> [placeholder="Label"]', 'Example01');
        await page.screenshot({ path: `screenshot/004-${versionGhost}.png` });
        await page.click('button:has-text("Add")');
        await page.click('#ember100');
        await page.fill('#ember100', 'Example02');
        await page.screenshot({ path: `screenshot/005-${versionGhost}.png` });
        await page.click('button:has-text("Add")');
        await page.click('#ember100');
        await page.fill('#ember100', 'Example 03');
        await page.click('button:has-text("Save")');
        
        delay(2000);
        await browser.close();
    }
})();


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}