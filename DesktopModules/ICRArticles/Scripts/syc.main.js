// ***********************************
// Share Your Content Main Script File
// Date:            15 october 2010
// Last version:    6 februari 2011
// Author:          J.J. Krikke
// ***********************************

// ***********************************
// OpenPrintWindow
// -----------------------------------
// Opens a new browser window in which 
// the print version of the item can 
// be shown.
// ***********************************
function openPrintWindow(url) {
    LeftPosition = (screen.width) ? (screen.width - 650) / 2 : 0;
    TopPosition = (screen.height) ? (screen.height - 725) / 2 : 0;
    popupWin = window.open(url,
                           'new_page', 
                           'width=650,height=725,top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=yes,toolbar=yes,menubar=yes,resizable=yes');
}


// ***********************************
// DisableTextSelection
// -----------------------------------
// Disables the selection of text with 
// the left mouse button. Can be used 
// as a first line of defense in copy
// protection
// 
// Source:
// http://support.microsoft.com/kb/318361/EN-US/
// ***********************************

function DisableTextSelection() {
    //if the browser is IE4+
    document.onselectstart = new Function("return false")
    //if the browser is NS6
    if (window.sidebar) {
        document.onmousedown = disabletext
        document.onclick = reEnable
    }
}
function disabletext(e) {
    return false
}
function reEnable() {
    return true
}

// ***********************************
// spanToLink
// -----------------------------------
// Converts span tags with the class 
// icr_fl (fl = fakelink) to hyperlink
// -----------------------------------
// Remarks: 
// Some navigation links do more harm 
// than good for SEO (duplicate content, 
// keyword spamming, pagerank dilution,
// etc.). This is a legal way to keep 
// crawlers from following these links 
// (same content for crawler and visitor)
// and counting them for pagerank point
// (instead of the rel=nofollow attribut)
// 
// In SYC these links are found in 
// the tagcloud, sorting options, 
// paging, etc. These links are great 
// for visitors, but terrible for SEO.
//
// References:
// http://www.dicabrio.com/javascript/nofollow-attribute.php
// http://www.seomoz.org/blog/pagination-best-practices-for-seo-user-experience
// ***********************************
function spanToLink() {

    // Navigate user to url passed in the href
    $(".icr_fl").click(function () {
        window.location = $(this).attr("href");
    });

    // Let the fakeLink behave like a real link
    $(".icr_fl").hover(function () {
        $(this).addClass("icr_flh");
    }, function () {
        $(this).removeClass("icr_flh");
    });

}
