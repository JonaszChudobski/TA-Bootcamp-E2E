const { Given, When, Then } = require("@wdio/cucumber-framework");

Given("the user is on the home page", async () => {
  await browser.url("https://newegg.com");
});
When("the user closes the promo banner if it appears", async () => {
  try {
    await $('//*[@id="modal-Website"]/div[2]/div').waitForExist();
    await browser.url("https://newegg.com");
  } catch (a) {
    console.log(a)
  }
});
When("the user enters the word Windows in the search bar", async () => {
  const input = await $(
    "#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-box.auto-flex > input[type=search]"
  );
  await input.isClickable();
  await input.click();
  await input.setValue("Windows");
});
When("the user clicks on the search button", async () => {
  const button = $(
    "#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button > button"
  );
  await button.click();
});
Then("at least one item should appear", async () => {
  await $("#app").waitForExist();
  await expect(
    $(
      "#app > div.page-content > section > div > div > div.row-body > div > div > div > div.row-body > div"
    )
  ).toBeExisting();
});

When("the user opens Today's Best Deals Tab", async () => {
  await $("#trendingBanner_720202").isClickable();
  const deals = await $("#trendingBanner_720202");
  await deals.click();
});
When("the user clicks on the Internet shop logo", async () => {
  await $(
    "#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a"
  ).isClickable();
  const logo = $(
    "#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a"
  );
  await logo.click();
});
Then("the main page should open", async () => {
  await expect((await browser.getUrl()) === "https://newegg.com");
});
