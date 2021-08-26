$("#filter-options :checkbox").click(function() {
    $("#product-list .filter").hide();
    $("#filter-options :checkbox:checked").each(function() {
        $("." + $(this).val()).fadeIn();
    });

    if ($("#filter-options :checkbox").filter(":checked").length < 1) {
        $("#product-list .filter").fadeIn();
    }
});


$("document").ready(function() {
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function() {
    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    if ($(this).attr("rel") == "tab2") {
        $(".tab-slider--tabs").addClass("slide");
    } else {
        $(".tab-slider--tabs").removeClass("slide");
    }
    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});