Feature: Bootcamp E2E

Background:
Given the user is on the home page
When the user closes the promo banner if it appears

Scenario: Search bar
When the user enters the word Windows in the search bar
When the user clicks on the search button
Then at least one item should appear

Scenario: Internet shop logo button
When the user opens Today's Best Deals Tab
When the user clicks on the Internet shop logo
Then the main page should open