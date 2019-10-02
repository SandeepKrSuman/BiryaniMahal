function openWin() {
  window.open("bookatable.html");
}

$(".buttonbook").click(function() {
  $(".formdiv").fadeOut();
  $(".msg1").append("Thankyou for Booking, <br> We are preparing your Table!!!");
  $(".msgdiv").addClass("msgdiv1");
});


function order() {
  window.open("orderonline.html");
}

$(".buttonorder").click(function() {
  $(".formdiv").fadeOut();
  $(".msg1").append("Thankyou for The Order, <br> Your Food will reach soon!!! <br>");
  $(".delimg").attr("src", "images/scooter.png");
  $(".msgdiv").addClass("msgdiv1");
});
