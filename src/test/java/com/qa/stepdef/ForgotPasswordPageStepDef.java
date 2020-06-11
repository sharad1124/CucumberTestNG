package com.qa.stepdef;

import com.qa.pages.ForgotPasswordPage;
import com.qa.pages.MarketingPages;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class ForgotPasswordPageStepDef {
    @When("^I am on marketing screen$")
    public void i_am_on_marketing_screen() {
        Assert.assertTrue(new MarketingPages().startRecordingTextFound());
        new MarketingPages().marketingScreens();
    }

    @When("^I tap on the forgot password with text \"([^\"]*)\"$")
    public void i_tap_on_the_forgot_password_with_text(String forgotlink) {
        Assert.assertEquals(new ForgotPasswordPage().getButtonText(), forgotlink);
        new ForgotPasswordPage().forgotButtonLink();
    }

    @Then("^I should view the forgot password title \"([^\"]*)\"$")
    public void i_should_view_the_forgot_password_title(String forgottitle) {
        Assert.assertEquals(new ForgotPasswordPage().getForgotScreenToolBar(), forgottitle);
        Assert.assertTrue(new ForgotPasswordPage().resendButtonDisplayed());
    }

    @Then("^I enter the email id as \"([^\"]*)\"$")
    public void i_enter_the_email_id_and_tap_on_resend_button(String currentEmailId) {
    new ForgotPasswordPage().currentPassword(currentEmailId);
    }

    @Then("^I tap on resend$")
    public void i_tap_on_resend_button() {
        new ForgotPasswordPage().sendButton();
    }

}
