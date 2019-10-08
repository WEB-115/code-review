$("#seal").click(function () {
  $("#shadow").removeClass("pulse"),
    $("#shadow").css({
      "display": "none"
    }),
    $(this).fadeOut(1000, function () {
      $("#scroll").fadeOut(1000, function () {
        $("#backdrop").fadeIn(3000, function () {
          $("#context").fadeIn(1000, function () {
          })    
    })
})})});


$("#seal").hover(
  function () {
    $("#shadow").addClass("pulse");
  },
  function () {
    $("#shadow").removeClass("pulse");
  }
);
