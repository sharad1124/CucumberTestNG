$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/03_Login.feature");
formatter.feature({
  "name": "Login scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Valid invalid Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on login page",
  "keyword": "When "
});
formatter.step({
  "name": "I enter email as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I tap on Sing in button",
  "keyword": "And "
});
formatter.step({
  "name": "I should view the dashboard title \"\u003cdashboard\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "dashboard"
      ]
    },
    {
      "cells": [
        "yashimittal09@gmail.com",
        "Password1124!",
        "Earnings Videos"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Valid invalid Login",
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
  "name": "I am on login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.i_am_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email as \"yashimittal09@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.iEnterEmailAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Password1124!\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.iEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap on Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.iITapOnSingInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should view the dashboard title \"Earnings Videos\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.i_should_view_the_dashboard_title(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Located by By.chained({By.id: com.earningvideo:id/toolbar_title}) (tried for 60 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat com.qa.pages.BasePage.waitForVisibility(BasePage.java:34)\n\tat com.qa.pages.BasePage.getAttribute(BasePage.java:76)\n\tat com.qa.pages.BasePage.getText(BasePage.java:89)\n\tat com.qa.pages.DashboardPage.getHeadingText(DashboardPage.java:48)\n\tat com.qa.stepdef.LoginPageStepDef.i_should_view_the_dashboard_title(LoginPageStepDef.java:37)\n\tat ✽.I should view the dashboard title \"Earnings Videos\"(file:///Users/sharadgupta/Documents/automation/AppiumCucumburFramework-testng/src/test/resources/03_Login.feature:9)\nCaused by: org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.id: com.earningvideo:id/toolbar_title})\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat com.qa.pages.BasePage.waitForVisibility(BasePage.java:34)\n\tat com.qa.pages.BasePage.getAttribute(BasePage.java:76)\n\tat com.qa.pages.BasePage.getText(BasePage.java:89)\n\tat com.qa.pages.DashboardPage.getHeadingText(DashboardPage.java:48)\n\tat com.qa.stepdef.LoginPageStepDef.i_should_view_the_dashboard_title(LoginPageStepDef.java:37)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\n\tat com.qa.runners.RunnerBase.scenario(RunnerBase.java:47)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1540)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\n\tat org.testng.TestRunner.run(TestRunner.java:587)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:28)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:425)\n\tat org.testng.internal.thread.ThreadUtil.lambda$execute$0(ThreadUtil.java:68)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@7eba9497 (tried for 1 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\t... 49 more\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.id: com.earningvideo:id/toolbar_title})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INLaptop140.local\u0027, ip: \u0027fe80:0:0:0:1c2b:550d:90fa:162%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.1\u0027\nDriver info: driver.version: AndroidDriver\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\t... 51 more\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Verify Valid invalid Login");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Valid Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on login page",
  "keyword": "When "
});
formatter.step({
  "name": "I enter email as \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I tap on Sing in button",
  "keyword": "And "
});
formatter.step({
  "name": "I should view the dashboard title \"\u003cdashboard\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "dashboard"
      ]
    },
    {
      "cells": [
        "yashimittal09+1@gmail.com",
        "Password1124!",
        "Earnings Videos"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Valid Login",
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
  "name": "I am on login page",
  "keyword": "When "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.i_am_on_login_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INLaptop140.local\u0027, ip: \u0027fe80:0:0:0:1c2b:550d:90fa:162%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sharadgupta/Document..., appActivity: .modules.splash.SplashActivity, appPackage: com.earningvideo, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/sharadgupta/Document..., appActivity: .modules.splash.SplashActivity, appPackage: com.earningvideo, autoGrantPermissions: true, automationName: UiAutomator2, deviceName: Pixel 2, platformName: android, resetKeyboard: true, systemPort: 10000, udid: emulator-5554, unicodeKeyboard: true}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 10, resetKeyboard: true, statBarHeight: 63, systemPort: 10000, takesScreenshot: true, udid: emulator-5554, unicodeKeyboard: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 350da408-7366-415a-b234-e6b6df842341\n*** Element info: {Using\u003did, value\u003dcom.earningvideo:id/record_button}\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:192)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat com.qa.pages.BasePage.waitForVisibility(BasePage.java:34)\n\tat com.qa.pages.BasePage.click(BasePage.java:48)\n\tat com.qa.pages.MarketingPages.recordingButton(MarketingPages.java:32)\n\tat com.qa.pages.MarketingPages.marketingScreens(MarketingPages.java:59)\n\tat com.qa.stepdef.LoginPageStepDef.i_am_on_login_page(LoginPageStepDef.java:14)\n\tat ✽.I am on login page(file:///Users/sharadgupta/Documents/automation/AppiumCucumburFramework-testng/src/test/resources/03_Login.feature:15)\nCaused by: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: read ECONNRESET\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INLaptop140.local\u0027, ip: \u0027fe80:0:0:0:1c2b:550d:90fa:162%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sharadgupta/Document..., appActivity: .modules.splash.SplashActivity, appPackage: com.earningvideo, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/sharadgupta/Document..., appActivity: .modules.splash.SplashActivity, appPackage: com.earningvideo, autoGrantPermissions: true, automationName: UiAutomator2, deviceName: Pixel 2, platformName: android, resetKeyboard: true, systemPort: 10000, udid: emulator-5554, unicodeKeyboard: true}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 10, resetKeyboard: true, statBarHeight: 63, systemPort: 10000, takesScreenshot: true, udid: emulator-5554, unicodeKeyboard: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 350da408-7366-415a-b234-e6b6df842341\n*** Element info: {Using\u003did, value\u003dcom.earningvideo:id/record_button}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.lambda$0(ByChained.java:38)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:72)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.isDisplayed(\u003cgenerated\u003e)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat com.qa.pages.BasePage.waitForVisibility(BasePage.java:34)\n\tat com.qa.pages.BasePage.click(BasePage.java:48)\n\tat com.qa.pages.MarketingPages.recordingButton(MarketingPages.java:32)\n\tat com.qa.pages.MarketingPages.marketingScreens(MarketingPages.java:59)\n\tat com.qa.stepdef.LoginPageStepDef.i_am_on_login_page(LoginPageStepDef.java:14)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\n\tat com.qa.runners.RunnerBase.scenario(RunnerBase.java:47)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1540)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\n\tat org.testng.TestRunner.run(TestRunner.java:587)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:28)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:425)\n\tat org.testng.internal.thread.ThreadUtil.lambda$execute$0(ThreadUtil.java:68)\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n\tat java.base/java.lang.Thread.run(Thread.java:834)\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter email as \"yashimittal09+1@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.iEnterEmailAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter password as \"Password1124!\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.iEnterPasswordAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I tap on Sing in button",
  "keyword": "And "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.iITapOnSingInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should view the dashboard title \"Earnings Videos\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.qa.stepdef.LoginPageStepDef.i_should_view_the_dashboard_title(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: connect ECONNREFUSED 127.0.0.1:10000\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027INLaptop140.local\u0027, ip: \u0027fe80:0:0:0:1c2b:550d:90fa:162%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /Users/sharadgupta/Document..., appActivity: .modules.splash.SplashActivity, appPackage: com.earningvideo, autoGrantPermissions: true, automationName: UiAutomator2, databaseEnabled: false, desired: {app: /Users/sharadgupta/Document..., appActivity: .modules.splash.SplashActivity, appPackage: com.earningvideo, autoGrantPermissions: true, automationName: UiAutomator2, deviceName: Pixel 2, platformName: android, resetKeyboard: true, systemPort: 10000, udid: emulator-5554, unicodeKeyboard: true}, deviceApiLevel: 29, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 10, resetKeyboard: true, statBarHeight: 63, systemPort: 10000, takesScreenshot: true, udid: emulator-5554, unicodeKeyboard: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 350da408-7366-415a-b234-e6b6df842341\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:45)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.qa.stepdef.Hooks.quit(Hooks.java:23)\n",
  "status": "failed"
});
});