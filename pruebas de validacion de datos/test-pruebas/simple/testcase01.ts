const playwright = require('playwright');
const fetch = require("node-fetch");

(async () => {
    for (const browserType of ['chromium']) {
        const browser = await playwright[browserType].launch(({headless: false}));
        const context = await browser.newContext();
        const page = await browser.newPage();

        const PATHSERVICE = 'http://localhost:9876/faker/';

        let service = [{email: "ykensall0@ameblo.jp"}, {email: "ckoppel1@privacy.gov.au"}, {email: "mburnsall2@ft.com"}, {email: "tmanser3@is.gd"}, {email: "pclevely4@sitemeter.com"}, {email: "cfoulkes5@newsvine.com"}, {email: "sedmund6@sina.com.cn"}, {email: "meastope7@hatena.ne.jp"}, {email: "plarge8@hao123.com"}, {email: "ggiacomi9@europa.eu"}, {email: "bborsia@seesaa.net"}, {email: "gchislettb@boston.com"}, {email: "spetersc@yolasite.com"}, {email: "kmathivatd@amazon.co.uk"}, {email: "swestalle@bloglines.com"}, {email: "ebowerf@nydailynews.com"}, {email: "kdibleyg@walmart.com"}, {email: "emacgillespieh@google.com.au"}, {email: "bbrittlei@cmu.edu"}, {email: "jbirchnerj@so-net.ne.jp"}];
        service = service.sort(() => Math.random() - 0.5)
        await page.goto('http://localhost:2999/ghost/#/signin');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2999/ghost/#/site' }*/),
            page.click('button:has-text("Sign in")')
        ]);

        /**
         *
         * Testing a Staff User
         * Static data generate
         */

        for (let i = 0; i < service.length; i++) {
            delay(5000);
            await page.click('text=Staff');
            await page.click('button:has-text("Invite people")');
            delay(2000)
            await page.fill('[placeholder="Email Address"]', service[i].email);
            delay(1000)
            await page.click('button:has-text("Send invitation now")');
            await page.click('button:has-text("Invite people")');
        }


        /**
         * Logout
         */
        await page.click('div[role="button"]:has-text("christian christianlzap@gmail.com")');
        await page.click('text=Sign Out');
        await page.goto('http://localhost:2999/ghost/');
        await page.goto('http://localhost:2999/ghost/#/signin');
        /**
         * end logout
         */


        await page.goto('http://localhost:2999/ghost/#/signin');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2999/ghost/#/site' }*/),
            page.click('button:has-text("Sign in")')
        ]);

        (async function () {
            try {
                const response = await fetch('integration-data');
                let  myJson = await response.json();
                for (let i=0; i< myJson.length; i++) {
                    await page.click('text=Add custom integration');
                    await page.fill('[placeholder="Integration name..."]', myJson[i]);
                    delay(1000)
                    await page.click('text=Integrations');
                }

            } catch (error) {
                console.log('i found a  bug ');
                throw error
            }
        })().catch( e => { console.error(e) })


        /**
         * Logout
         */
        await page.click('div[role="button"]:has-text("christian christianlzap@gmail.com")');
        await page.click('text=Sign Out');
        await page.goto('http://localhost:2999/ghost/');
        await page.goto('http://localhost:2999/ghost/#/signin');
        /**
         * end logout
         */



        await page.goto('http://localhost:2999/ghost/#/signin');
        await page.fill('[placeholder="Email Address"]', 'christianlzap@gmail.com');
        await page.fill('[placeholder="Password"]', 'andresloza');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2999/ghost/#/site' }*/),
            page.click('button:has-text("Sign in")')
        ]);
        await page.click('text=Integrations');
        (async function () {
            try {
                const response = await fetch(PATHSERVICE + 'integration-data');
                let  myJson = await response.json();
                for (let i=0; i< myJson.length; i++) {
                    await page.click('text=Add custom integration');
                    await page.fill('[placeholder="Integration name..."]', myJson[i]);
                    delay(1000)
                    await page.click('text=Integrations');
                }

            } catch (error) {
                console.log('i found a  bug ');
                throw error
            }
        })().catch( e => { console.error(e) })


    }
})();


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
