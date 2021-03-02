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
        
        await page.goto('http://localhost:2369/ghost/#/site');
        await page.click('text=Pages');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages');
        await page.click('div[role="button"]:has-text("All pages")');
        await page.click('text=All pages');
        await page.click('div[role="button"]:has-text("All authors")');
        await page.click('text=Example');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages?author=example');
        await page.click('div[role="button"]:has-text("All tags")');
        await page.click('text=New Tag');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages?author=example&tag=new-tag');
        await page.click('text=Show all pages');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/editor/page/603e4e4234c23b1c6003abce' }*/),
            page.click('text=Create a new page')
        ]);
        await page.click('text=Pages');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages');
        await page.click('main[role="main"] >> text=Published');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/editor/page/603e4e4234c23b1c6003abce');
        await page.click('text=Pages');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages');
        await page.click('div[role="button"]:has-text("Newest")');
        // Click text=Oldest
        await page.click('text=Oldest');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages?order=published_at%20asc');
        await page.click('div[role="button"]:has-text("Oldest")');
        await page.click('text=Recently updated');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/pages?order=updated_at%20desc');
        await page.click('text=Drafts');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/posts?type=draft');
        await page.click('div[role="button"]:has-text("Draft posts")');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts?type=published' }*/),
            page.click('text=Published posts')
        ]);
        await page.click('div[role="button"]:has-text("Published posts")');
        // Click text=Scheduled posts
        await page.click('text=Scheduled posts');
        // assert.equal(page.url(), 'http://localhost:2369/ghost/#/posts?type=scheduled');
        await page.click('div[role="button"]:has-text("Scheduled posts")');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://localhost:2369/ghost/#/posts' }*/),
            page.click('text=All posts')
        ]);



        await page.screenshot({ path: `test02.png` });
        await browser.close();
    }
})();
