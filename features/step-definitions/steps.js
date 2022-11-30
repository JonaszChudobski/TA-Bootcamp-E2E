const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("the user is on the home page", async () => {
  await browser.url("https://newegg.com");
});
When("the user closes the promo banner if it appears", async () => {
  try {
    await $('//*[@id="modal-Website"]/div[2]/div').waitForExist();
    await browser.url("https://newegg.com");
  } catch (a) {}
});
When("the user enters the word Windows in the search bar", async () => {
  const input = await $(
    '//*[@id="app"]/header/div[1]/div[1]/div[1]/div[4]/form/div/div[1]/input'
  );
  await input.isClickable();
  await input.click();
  await input.setValue("Windows");
});
When("the user clicks on the search button", async () => {
  const button = $(
    '//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[2]/button'
  );
  await button.click();
});
Then("at least one item should appear", async () => {
  await $('//*[@id="app"]').waitForExist();
  await expect(
    $('//*[@id="app"]/div[3]/section/div/div/div[2]/div/div/div/div[2]/div[1]')
  ).toBeExisting();
});

When("the user opens Today's Best Deals Tab", async () => {
  await $('//*[@id="trendingBanner_720202"]').isClickable();
  const deals = await $('//*[@id="trendingBanner_720202"]');
  await deals.click();
});
When("the user clicks on the Internet shop logo", async () => {
  await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a').isClickable();
  const logo = $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a');
  await logo.click();
});
Then("the main page should open", async () => {
  await expect((await browser.getUrl()) === "https://newegg.com");
});
