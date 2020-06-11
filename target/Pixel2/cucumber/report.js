$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/03_ForgotPassword.feature");
formatter.feature({
  "name": "Verify Forgot Password",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify user is able to recover password by using forgot password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on marketing screen",
  "keyword": "When "
});
formatter.step({
  "name": "I tap on the forgot password with text \"\u003cforgotlink\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should view the forgot password title \"\u003cforgottitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter the email id as \"\u003ccurrentEmailId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I tap on resend",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "forgotlink",
        "forgottitle",
        "currentEmailId"
      ]
    },
    {
      "cells": [
        "Forgot password?",
        "Forgot Password",
        "yashimittal09@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify user is able to recover password by using forgot password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on marketing screen",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepdef.ForgotPasswordPageStepDef.i_am_on_marketing_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap on the forgot password with text \"Forgot password?\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.ForgotPasswordPageStepDef.i_tap_on_the_forgot_password_with_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should view the forgot password title \"Forgot Password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepdef.ForgotPasswordPageStepDef.i_should_view_the_forgot_password_title(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the email id as \"yashimittal09@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.ForgotPasswordPageStepDef.i_enter_the_email_id_and_tap_on_resend_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap on resend",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.ForgotPasswordPageStepDef.i_tap_on_resend_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});