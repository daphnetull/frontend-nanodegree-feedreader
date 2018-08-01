/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('url is defined and not empty', function(){
            allFeeds.forEach(function(feed,index){
                expect(feed['url']).toBeDefined();
                expect(feed['url'].length).not.toBe(0);
            })
         });

        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('name is defined and not empty', function(){
            allFeeds.forEach(function(feed,index){
                expect(feed['name']).toBeDefined();
                expect(feed['name'].length).not.toBe(0);
            })
         });

    });


    /* test suite named "The menu" */

    describe('The menu', function(){

        const pageBody = document.querySelector('body');
        const menuClick = document.querySelector('.menu-icon-link');

        /* ensures the menu element is
         * hidden by default. 
         */

        it('menu element is hidden by default', function(){
            expect(pageBody.classList.contains('menu-hidden')).toBe(true);
        });


         /* ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: the menu displasy when
          * clicked and it hides when clicked again.
          */

        it('menu changes visibiliy when clicked', function(){
            let state = false;
            for (var i = 0; i<2; i++){
                menuClick.click();
                expect(pageBody.classList.contains('menu-hidden')).toBe(state);
                state = true;
            };
        });




    });

    /* test suite named "Initial Entries" */

    describe('Initial Entries', function(){

        const container = document.querySelector('.feed');

        beforeEach(function(done){
            loadFeed(0,function(){
                done();
            });
        });

        /* ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        it('loadFeed function contains at least 1 .entry element in .feed container', function(){
            expect(container.length).not.toBe(0);
        });
    })


    /* a new test suite named "New Feed Selection" */

    describe('New Feed Selection',function(){

        let oldFeed;
        let newFeed;

        beforeEach(function(done){
            oldFeed = document.querySelector('.feed');
            loadFeed(0,function(){
                done();
                newFeed = document.querySelector('.feed');
            });
        });
        /* ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         it('content changes when a new feed is loaded by loadFeed()',function(){

            expect(oldFeed).not.toBe(newFeed);
         })
    })

}());
