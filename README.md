# Project Overview

This project uses Jasmine to create a number of tests against a web-based application that reads RSS feeds. These tests include: 
1. A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. A new test suite named `"The menu"`.
4. A test in the test suite "The menu" that ensures the menu element is hidden by default. 
5. A test in the test suite "The menu" that ensures the menu changes visibility when the menu icon is clicked. The menu should display when clicked and hide when clicked again.
6. A test suite named `"Initial Entries"`.
7. A test in the test suite `"Initial Entries"` that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. A test suite named `"New Feed Selection"`.
16. A test in the test suite `"New Feed Selection"`that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

No test is dependent on the results of another.

# How to run the tests
Open index.html in a browser. All tests should pass. 
