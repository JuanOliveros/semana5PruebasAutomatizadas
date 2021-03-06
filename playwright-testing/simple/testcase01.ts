const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();

        const versionGhost = '2999';//'2369';//2999


        await page.goto('http://localhost:' + versionGhost   + '/ghost/#/signin');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/site' }*/),
            page.click('button:has-text("Sign in")')
          ]);

        await page.screenshot({ path: `screenshot/001-${versionGhost}.png` });

        await page.goto('http://localhost:' + versionGhost+'/ghost/#/site');

        await page.click('text=Integrations');
        await page.click('text=Slack A messaging app for teams Configure >> :nth-match(div, 4)');
        await page.screenshot({ path: `screenshot/002-${versionGhost}.png` });

        await page.click('[placeholder="https://hooks.slack.com/services/..."]');
        await page.screenshot({ path: `screenshot/003-${versionGhost}.png` });
        await page.fill('[placeholder="https://hooks.slack.com/services/..."]', 'http://hooks.slack.com/services/example/test1');

        await page.click('[placeholder="Ghost"]');

        await page.fill('[placeholder="Ghost"]', 'ExampleUser');

        await page.click('button:has-text("Send test notification")');
        await page.screenshot({ path: `screenshot/004-${versionGhost}.png` });

        
        
        await browser.close();
    }
})();


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}