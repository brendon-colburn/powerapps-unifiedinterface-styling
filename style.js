/* PLEASE READ
The function below will set App Styling variables.
Before editing, PLEASE copy this formula into a save place for reference.
The primary variables are:
[gblAppColors]
Uses the Fluent UI palette to make Teams/MSFT oriented colors easily available in the app
Many of these can be found here: https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/products
[gblAppStyles]
For common controls, a styling variable has been defined.
This allows controls to be dynamically themed, based on Teams.
It also allows you to edit the styling properties for all/most controls of that type, for the entire app.
*/
// App Setting Variables
Concurrent(
    Set(
        gblAppSetting_inputMobileOnWeb,
        // Use this for mobile-oriented apps, running in desktop, to scale fonts
        false
        /*
        (Param("hostClientType") in [
            "web",
            "desktop"
        ]) Or (Param("hostClientType") = "ios" And App.Width > 800)
        */
    ),
    Set(
        gblAppSetting_inputMobile,
        // Use this for mobile-oriented apps, which are setup as phone apps, to scale fonts
        false
        /*
        Not(
            Param("hostClientType") in [
                "web",
                "desktop"
            ]
        ) Or (Param("hostClientType") = "ios" And App.Width < 640)
        */
    ),
    Set(
        gblAppSetting_inputScaleFontsBy,
        // Use this for scaling all fonts by a fixed amount
        0
    ),
    Set(
        gblThemeDark,
        Param("theme") = "dark"// Or (tglAdmin_DarkMode.Value)// Enable for Studio
    ),
    Set(
        gblThemeHiCo,
        Param("theme") = "contrast"// Or (tglAdmin_ContrastMode.Value)// Enable for Studio
    )
);
// Set Color Variable
Set(
    gblAppColors,
    {
        // Fluent Design Colors
        BackgroundDark: ColorValue("#2d2c2c"),
        BackgroundDefault: ColorValue("#F3F2F1"),
        BackgroundHighContrast: ColorValue("#000000"),
        HighContrastBackground: ColorValue("#000000"),
        HighContrastDisabled: ColorValue("#2EF149"),
        HighContrastHyperlinks: ColorValue("#FFFD39"),
        HighContrastSelectedBackground: ColorValue("#00EBFD"),
        HighContrastSelectedText: ColorValue("#000000"),
        HighContrastText: ColorValue("#FFFFFF"),
        MessagesDarkWebErrorBlock: ColorValue("#442726"),
        MessagesDarkWebErrorBlockIcon: ColorValue("#F1707B"),
        MessagesDarkWebSevereWarning: ColorValue("#4F2A0F"),
        MessagesDarkWebSevereWarningIcon: ColorValue("#FCE100"),
        MessagesDarkWebSuccess: ColorValue("#393D1B"),
        MessagesDarkWebSuccessIcon: ColorValue("#92C353"),
        MessagesDarkWebWarning: ColorValue("#433519"),
        MessagesDarkWebWarningIcon: ColorValue("#C8C6C4"),
        MessagesDefaultWebErrorBlock: ColorValue("#fde7e9"),
        MessagesDefaultWebErrorBlockIcon: ColorValue("#a80000"),
        MessagesDefaultWebSevereWarning: ColorValue("#fed9cc"),
        MessagesDefaultWebSevereWarningIcon: ColorValue("#d83b01"),
        MessagesDefaultWebSuccess: ColorValue("#dff6dd"),
        MessagesDefaultWebSuccessIcon: ColorValue("#107c10"),
        MessagesDefaultWebWarning: ColorValue("#fff4ce"),
        MessagesDefaultWebWarningIcon: ColorValue("#797673"),
        NeutralMobileBlack: ColorValue("#000000"),
        NeutralMobileGray100: ColorValue("#E1E1E1"),
        NeutralMobileGray200: ColorValue("#C8C8C8"),
        NeutralMobileGray25: ColorValue("#F8F8F8"),
        NeutralMobileGray300: ColorValue("#ACACAC"),
        NeutralMobileGray400: ColorValue("#919191"),
        NeutralMobileGray50: ColorValue("#F1F1F1"),
        NeutralMobileGray500: ColorValue("#6E6E6E"),
        NeutralMobileGray600: ColorValue("#404040"),
        NeutralMobileGray700: ColorValue("#303030"),
        NeutralMobileGray800: ColorValue("#292929"),
        NeutralMobileGray900: ColorValue("#212121"),
        NeutralMobileGray950: ColorValue("#141414"),
        NeutralMobileWhite: ColorValue("#FFFFFF"),
        NeutralWebBlack: ColorValue("#000000"),
        NeutralWebGray10: ColorValue("#FAF9F8"),
        NeutralWebGray100: ColorValue("#979593"),
        NeutralWebGray110: ColorValue("#8A8886"),
        NeutralWebGray120: ColorValue("#797775"),
        NeutralWebGray130: ColorValue("#605E5C"),
        NeutralWebGray140: ColorValue("#484644"),
        NeutralWebGray150: ColorValue("#3B3A39"),
        NeutralWebGray160: ColorValue("#323130"),
        NeutralWebGray170: ColorValue("#292827"),
        NeutralWebGray180: ColorValue("#252423"),
        NeutralWebGray190: ColorValue("#201f1e"),
        NeutralWebGray20: ColorValue("#F3F2F1"),
        NeutralWebGray200: ColorValue("#1B1A19"),
        NeutralWebGray210: ColorValue("#161514"),
        NeutralWebGray220: ColorValue("#11100F"),
        NeutralWebGray30: ColorValue("#EDEBE9"),
        NeutralWebGray40: ColorValue("#E1DFDD"),
        NeutralWebGray50: ColorValue("#D2D0CE"),
        NeutralWebGray60: ColorValue("#C8C6C4"),
        NeutralWebGray70: ColorValue("#BEBBB8"),
        NeutralWebGray80: ColorValue("#B3B0AD"),
        NeutralWebGray90: ColorValue("#A19F9D"),
        NeutralWebWhite: ColorValue("#FFFFFF"),
        OverlayTransparent: RGBA(
            0,
            0,
            0,
            0
        ),
        OverlayLight: RGBA(
            255,
            255,
            255,
            0.75
        ),
        OverlayDark: RGBA(
            0,
            0,
            0,
            0.75
        ),
        TeamsDarkPrimary: ColorValue("#7A7FEA"),
        TeamsDarkShade10: ColorValue("#8C90F4"),
        TeamsDarkShade20: ColorValue("#9EA2FF"),
        TeamsDarkShade30: ColorValue("#BCBDFF"),
        TeamsDarkTint10: ColorValue("#6264A7"),
        TeamsDarkTint20: ColorValue("#4E4E86"),
        TeamsDarkTint30: ColorValue("#3F3E5D"),
        TeamsDarkTint40: ColorValue("#373644"),
        TeamsDefaultPrimary: ColorValue("#6264A7"),
        TeamsDefaultShade10: ColorValue("#464775"),
        TeamsDefaultShade20: ColorValue("#33344A"),
        TeamsDefaultTint10: ColorValue("#888CC7"),
        TeamsDefaultTint20: ColorValue("#A6A7DC"),
        TeamsDefaultTint30: ColorValue("#BDBDE6"),
        TeamsDefaultTint40: ColorValue("#E2E2F6"),
        TeamsDefaultTint50: ColorValue("#F4F4FC")
    }
);
// Set Sizes Variable
Set(
    gblAppSizes,
    {
        Padding: {Page: 20},
        Font: {
            Small: If(
                gblAppSetting_inputMobileOnWeb,
                18,
                gblAppSetting_inputMobile,
                11,
                9
            ) + gblAppSetting_inputScaleFontsBy,
            Medium: If(
                gblAppSetting_inputMobileOnWeb,
                20,
                gblAppSetting_inputMobile,
                15,
                10.5
            ) + gblAppSetting_inputScaleFontsBy,
            Large: If(
                gblAppSetting_inputMobileOnWeb,
                22,
                gblAppSetting_inputMobile,
                18,
                15
            ) + gblAppSetting_inputScaleFontsBy,
            ExtraLarge: If(
                gblAppSetting_inputMobileOnWeb,
                25,
                gblAppSetting_inputMobile,
                22,
                18
            ) + gblAppSetting_inputScaleFontsBy
        }
    }
);
// Set Styles Variable
Set(
    gblAppStyles,
    {
        Background: {
            Fill: If(
                gblThemeHiCo,
                gblAppColors.BackgroundHighContrast,
                gblThemeDark,
                gblAppColors.NeutralWebGray190,
                gblAppColors.BackgroundDefault
            )
        },
        Dialogs: {
            Fill: If(
                gblThemeHiCo,
                Transparent,
                gblThemeDark,
                RGBA(
                    255,
                    255,
                    255,
                    .75
                ),
                RGBA(
                    0,
                    0,
                    0,
                    .75
                )
            )
        },
        Dividers: {
            TopMenu: If(
                gblThemeHiCo,
                White,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray40
            ),
            Elements: If(
                gblThemeHiCo,
                White,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray40
            ),
            Background: If(
                gblThemeHiCo,
                White,
                gblThemeDark,
                gblAppColors.NeutralWebGray100,
                gblAppColors.NeutralWebGray40
            )
        },
        Gallery: {
            SelectedItem: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDarkTint30,
                gblAppColors.TeamsDefaultTint40
            ),
            SelectedItemDisabled: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.TeamsDarkTint40,
                gblAppColors.TeamsDefaultTint50
            ),
            Fill: Transparent,
            HoverFill: If(
                gblThemeHiCo,
                Transparent,
                gblThemeDark,
                RGBA(
                    255,
                    255,
                    255,
                    .06
                ),
                RGBA(
                    128,
                    128,
                    128,
                    .06
                )
            ),
            PressedFill: If(
                gblThemeHiCo,
                Transparent,
                gblThemeDark,
                RGBA(
                    255,
                    255,
                    255,
                    .12
                ),
                RGBA(
                    128,
                    128,
                    128,
                    .12
                )
            )
        },
        Icons: {
            Color: If(
                gblThemeHiCo,
                "FFFD39",
                gblThemeDark,
                "7A7FEA",
                "6264A7"
            ),
            DisabledColor: If(
                gblThemeHiCo,
                "2EF149",
                gblThemeDark,
                "797775",
                "605E5C"
            ),
            Fill_Category: If(
                gblThemeHiCo,
                gblAppColors.HighContrastBackground,
                gblThemeDark,
                gblAppColors.TeamsDarkTint30,
                gblAppColors.TeamsDefaultTint50
            ),
            DisabledFill_Category: If(
                gblThemeHiCo,
                gblAppColors.HighContrastBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray60,
                gblAppColors.NeutralWebGray50
            ),
            Color_Search: If(
                gblThemeHiCo,
                "FFFD39",
                gblThemeDark,
                "7A7FEA",
                "6264A7"
            ),
            DisabledColor_Search: If(
                gblThemeHiCo,
                "2EF149",
                gblThemeDark,
                "979593",
                "323130"
            ),
            Color_Green: If(
                gblThemeHiCo,
                "FFFFFF",
                gblThemeDark,
                "92C353",
                "107c10"
            ),
            Color_Red: If(
                gblThemeHiCo,
                "FFFFFF",
                gblThemeDark,
                "F1707B",
                "d83b01"
            ),
            Color_Yellow: If(
                gblThemeHiCo,
                "FFFFFF",
                gblThemeDark,
                "FCE100",
                "FCE100"
            ),
            Color_Gray: If(
                gblThemeHiCo,
                "FFFFFF",
                gblThemeDark,
                "797775",
                "252423"
            )
        },
        ButtonPrimary: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.TeamsDarkTint10,
                gblAppColors.TeamsDefaultPrimary
            ),
            BorderThickness: If(
                gblThemeHiCo,
                4,
                gblThemeDark,
                0,
                0
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebWhite
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            DisabledFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            Fill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.TeamsDarkTint10,
                gblAppColors.TeamsDefaultPrimary
            ),
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDarkTint10,
                gblAppColors.TeamsDefaultPrimary
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                4,
                gblThemeDark,
                1.5,
                1.5
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.TeamsDefaultTint10,
                gblAppColors.TeamsDefaultShade10
            ),
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebWhite
            ),
            HoverFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.TeamsDefaultTint10,
                gblAppColors.TeamsDefaultShade10
            ),
            PressedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDefaultShade10,
                gblAppColors.TeamsDefaultShade20
            ),
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebWhite
            ),
            PressedFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDefaultShade10,
                gblAppColors.TeamsDefaultShade20
            ),
            RadiusBottomLeft: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            RadiusBottomRight: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            RadiusTopLeft: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            RadiusTopRight: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            Size: If(
                gblAppSetting_inputMobile,
                gblAppSizes.Font.Large,
                gblAppSizes.Font.Medium
            )
        },
        ButtonSecondary: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray40
            ),
            BorderThickness: If(
                gblThemeHiCo,
                2,
                gblThemeDark,
                1,
                0.5
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray180
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            DisabledFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            Fill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray160,
                gblAppColors.NeutralWebWhite
            ),
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray60,
                gblAppColors.NeutralWebGray40
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                2,
                gblThemeDark,
                1.5,
                1.5
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            HoverFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            PressedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            PressedFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray140,
                gblAppColors.NeutralWebGray40
            ),
            RadiusBottomLeft: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            RadiusBottomRight: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            RadiusTopLeft: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            RadiusTopRight: If(
                gblAppSetting_inputMobile,
                5,
                2
            ),
            Size: gblAppSizes.Font.Medium
        },
        ButtonBackground: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray50
            ),
            BorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                1.5,
                1.5
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralMobileWhite,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            DisabledFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray10
            ),
            Fill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebWhite
            ),
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray60,
                gblAppColors.NeutralWebGray40
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                1,
                1
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            HoverFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            PressedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            PressedFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray140,
                gblAppColors.NeutralWebGray40
            ),
            RadiusBottomLeft: 5,
            RadiusBottomRight: 5,
            RadiusTopLeft: 5,
            RadiusTopRight: 5,
            Size: 0
        },
        ButtonTransparent: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            BorderThickness: If(
                gblThemeHiCo,
                0,
                gblThemeDark,
                0,
                0
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray180
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayDark,
                gblAppColors.OverlayLight
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray100,
                gblAppColors.NeutralWebGray100
            ),
            DisabledFill: Transparent,
            Fill: Transparent,
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDarkPrimary,
                gblAppColors.TeamsDefaultPrimary
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                0.1,
                0.1
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDarkTint10,
                gblAppColors.TeamsDefaultShade10
            ),
            HoverFill: Transparent,
            PressedBorderColor: Transparent,
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDefaultShade10,
                gblAppColors.TeamsDefaultShade20
            ),
            PressedFill: Transparent,
            RadiusBottomLeft: 2,
            RadiusBottomRight: 2,
            RadiusTopLeft: 2,
            RadiusTopRight: 2,
            Size: gblAppSizes.Font.Medium
        },
        Checkbox: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            BorderThickness: If(
                gblThemeHiCo,
                2,
                gblThemeDark,
                1.5,
                1.5
            ),
            CheckboxBackgroundFill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.BackgroundDark,
                gblAppColors.NeutralWebWhite
            ),
            CheckboxBorderColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.TeamsDarkTint10,
                gblAppColors.TeamsDefaultPrimary
            ),
            CheckmarkFill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray60
            ),
            DisabledFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            Fill: Transparent,
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDarkTint10,
                gblAppColors.TeamsDefaultPrimary
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                2,
                gblThemeDark,
                1,
                1
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.TeamsDarkTint10,
                gblAppColors.TeamsDefaultPrimary
            ),
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray180
            ),
            HoverFill: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            PressedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            PressedFill: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            Size: gblAppSizes.Font.Medium
        },
        Dropdown: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebGray180,
                gblAppColors.NeutralWebWhite
            ),
            BorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                1,
                1
            ),
            ChevronBackground: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray220,
                gblAppColors.NeutralWebWhite
            ),
            ChevronDisabledBackground: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray130
            ),
            ChevronDisabledFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray80,
                gblAppColors.NeutralWebGray80
            ),
            ChevronFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray130
            ),
            ChevronHoverBackground: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray200,
                gblAppColors.NeutralWebWhite
            ),
            ChevronHoverFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray130
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray130
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray80,
                gblAppColors.NeutralWebGray80
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray130
            ),
            DisabledFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            Fill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray220,
                gblAppColors.NeutralWebWhite
            ),
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDefaultPrimary,
                gblAppColors.TeamsDefaultPrimary
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                1,
                1
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray180,
                gblAppColors.NeutralWebWhite
            ),
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray130
            ),
            HoverFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            PressedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.TeamsDefaultPrimary,
                gblAppColors.TeamsDefaultPrimary
            ),
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray130
            ),
            PressedFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray180,
                gblAppColors.NeutralWebWhite
            ),
            SelectionColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastBackground,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            SelectionFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray120,
                gblAppColors.NeutralWebGray60
            ),
            Size: gblAppSizes.Font.Medium
        },
        Label: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            BorderThickness: 0,
            Color: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray180
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray80,
                gblAppColors.NeutralWebGray80
            ),
            DisabledFill: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            Fill: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            FocusedBorderThickness: 0,
            HoverBorderColor: Transparent,
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            HoverFill: Transparent,
            PressedBorderColor: Transparent,
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebGray40,
                gblAppColors.NeutralWebGray150
            ),
            PressedFill: Transparent,
            Size: {
                Small: gblAppSizes.Font.Small,
                Medium: gblAppSizes.Font.Medium,
                Large: gblAppSizes.Font.Large,
                ExtraLarge: gblAppSizes.Font.ExtraLarge
            }
        },
        HTML: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            BorderThickness: 0,
            Color: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray180
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            DisabledFill: Transparent,
            Fill: Transparent,
            HoverBorderColor: Transparent,
            Size: {
                Small: gblAppSizes.Font.Small,
                Medium: gblAppSizes.Font.Medium,
                Large: gblAppSizes.Font.Large,
                ExtraLarge: gblAppSizes.Font.ExtraLarge
            }
        },
        TextInput: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            BorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                0,
                0
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray180
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray80,
                gblAppColors.NeutralWebGray80
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray130,
                gblAppColors.NeutralWebGray130
            ),
            DisabledFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray150,
                gblAppColors.NeutralWebGray30
            ),
            Fill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray220,
                gblAppColors.NeutralWebWhite
            ),
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDefaultPrimary,
                gblAppColors.TeamsDefaultPrimary
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                1,
                1
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray140,
                gblAppColors.NeutralWebGray40
            ),
            HoverColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            HoverFill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray140,
                gblAppColors.NeutralWebGray40
            ),
            PressedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray120,
                gblAppColors.NeutralWebGray60
            ),
            PressedColor: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            PressedFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.NeutralWebGray120,
                gblAppColors.NeutralWebGray60
            ),
            RadiusBottomLeft: 2,
            RadiusBottomRight: 2,
            RadiusTopLeft: 2,
            RadiusTopRight: 2,
            Size: gblAppSizes.Font.Medium
        },
        Toggle: {
            BorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            BorderThickness: If(
                gblThemeHiCo,
                0,
                gblThemeDark,
                0,
                0
            ),
            Color: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebWhite,
                gblAppColors.NeutralWebGray190
            ),
            DisabledBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray80,
                gblAppColors.NeutralWebGray80
            ),
            DisabledColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastDisabled,
                gblThemeDark,
                gblAppColors.NeutralWebGray80,
                gblAppColors.NeutralWebGray80
            ),
            FalseFill: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebWhite,
                gblThemeDark,
                gblAppColors.NeutralWebBlack,
                gblAppColors.NeutralWebWhite
            ),
            FalseHoverFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastHyperlinks,
                gblThemeDark,
                gblAppColors.NeutralWebGray210,
                gblAppColors.NeutralWebWhite
            ),
            FocusedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.TeamsDefaultPrimary,
                gblAppColors.TeamsDefaultPrimary
            ),
            FocusedBorderThickness: If(
                gblThemeHiCo,
                1,
                gblThemeDark,
                1,
                1
            ),
            HandleFillTrue: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray180,
                gblAppColors.NeutralWebWhite
            ),
            HandleFillFalse: If(
                gblThemeHiCo,
                gblAppColors.NeutralWebBlack,
                gblThemeDark,
                gblAppColors.NeutralWebGray60,
                gblAppColors.NeutralWebGray140
            ),
            HoverBorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            PressedBorderColor: If(
                gblThemeHiCo,
                gblAppColors.OverlayTransparent,
                gblThemeDark,
                gblAppColors.OverlayTransparent,
                gblAppColors.OverlayTransparent
            ),
            Size: gblAppSizes.Font.Medium,
            TrueFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.MessagesDarkWebSuccessIcon,
                gblAppColors.MessagesDarkWebSuccessIcon
            ),
            TrueHoverFill: If(
                gblThemeHiCo,
                gblAppColors.HighContrastSelectedBackground,
                gblThemeDark,
                gblAppColors.MessagesDarkWebSuccessIcon,
                gblAppColors.MessagesDarkWebSuccessIcon
            )
        }
    }
);
