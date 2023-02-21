React.createElement(
    "div",
    { id: "ak-master", "class": "rootsite-page", role: "main",
        "aria-label": Akumina.Digispace.Language.TryGetText('fs.masterpage.mainheader') },
    React.createElement(
        "h1",
        { id: "main-header", "class": "main-landmark--header ia-sr-only", role: "heading", "aria-level": "1" },
        Akumina.Digispace.Language.TryGetText('fs.masterpage.rootsitetitle')
    ),
    React.createElement(
        "a",
        { href: "#content", id: "skip", "class": "ia-skip",
            role: "button" },
        Akumina.Digispace.Language.TryGetText('fs.masterpage.skiptomain')
    ),
    React.createElement(
        "div",
        { id: "s4-workspace" },
        React.createElement(
            "div",
            { "class": "ia-page-wrapper" },
            React.createElement(
                "div",
                { "class": "fs-toggle-mission-control ak-widget-wrapper" },
                React.createElement("div", { rel: "Mission control", "class": "ak-widget", id: "4db2dd2b-ca5a-4f46-ab4c-6ba70ff0208e" })
            ),
            React.createElement(
                "header",
                { "class": "fs-header fs-js-header aksearchexclude" },
                React.createElement(
                    "div",
                    { "class": "ia-top-header" },
                    React.createElement(
                        "div",
                        { "class": "ia-left-header" },
                        React.createElement(
                            "button",
                            { "class": "ia-menu-toggle fs-js-menu-toggle" },
                            React.createElement("i", { "class": "fa-regular fa-bars", "aria-label": "toggle navigation" }),
                            React.createElement(
                                "span",
                                null,
                                Akumina.Digispace.Language.TryGetText('fs.masterpage.menu')
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "ia-logo-wrapper ak-site-logo" },
                            React.createElement(
                                "a",
                                { "class": "ak-spalink", "data-interception": "off", href: LogoUrl },
                                React.createElement("img", { src: "", alt: "Company logo." })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "ia-right-header action-items ak-widget-wrapper" },
                        React.createElement(
                            "div",
                            { "class": "respSearch fs-search-wrapper fs-oobsearch-wrapper" },
                            React.createElement(
                                "a",
                                { "class": "ia-oobsearch-close ia-js-oobsearch-close", "aria-hidden": "true" },
                                React.createElement("i", { "class": "fa-regular fa-xmark", "aria-label": "Close search" })
                            ),
                            React.createElement(
                                "div",
                                { "class": "ia-search-combo" },
                                React.createElement("input", { type: "text", id: "siteSearch",
                                    "class": "ia-search-combo-box form-control ak-dw-searchlistbox ia-search-box",
                                    autocomplete: "off",
                                    "aria-label": "{Akumina.Digispace.Language.TryGetText('fs.masterpage.searchsite')}" }),
                                React.createElement(
                                    "button",
                                    { "class": "fs-search-site ia-btn-search", id: "btnSearchAction" },
                                    React.createElement("i", { "class": "fa-regular fa-magnifying-glass", "aria-label": "search site" })
                                )
                            ),
                            React.createElement("div", { "class": "ak-search-typeahead-container ak-widget-wrapper" })
                        ),
                        !Akumina.Digispace.SiteContext.IsHeadlessMode && React.createElement(
                            "div",
                            { id: "ia-js-sharepoint-bar", "class": "ia-sharepoint-bar" },
                            React.createElement(
                                "button",
                                { "class": "ia-button-sharepoint-bar ia-js-button-sharepoint-bar", title: Akumina.Digispace.Language.TryGetText('fs.masterpage.sharepoint') },
                                "Open SharePoint"
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "ia-bookmark-container" },
                            React.createElement(
                                "button",
                                { type: "button", "class": "ia-button-bookmark mfp-hide", id: "btnBookmank", title: Akumina.Digispace.Language.TryGetText('fs.masterpage.savebookmark') },
                                React.createElement("i", { "class": "fa-regular fa-bookmark", "aria-label": "show bookmark" })
                            ),
                            React.createElement("div", { rel: "Bookmark-Favorites", "class": "ak-widget mfp-hide", id: "3f58c6dc-d497-4e2c-a96d-03c32c19392a" })
                        ),
                        React.createElement(
                            "div",
                            { id: "setNotificationTop", "class": "ia-toggle-notification ak-widget-wrapper", title: Akumina.Digispace.Language.TryGetText('fs.masterpage.notifications') },
                            React.createElement("div", { rel: "ActivityNotifications stub instance", "class": "ak-widget",
                                id: "bda833d9-3657-608e-9ffa-92bc25c8a900" })
                        ),
                        React.createElement(
                            "ul",
                            { id: "setMeTop", "class": "ia-user-profile user-profile-dropdown" },
                            React.createElement(
                                "li",
                                { "class": "ia-js-user-profile-icon" },
                                React.createElement(
                                    "button",
                                    { id: "userDisplayButton", type: "button", "class": "ia-user-profile-button ia-user-teams-presence-container",
                                        "aria-label": Akumina.Digispace.Language.TryGetText('fs.masterpage.notifications') },
                                    React.createElement("img", { "class": "userImageDisplay", src: "",
                                        alt: Akumina.Digispace.Language.TryGetText('fs.masterpage.profilepicalt') }),
                                    React.createElement("div", { id: "userPresence", title: "", className: "ia-user-profile-by-status" })
                                ),
                                React.createElement(
                                    "ul",
                                    { id: "userDropdown", "class": "ia-user-profile-dropdown" },
                                    React.createElement(
                                        "li",
                                        { "class": "liPreferences fs-preferences" },
                                        React.createElement("div", { rel: "User personalization", "class": "ak-widget", id: "4b096a68-3706-4e4c-875e-167badd119bd" }),
                                        React.createElement(
                                            "a",
                                            { id: "masterPreferences", "class": "openpersonalization", href: "javascript:void(0)" },
                                            React.createElement(
                                                "span",
                                                null,
                                                React.createElement("i", { "class": "fa-regular fa-sliders" })
                                            ),
                                            React.createElement(
                                                "span",
                                                null,
                                                Akumina.Digispace.Language.TryGetText('fs.masterpage.mypreferencesandinterests')
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "liProfile fs-profile" },
                                        React.createElement(
                                            "a",
                                            { href: "javascript:void(0)" },
                                            React.createElement(
                                                "span",
                                                null,
                                                React.createElement("i", { "class": "fa-regular fa-circle-user" })
                                            ),
                                            React.createElement(
                                                "span",
                                                { id: "masterProfile" },
                                                Akumina.Digispace.Language.GetText("fs.masterpage.viewprofile")
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { id: "li-langprofile", "class": "ia-languagepicker-active" + (configurationContext.IsMultiLingualEnabled && configurationContext.AreMultipleLanguagesVisible ? "" : " mfp-hide") },
                                        React.createElement(
                                            "a",
                                            { id: "langprofile", "class": "", href: "javascript:void(0)" },
                                            React.createElement(
                                                "span",
                                                null,
                                                React.createElement("i", { "class": "fa-regular fa-language", "aria-hidden": "true" })
                                            ),
                                            React.createElement(
                                                "span",
                                                null,
                                                Akumina.Digispace.Language.TryGetText('languagepicker.switchlanguage')
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "li-Signout fs-signout" },
                                        React.createElement(
                                            "a",
                                            { href: "javascript:void(0)" },
                                            React.createElement(
                                                "span",
                                                null,
                                                React.createElement("i", { "class": "fa-regular fa-arrow-right-from-bracket" })
                                            ),
                                            React.createElement(
                                                "span",
                                                { id: "masterSignout" },
                                                Akumina.Digispace.Language.GetText("fs.masterpage.signout")
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement("div", { rel: "Language Picker", "class": "ak-widget mfp-hide", id: "d79e8bba-01bc-4639-8deb-52942cdba2a8" })
                    )
                )
            ),
            React.createElement(
                "nav",
                { "class": "ak-foundation-main-nav-wrapper ak-widget-wrapper fs-js-header" },
                React.createElement("div", { rel: "TopNav-MegaMenu", "class": "ak-widget", id: "7008c0cf-5535-4cec-8e26-2cd8844d536e" })
            ),
            React.createElement(
                "div",
                { "class": "ak-foundation-page-wrapper ia-content-wrapper" },
                React.createElement(
                    "div",
                    { "class": "ak-widget-wrapper" },
                    React.createElement("div", { rel: "SiteAlerts", "class": "ak-widget", id: "0d2d284a-3715-4e4a-beda-bb770b59ef21" })
                ),
                React.createElement(
                    "div",
                    { "class": "ak-widget-wrapper" },
                    React.createElement("div", { rel: "Breadcrumbs Widget", "class": "ak-widget", id: "3b4f2e0a-784c-4bad-8b23-070f7238357c" })
                ),
                React.createElement(
                    "div",
                    { "class": "ia-content" },
                    stickyNoteMessage && React.createElement(
                        "div",
                        { "class": "ia-sticky-error" },
                        React.createElement(
                            "div",
                            { "class": "row sticky-note" },
                            stickyNoteMessage
                        )
                    ),
                    React.createElement(
                        "div",
                        { id: "content" },
                        React.createElement(
                            "div",
                            { "class": "ak-page-wrapper row" },
                            pageComponent
                        )
                    )
                )
            ),
            React.createElement(
                "footer",
                { "class": "ia-footer aksearchexclude" },
                React.createElement(
                    "button",
                    { id: "scrollOnTop", "class": "ia-scroll-top ia-hide" },
                    React.createElement("i", { "class": "fa-regular fa-circle-chevron-up", "aria-hidden": "true" }),
                    React.createElement(
                        "span",
                        null,
                        Akumina.Digispace.Language.TryGetText('fs.masterpage.backtotop')
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "ia-top-footer load-form ia-load-form-link" },
                    React.createElement(
                        "span",
                        null,
                        Akumina.Digispace.Language.TryGetText('fs.masterpage.intranet')
                    ),
                    React.createElement(
                        "a",
                        { href: "#" },
                        React.createElement("i", { "class": "fa-regular fa-comment-arrow-up-right" }),
                        Akumina.Digispace.Language.TryGetText('fs.masterpage.whatyouthink')
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "ia-top-footer ak-widget-wrapper" },
                    React.createElement("div", { rel: "Foundation3-FooterLinks", "class": "ak-widget", id: "5854ed59-d211-4bea-9205-14b4c75a5b97" })
                ),
                React.createElement(
                    "div",
                    { "class": "ia-bottom-footer" },
                    React.createElement(
                        "div",
                        { "class": "ia-footer-logo ak-site-logo" },
                        React.createElement(
                            "a",
                            { "class": "ak-spalink", "data-interception": "off", href: LogoUrl },
                            React.createElement("img", { src: "", alt: "Company Logo." })
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "ia-footer-page-details" },
                        React.createElement(
                            "div",
                            { "class": "ia-page-contact" },
                            React.createElement(
                                "span",
                                null,
                                Akumina.Digispace.Language.TryGetText('fs.masterpage.pagecontact'),
                                ": "
                            ),
                            React.createElement(
                                "a",
                                { href: "mailto:" + pageContext.ModifiedByUserEmail },
                                pageContext.ModifiedByUserEmail
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "ia-page-modified" },
                            React.createElement(
                                "span",
                                null,
                                Akumina.Digispace.Language.TryGetText('fs.masterpage.lastupdated'),
                                ": "
                            ),
                            React.createElement(
                                "span",
                                null,
                                new Akumina.AddIn.Utilities.SharePointTime().convertToTimeZone(moment(pageContext.ModifiedDateUtcISO)).format(siteContext.DateFormat ? siteContext.DateFormat["standardformat"] : 'MM/DD/YY h:mm A')
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "ia-footer-copyright" },
                        "\xA9 ",
                        copyRight,
                        " Akumina. ",
                        Akumina.Digispace.Language.TryGetText('fs.masterpage.allrightsreserved')
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { id: "formscontainer", "class": "forms-modal ia-modal mfp-hide" },
            React.createElement("div", { rel: "Forms", "class": "hive-widget", id: "DC10D735-54DF-42E1-8C13-4E811CA5F8C6" }),
            React.createElement(
                "div",
                { "class": "ia-button-row ia-js-modal-close-row" },
                React.createElement(
                    "button",
                    { "class": "ia-js-close-btn ia-button ia-button-primary" },
                    Akumina.Digispace.Language.TryGetText('common.close')
                )
            )
        )
    ),
    React.createElement(
        "nav",
        { "class": "ia-mobile-nav-wrapper" },
        React.createElement(
            "ul",
            { "class": "ia-mobile-nav" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "button",
                    { id: "ia-js-menu-btn-search", "class": "ia-mobile-menu-btn ia-mobile-menu-search" },
                    React.createElement("i", { "class": "fa-light fa-magnifying-glass" }),
                    React.createElement(
                        "span",
                        null,
                        "Search"
                    )
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "button",
                    { id: "ia-js-menu-btn-mission-control", "class": "ia-mobile-menu-btn ia-mobile-menu-mission-control" },
                    React.createElement("i", { "class": "fa-light fa-rocket-launch" }),
                    React.createElement(
                        "span",
                        null,
                        "Mission Control"
                    )
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "button",
                    { id: "ia-js-menu-btn-notifications", "class": "ia-mobile-menu-btn ia-mobile-menu-notifications" },
                    React.createElement("i", { "class": "fa-regular fa-bell" }),
                    React.createElement(
                        "span",
                        null,
                        "Notifications"
                    )
                )
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "button",
                    { id: "ia-js-menu-btn-toggle", "class": "ia-mobile-menu-btn ia-mobile-menu-toggle ia-js-mobile-menu-toggle" },
                    React.createElement("i", { "class": "fa-regular fa-bars" }),
                    React.createElement(
                        "span",
                        null,
                        "Menu"
                    )
                )
            )
        )
    )
);