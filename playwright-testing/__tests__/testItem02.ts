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
        
        
        await page.goto('http://localhost:2369/ghost/#/posts');
        await page.click('text=Pages');
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/editor/page/603e4e4234c23b1c6003abce' }*/),
        page.click('main[role="main"] >> text=Example')
        ]);
        await page.click('text=Pages');
        await page.click('text=Tags');
        await page.click('button:has-text("Public tags")');
        await page.click('text=Slug');
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts?tag=getting-started' }*/),
        page.click('text=7 posts')
        ]);
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/editor/post/60329d04b7d38b3a6cd9c390' }*/),
        page.click('#ember361 >> text=Getting Started')
        ]);
        await page.click('text=Posts');
        await page.click('div[role="button"]:has-text("Newest")');
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts?order=updated_at%20desc&tag=getting-started' }*/),
        page.click('text=Recently updated')
        ]);
        await page.click('div[role="button"]:has-text("Recently updated")');
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts?order=published_at%20asc&tag=getting-started' }*/),
        page.click('text=Oldest')
        ]);
        await page.click('div[role="button"]:has-text("Oldest")');
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts?order=email.open_rate%20desc&tag=getting-started' }*/),
        page.click('text=Open rate')
        ]);
        await page.click('div[role="button"]:has-text("Open rate")');
        await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts?tag=getting-started' }*/),
        page.click('text=Newest')
        ]);
        await page.click('div[role="button"]:has-text("Getting Started")');
        await page.click('div[role="button"]:has-text("Getting Started")');
        await page.click('text=All posts All authors Getting Started Newest >> button');
        await page.fill('[placeholder="Breaking news"]', 'luniandesltesting');
        await page.fill('#view-blue', 'blue');
        await page.goto('http://localhost:2369/ghost/#/posts?type=published');
        await page.goto('http://localhost:2369/ghost/#/posts?tag=getting-started');
        await page.fill('[placeholder="Breaking news"]', 'ras01');
        await page.fill('#view-orange', 'orange');
        await page.goto('http://localhost:2369/ghost/#/posts');



        await page.screenshot({ path: `test03.png` });
        await browser.close();
    }
})();






  