  $("#countdown")
  .countdown("2017/08/04", function(event) {
    $(this).html(
      event.strftime(
      	'<div class="timeWrap">%D days</div><div class="timeWrap">%H</div><div class="timeWrap">%M</div><div class="timeWrap">%S</div>')
    );
  });