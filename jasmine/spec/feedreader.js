/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it(`have non-empty urls`, function () {
            allFeeds.forEach(feed => {
                const url = feed.url;
                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            });

        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it(`have non-empty name`, function () {
            allFeeds.forEach(feed => {
                const name = feed.name;
                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            });

        });
    });

    /* Menu test suite */
    describe('The menu', function () {

        var menuIcon,
            body;

        beforeEach(function () {
            menuIcon = $('.menu-icon-link');
            body = $('body');
        });

        /* Test that ensures the menu element is
         * hidden by default. 
         */
        it('is hidden by default', function () {
            expect(menuIcon).toBeDefined();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when the menu icon is clicked', function () {
            expect(menuIcon).toBeDefined();

            // Click the menu icon and the menu should display
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            // Click the menu icon again and the menu should be hidden
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test that ensures when the loadFeed function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    describe(`Initial entries`, function () {
        beforeEach(function (done) {
            loadFeed(1, function () {
                done();
            });
        });

        it(`there is at least a single entry element within the feed container`, function (done) {
            var container = document.querySelector(".feed");
            expect(container).toBeDefined();
            const entries = container.querySelectorAll(".entry");
            expect(entries.length).not.toBeLessThan(1);
            done();
        });
    });


    /* Test suite "New Feed Selection" */
    describe(`New FEED Selection`, function () {
        var container;
        var oldEntry;

        beforeEach(function (done) {
            container = document.querySelector(".feed");
            expect(container).toBeDefined();
            oldEntry = container.querySelector(".entry-link");
            expect(oldEntry).toBeDefined();

            // load a new feed
            loadFeed(2, function () {
                done();
            });
        });

        it(`the content within the feed container changes when a new feed is loaded by the loadFeed function`, function (done) {
            const newEntry = container.querySelector(".entry-link");
            expect(newEntry).toBeDefined();
            expect(newEntry).not.toBe(oldEntry);
            done();
        });
    });
}());