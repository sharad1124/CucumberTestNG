package com.qa.stepdef;

import com.qa.pages.DashboardPage;
import com.qa.pages.LoginPage;
import com.qa.pages.MarketingPages;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginPageStepDef {
    @When("^I am on login page$")
    public void i_am_on_login_page() {
        // Write code here that turns the phrase above into concrete actions
        new MarketingPages().marketingScreens();
    }

    @When("^I enter email as \"([^\"]*)\"$")
    public void iEnterEmailAs(String username) {
        new LoginPage().enterEmailid(username);
        //Assert.assertTrue(new LoginPage().loginButtonDisplay());
    }

    @When("^I enter password as \"([^\"]*)\"$")
    public void iEnterPasswordAs(String password) {
        new LoginPage().enterPasswrod(password);
        //Assert.assertTrue(new LoginPage().loginButtonDisplay());
    }

    @When("^I tap on Sing in button$")
    public void iITapOnSingInButton() {
        new LoginPage().pressLoginButton();
        Assert.assertTrue(new LoginPage().loginButtonDisplay());
    }

    @Then("^I should view the dashboard title \"([^\"]*)\"$")
    public void i_should_view_the_dashboard_title(String dashboard) {
        Assert.assertEquals(new DashboardPage().getHeadingText(), dashboard);
        Assert.assertTrue(new DashboardPage().dashboardTextVisible());

    }

}


