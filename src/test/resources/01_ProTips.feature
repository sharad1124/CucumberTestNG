Feature: Pro Tip scenarios
  Scenario Outline: Verify Pro Tip screen
    Given I'm on Pro tip screen
    And I tap on the Pro Tips
    Then I should see Pro Tip page with title "<Protext>"
    Then I should see Pro Tip page with litghting "<lighting_text_view>"
    Then I should see Pro Tip page with litghting description "<lighting_dec_text_view>"
    Then I should see Pro Tip page with professional "<professional_text_view>"
    Then I should see Pro Tip page with professional description "<professional_dec_text_view>"
    Then I should see Pro Tip page with camera "<camera_text_view>"
    Then I should see Pro Tip page with camera description "<camera_dec_text_view>"
    Then I should see Pro Tip page with record "<record_text_view>"
    Then I should see Pro Tip page with record description "<record_dec_text_view>"
    Then I should see Pro Tip page with video "<video_text_view>"
    Then I should see Pro Tip page with video description "<video_dec_text_view>"
    Then I should see Pro Tip page with rotaotetext "<rotate_pro_tip_text_view>"

  Examples:
      | Protext | lighting_text_view | professional_text_view | rotate_pro_tip_text_view |camera_text_view |record_text_view|video_text_view|lighting_dec_text_view|professional_dec_text_view|camera_dec_text_view|record_dec_text_view|video_dec_text_view|
      | PRO TIP | Lighting | Professional looking Office | PRO TIP | Camera person |Record Horizontally only                     |Video Length|Make sure there is adequate light in front of your subject, not behind them.|Make sure your subject has a neat and tidy background.|Position yourself about 4-5 feet away from the CEO or Executive. Don’t zoom in. Stay in the same spot for all your recordings.|Make sure your device is horizontal.|Statistics show that the optimal length of video is about 2 minutes long.|