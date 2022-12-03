(function () {
  "use strict";
  //turn all background to default color
  $("#tabs >ul>li>a").click(function () {
    $("#tabs >ul>li>a").css({ background: "#a2a2a2", color: "#cecece" });
    $(this).css({ background: "#eaeaea", color: "#333" }); //turn the background to color of the font that's clicked on
    //change tab content
    const thisTab = $(this).attr("href");
    //tabs visible and animation-fade-in-out
    $("#tabs > div:visible").fadeOut(200, function () {
      $(thisTab).fadeIn(200);
    });
  });
})();
