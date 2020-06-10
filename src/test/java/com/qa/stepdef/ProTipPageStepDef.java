package com.qa.stepdef;

import com.qa.pages.MarketingPages;
import com.qa.pages.ProTipsPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class ProTipPageStepDef {
    @Given("^I'm on Pro tip screen$")
    public void iMOnProTipScreen() {
        new MarketingPages().recordingButton();

    }
    @Given("^I tap on the Pro Tips$")
    public void iTapOnTheProTips() {

        new ProTipsPage().protip();
    }

    @Then("^I should see Pro Tip page with title \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithTitle(String Protext) {
        Assert.assertEquals(new ProTipsPage().getPROTipTitle(), Protext);
        Assert.assertTrue(new ProTipsPage().getProTipHeadingText());
    }
    @Then("^I should see Pro Tip page with litghting \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithLitghting(String lighting_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextLighting(), lighting_text_view);
        Assert.assertTrue(new ProTipsPage().getHeadingTextLight());
    }

    @Then("^I should see Pro Tip page with litghting description \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithLitghtingDescription(String lighting_dec_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextLightingDescription(), lighting_dec_text_view);
        Assert.assertTrue(new ProTipsPage().getLightDescripton());
    }

    @Then("^I should see Pro Tip page with professional \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithProfessional(String professional_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextProfessional(), professional_text_view);
        Assert.assertTrue(new ProTipsPage().getHeadingTextProfessional());
    }
    @Then("^I should see Pro Tip page with professional description \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithProfessionalDescription(String professional_dec_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextProfessionalDecription(), professional_dec_text_view);
        Assert.assertTrue(new ProTipsPage().getProfessionalDescripton());
    }
    @Then("^I should see Pro Tip page with camera \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithCamera(String camera_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextCameraPersonHeading(), camera_text_view);
        Assert.assertTrue(new ProTipsPage().getHeadingTextCamera());
    }
    @Then("^I should see Pro Tip page with camera description \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithCameraDescription(String camera_dec_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextCameraPersonDec(), camera_dec_text_view);
        Assert.assertTrue(new ProTipsPage().getCameraDescripton());
    }

    @Then("^I should see Pro Tip page with record \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithRecord(String record_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextRecordingHeading(), record_text_view);
        Assert.assertTrue(new ProTipsPage().getHeadingTextRecord());
    }

    @Then("^I should see Pro Tip page with record description \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithRecordDescription(String record_dec_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextRecordingDec(), record_dec_text_view);
        Assert.assertTrue(new ProTipsPage().getRecordDescripton());
    }

    @Then("^I should see Pro Tip page with video \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithVideo(String video_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextVideoLenghtHeading(), video_text_view);
        Assert.assertTrue(new ProTipsPage().getHeadingTextVideo());
    }

    @Then("^I should see Pro Tip page with video description \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithVideoDescription(String video_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextVideoLenghtDesc(), video_text_view);
        Assert.assertTrue(new ProTipsPage().getHeadingTextVideo());
        new ProTipsPage().backButton();
    }

    @Then("^I should see Pro Tip page with rotaotetext \"([^\"]*)\"$")
    public void iShouldSeeProTipPageWithRotaotetext(String rotate_pro_tip_text_view) {
        Assert.assertEquals(new ProTipsPage().getTextRotateScreen(), rotate_pro_tip_text_view);
        Assert.assertTrue(new ProTipsPage().getProTipText());
    }
}
