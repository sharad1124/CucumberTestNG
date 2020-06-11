
Feature: Login scenarios

  Scenario Outline: Verify Valid invalid Login
    When I am on login page
    And I enter email as "<username>"
    And I enter password as "<password>"
    And I tap on Sing in button
    Then I should view the dashboard title "<dashboard>"
    Examples:
      |username | password |dashboard |
      |  yashimittal09@gmail.com  |Password1124!     |Earnings Videos |

  Scenario Outline: Verify Valid Login
    When I am on login page
    And I enter email as "<username>"
    And I enter password as "<password>"
    And I tap on Sing in button
    Then I should view the dashboard title "<dashboard>"
    Examples:
      |username | password |dashboard |
      |  yashimittal09+1@gmail.com  |Password1124!     |Earnings Videos |

