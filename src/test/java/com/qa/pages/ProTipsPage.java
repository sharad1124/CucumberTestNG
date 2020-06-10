package com.qa.pages;

import com.qa.utils.TestUtils;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;

public class ProTipsPage extends BasePage{
    TestUtils utils = new TestUtils();
    @AndroidFindBy(id = "com.earningvideo:id/rotate_pro_tip_text_view") private MobileElement rotate_pro_tip_text_view;
    @AndroidFindBy(id = "com.earningvideo:id/back_arrow_button") private MobileElement back_arrow_button;

    @AndroidFindBy(id = "com.earningvideo:id/toolbar_title") private MobileElement toolbar_title;

    @AndroidFindBy(id = "com.earningvideo:id/lighting_text_view") private MobileElement lighting_text_view;
    @AndroidFindBy(id = "com.earningvideo:id/make_sure_text_view") private MobileElement make_sure_text_view;

    @AndroidFindBy(id = "com.earningvideo:id/professional_text_view") private MobileElement professional_text_view;
    @AndroidFindBy(id = "com.earningvideo:id/make_sure_subject_text_view") private MobileElement make_sure_subject_text_view;

    @AndroidFindBy(id = "com.earningvideo:id/camera_person_text_view") private MobileElement camera_person_text_view;
    @AndroidFindBy(id = "com.earningvideo:id/position_device_text_view") private MobileElement position_device_text_view;

    @AndroidFindBy(id = "com.earningvideo:id/Record_horizontally_text_view") private MobileElement Record_horizontally_text_view;
    @AndroidFindBy(id = "com.earningvideo:id/make_sure_device_is_horizon_text_view") private MobileElement make_sure_device_is_horizon_text_view;

    @AndroidFindBy(id = "com.earningvideo:id/video_length_text_view") private MobileElement video_length_text_view;
    @AndroidFindBy(id = "com.earningvideo:id/statistics_show_text_view") private MobileElement statistics_show_text_view;


    public boolean getProTipText() {
        utils.log().info("rotate_pro_tip_text_view is enabled----->" + rotate_pro_tip_text_view.isDisplayed());
        return rotate_pro_tip_text_view.isDisplayed();
    }

    public boolean getProTipHeadingText() {
        utils.log().info("toolbar_title is enabled----->" + toolbar_title.isDisplayed());
        return toolbar_title.isDisplayed();
    }

    public boolean getHeadingTextLight() {
        utils.log().info("lighting_text_view is enabled----->" + lighting_text_view.isDisplayed());
        return lighting_text_view.isDisplayed();
    }

    public boolean getLightDescripton() {
        utils.log().info("lighting_Description_view is enabled----->" + make_sure_text_view.isDisplayed());
        return make_sure_text_view.isDisplayed();
    }

    public boolean getHeadingTextProfessional() {
        utils.log().info("professional_text_view is enabled----->" + professional_text_view.isDisplayed());
        return professional_text_view.isDisplayed();
    }

    public boolean getProfessionalDescripton() {
        utils.log().info("make_sure_subject_text_view is enabled----->" + make_sure_subject_text_view.isDisplayed());
        return make_sure_subject_text_view.isDisplayed();
    }

    public boolean getHeadingTextCamera() {
        utils.log().info("camera_person_text_view is enabled----->" + camera_person_text_view.isDisplayed());
        return camera_person_text_view.isDisplayed();
    }

    public boolean getCameraDescripton() {
        utils.log().info("position_device_text_view is enabled----->" + position_device_text_view.isDisplayed());
        return position_device_text_view.isDisplayed();
    }

    public boolean getHeadingTextRecord() {
        utils.log().info("Record_horizontally_text_view is enabled----->" + Record_horizontally_text_view.isDisplayed());
        return Record_horizontally_text_view.isDisplayed();
    }
    public boolean getRecordDescripton() {
        utils.log().info("Rmake_sure_device_is_horizon_text_viewview is enabled----->" + make_sure_device_is_horizon_text_view.isDisplayed());
        return make_sure_device_is_horizon_text_view.isDisplayed();
    }

    public boolean getHeadingTextVideo() {
        utils.log().info("video_length_text_view is enabled----->" + video_length_text_view.isDisplayed());
        return video_length_text_view.isDisplayed();
    }

    public boolean getVideoDescripton() {
        utils.log().info("statistics_show_text_viewview is enabled----->" + statistics_show_text_view.isDisplayed());
        return statistics_show_text_view.isDisplayed();
    }

    public ProTipsPage protip() {
        utils.log().info("Pro Tip Button Clicked");
        click(rotate_pro_tip_text_view);
        return this;
    }

    public ProTipsPage backButton() {
        utils.log().info("Pro Tip back button clicked");
        click(back_arrow_button);
        return this;
    }
    public String getTextRotateScreen() {
        return getText(rotate_pro_tip_text_view,"rotate_pro_tip_text_view -->>");
    }

    public String getPROTipTitle() {
        return getText(toolbar_title, "toolbar_title ---->>>");
    }

    public String getTextLighting() {
        return getText(lighting_text_view,"lighting_text_view ---->>>");
    }

    public String getTextLightingDescription() {
        return getText(make_sure_text_view,"make_sure_text_view ---->>>");
    }

    public String getTextProfessional() {
        return getText(professional_text_view,"professional_text_view - -->>>");
    }

    public String getTextProfessionalDecription() {
        return getText(make_sure_subject_text_view,"make_sure_subject_text_view  ---->>>");
    }

    public String getTextCameraPersonHeading() {
        return getText(camera_person_text_view,"camera_person_text_view ---->>>");
    }
    public String getTextCameraPersonDec() {
        return getText(position_device_text_view,"position_device_text_view ---->>>");
    }

    public String getTextRecordingHeading() {
        return getText(Record_horizontally_text_view,"Record_horizontally_text_view ---->>>");
    }
    public String getTextRecordingDec() {
        return getText(make_sure_device_is_horizon_text_view,"make_sure_device_is_horizon_text_view  ---->>>");
    }


    public String getTextVideoLenghtHeading() {
        return getText(video_length_text_view,"video_length_text_view  ---->>>");
    }
    public String getTextVideoLenghtDesc() {
        return getText(statistics_show_text_view,"statistics_show_text_view  ---->>>");
    }


}
