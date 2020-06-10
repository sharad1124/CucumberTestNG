Feature: Login scenarios
  @test
  Scenario Outline: Verify Valid Login
    When I am on login page
    And I enter email and  password
    Then I should view the dashboard title "<dashboard>"
    Examples:
      | dashboard |
      | Earnings Videos |