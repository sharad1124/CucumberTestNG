package com.qa.pages;

import com.qa.utils.TestUtils;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;

public class LoginPage extends BasePage{
    TestUtils utils = new TestUtils();

    @AndroidFindBy(id = "com.earningvideo:id/email_edit_text_view") private MobileElement emailTextField;
    @AndroidFindBy(id = "com.earningvideo:id/password_text_view") private MobileElement passwordTextField;
    @AndroidFindBy(id = "com.earningvideo:id/login_text_view") private MobileElement loginButton;
    @AndroidFindBy(id = "com.earningvideo:id/header_text_view") private MobileElement loginheading;


    public boolean loginTextFound() {
        utils.log().info("Login Screen is enabled----->" + loginheading.isDisplayed());
        return loginheading.isDisplayed();
    }

    public boolean loginButtonDisplay() {
        utils.log().info("Login Screen is enabled----->" + loginButton.isDisplayed());
        return loginButton.isDisplayed();
    }
    public String getPageTitle() {
        return getText(loginheading, "Login page title is - ");
    }

    public String getLoginButtonText() {
        return getText(loginButton, "Login Button Text - ");
    }


    public String getTitle() {
        return getAttribute(loginheading,"text");
    }


    public LoginPage enterEmailid(String username) {
        clear(emailTextField);
        sendKeys(emailTextField, username, username);
        return this;

    }

    public LoginPage enterPasswrod(String password) {
        clear(passwordTextField);
        sendKeys(passwordTextField, password,password);
        return this;

    }



    public DashboardPage pressLoginButton() {
        click(loginButton, "Press login button");
        return new DashboardPage();

    }
    public DashboardPage login(String email, String password) {
        enterEmailid(email);
        enterPasswrod(password);
        return pressLoginButton();

    }

}
