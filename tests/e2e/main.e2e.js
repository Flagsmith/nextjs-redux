const url = `http://localhost:${process.env.PORT || 8080}`;

module.exports = {
    '[Main Tests] - Register': function (browser) {
        browser
            .url(url) // visit the url
            .waitForElementVisible('#app>div'); // wait for the sign up fields to show
    },
};