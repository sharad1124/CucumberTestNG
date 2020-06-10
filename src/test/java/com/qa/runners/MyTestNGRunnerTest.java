package com.qa.runners;

import com.qa.utils.DriverManager;
import com.qa.utils.GlobalParams;
import com.qa.utils.ServerManager;
import io.cucumber.junit.Cucumber;
import io.cucumber.testng.CucumberOptions;
import org.apache.logging.log4j.ThreadContext;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


/**
 * An example of using TestNG when the test class does not inherit from
 * AbstractTestNGCucumberTests but still executes each scenario as a separate
 * TestNG test.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty",
                "html:target/Pixel2/cucumber",
                "summary",
                "de.monochromata.cucumber.report.PrettyReports:target/Pixel2/cucumber-html-report"}
        ,features = {"src/test/resources"}
        ,glue = {"com.qa.stepdef"}
        ,dryRun=false
        ,monochrome=true
        ,strict=true
        ,tags = {"@test"}
)
public class MyTestNGRunnerTest extends RunnerBase{
        @BeforeClass
        public static void initialize() throws Exception {
                GlobalParams params = new GlobalParams();
                params.initializeGlobalParams();

                ThreadContext.put("ROUTINGKEY", params.getPlatformName() + "_"
                        + params.getDeviceName());

                new ServerManager().startServer();
                new DriverManager().initializeDriver();
        }

        @AfterClass
        public static void quit(){
                DriverManager driverManager = new DriverManager();
                if(driverManager.getDriver() != null){
                        driverManager.getDriver().quit();
                        driverManager.setDriver(null);
                }
                ServerManager serverManager = new ServerManager();
                if(serverManager.getServer() != null){
                        serverManager.getServer().stop();
                }
        }

}