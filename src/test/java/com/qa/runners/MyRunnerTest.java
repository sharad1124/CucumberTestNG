package com.qa.runners;


import com.qa.utils.GlobalParams;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import static io.cucumber.junit.CucumberOptions.SnippetType.CAMELCASE;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty",
                "html:target/cucumber",
                "summary",
                "de.monochromata.cucumber.report.PrettyReports:target/cucumber-html-report"}
        ,features = {"src/test/resources"}
        ,glue = {"com.qa.stepdef"}
        ,snippets = CAMELCASE
        ,dryRun=false
        ,monochrome=true
        ,strict=true
        ,tags = {"@test"}
)
public class MyRunnerTest {
    @BeforeClass
    public static void initialize() throws Exception {
        GlobalParams params = new GlobalParams();
        params.initializeGlobalParams();

    }

    @AfterClass
    public static void quit(){

    }

}
