module.exports = {
    'E2E Wishlist test': function (browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body', 1000)
            .setValue('#UserName-field', 'a').pause(1000)
            .setValue('#Password-field', 'a').pause(1000)
            .assert.valueContains('#UserName-field', 'a')
            .assert.valueContains('#Password-field', 'a')
            .click('#Login-button').pause(3000)
            .end();
    }
};