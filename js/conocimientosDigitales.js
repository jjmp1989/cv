// JAVASCRIPT DOCUMENT

$(document).ready(function() {
    $(".digitalSectionContent p").hide();

    $(".digitalSectionContentTitle").on("click", showDigitalParagraphs);
});

function showDigitalParagraphs(e) {
    /*
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(e.target.nodeName);
    */

    if (e.target.nodeName == "P" || e.target.nodeName == "DIV") {
        return false;
    }

    if (e.currentTarget == osBox) {
        $(".osBoxParagraph p").slideToggle();
    } else if (e.currentTarget == officeBox) {
        $(".officeBoxParagraph p").slideToggle();
    } else if (e.currentTarget == dbmsBox) {
        $(".dbmsBoxParagraph p").slideToggle();
    } else if (e.currentTarget == nosqlBox) {
        $(".nosqlBoxParagraph p").slideToggle();
    } else if (e.currentTarget == queryLanguagesBox) {
        $(".queryLanguagesBoxParagraph p").slideToggle();
    } else if (e.currentTarget == programmingLanguagesBox) {
        $(".programmingLanguagesBoxParagraph p").slideToggle();
    } else if (e.currentTarget == markBox) {
        $(".markBoxParagraph p").slideToggle();
    } else if (e.currentTarget == stylesheetBox) {
        $(".stylesheetBoxParagraph p").slideToggle();
    } else if (e.currentTarget == idesBox) {
        $(".idesBoxParagraph p").slideToggle();
    }
}