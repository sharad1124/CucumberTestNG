@test
Feature: Verify Forgot Password

  Scenario Outline: Verify user is able to recover password by using forgot password
    When I am on marketing screen
    And I tap on the forgot password with text "<forgotlink>"
    Then I should view the forgot password title "<forgottitle>"
    And I enter the email id as "<currentEmailId>"
    And I tap on resend
    Examples:
      |forgotlink|forgottitle |currentEmailId|
      | Forgot password?| Forgot Password  |yashimittal09@gmail.com|

