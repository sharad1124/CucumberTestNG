package com.qa.runners;

        import io.cucumber.testng.CucumberOptions;

/**
 * An example of using TestNG when the test class does not inherit from
 * AbstractTestNGCucumberTests but still executes each scenario as a separate
 * TestNG test.
 */
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber",
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


}