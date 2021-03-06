const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();

        const versionGhost = '2369';//'2369';//2999

        await page.goto('http://localhost:' + versionGhost   + '/ghost/#/signin');
        await page.screenshot({ path: `screenshot/001-${versionGhost}.png` });
        
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2999/ghost/#/site' }*/),
            page.click('button:has-text("Sign in")')
        ]);
        await page.screenshot({ path: `screenshot/002-${versionGhost}.png` });


        await page.click('text=Staff');
        await page.screenshot({ path: `screenshot/003-${versionGhost}.png` });
        await page.click('button:has-text("Invite people")');
        await page.fill('[placeholder="Email Address"]', 'exampleTesting01');
        await page.press('[placeholder="Email Address"]', 'AltGraph');
        await page.fill('[placeholder="Email Address"]', 'exampleTesting01@gmail.com');
        await page.selectOption('select', '6041c0617fce3541e643f0ed');
        await page.click('button:has-text("Send invitation now")');
        await page.click('text=Staff');

        await page.screenshot({ path: `screenshot/004-${versionGhost}.png` });

        await page.click('button:has-text("Invite people")');
        await page.selectOption('select', '6041c0617fce3541e643f0f0');
        await page.click('[placeholder="Email Address"]');
        await page.fill('[placeholder="Email Address"]', 'tamyExample02');
        await page.press('[placeholder="Email Address"]', 'AltGraph');
        await page.fill('[placeholder="Email Address"]', 'tamyExample02@gmail.com');
        await page.click('button:has-text("Send invitation now")');
        await page.screenshot({ path: `screenshot/005-${versionGhost}.png` });

        await page.click('text=Revoke');
        await page.screenshot({ path: `screenshot/006-${versionGhost}.png` });
        
        
        
        await browser.close();
    }
})();


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}