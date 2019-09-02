module.exports = {
  'sorting games by score, price and name': browser => {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('#app', 5000)
      .setValue('select', 'score')
      .assert.containsText('.game:first-of-type .title', 'Shards of Darkness')
      .setValue('select', 'price')
      .assert.containsText('.game:first-of-type .title', 'Call of Duty WWII')
      .setValue('select', 'name')
      .assert.containsText('.game:first-of-type .title', 'Call Of Duty Infinite Warfare')
      .end()
  }
}
