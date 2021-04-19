// JAVASCRIPT DOCUMENT

$(document).ready(function() {
    $(".digital_section_content p").hide();

    $(".digital_section_content_title").on("click", showDigitalParagraphs);
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

    if (e.currentTarget == os_box) {
        $("#os_box_paragraph p").slideToggle();
    } else if (e.currentTarget == office_box) {
        $("#office_box_paragraph p").slideToggle();
    } else if (e.currentTarget == dbms_box) {
        $("#dbms_box_paragraph p").slideToggle();
    } else if (e.currentTarget == nosql_box) {
        $("#nosql_box_paragraph p").slideToggle();
    } else if (e.currentTarget == query_languages_box) {
        $("#query_languages_box_paragraph p").slideToggle();
    } else if (e.currentTarget == mark_box) {
        $("#mark_box_paragraph p").slideToggle();
    } else if (e.currentTarget == stylesheet_box) {
        $("#stylesheet_box_paragraph p").slideToggle();
    } else if (e.currentTarget == ides_box) {
        $("#ides_box_paragraph p").slideToggle();
    }
}