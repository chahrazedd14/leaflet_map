// Map modal
(function($, window) {
    var $body = $("body");
    $(document).ready(function() {
        mapInfoInit();
    });

    function mapInfoInit() {
        $(".map-location-marker , .marker-p-plagne").click(function(e) {
            e.preventDefault();
            $("#map-info, #overlay").remove();
            buildmapInfo(
                $(this).data("mapLink"),
                $(this).data("mapTitle"),
                $(this).data("mapImage"),
                $(this).data("jobListings")
            );
        });
    }

    function buildmapInfo(location, title, src, link) {
        $('<div id="map-info">')
            .addClass(location)
            .fadeIn("slow")
            .appendTo("#places-map .map")
            .html(
                "<h1>" +
                title +
                "</h1>" +
                '<a href="' +
                link +
                '"></a>' +
                // '<img src="https://jeffbridgforth.com/codepen/san-francisco.jpg' +
                // src +
                // '" alt="" />' +
                '<span class="close-btn"></span>'
            );
        // Close map info if click anywhere outside of it
        /* http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it */
        var mapInfo = $("#map-info");
        $(document).mouseup(function(e) {
            if (!mapInfo.is(e.target) && mapInfo.has(e.target).length === 0) {
                mapInfo.fadeOut("slow", function() {
                    $(this).remove();
                });
            }
        });
        $("#map-info .close-btn").click(function(e) {
            $("#map-info").fadeOut("slow", function() {
                $(this).remove();
            });
        });
    }
})(jQuery, window);