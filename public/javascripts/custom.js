// ****** PRICING TAB *******

// New pricing click function
$(document).ready(function() {

  var numPricings = 0;
  $('#newPrice').click(function() {
    numPricings++;
    var pricing = '<form class="form-inline">';
    pricing += '<label>Pricing '+numPricings+'</label>';
    pricing += '<input class="form-control" type="number">';
    pricing += '  @  <input class="form-control" type="text" placeholder="00.00 cts">';
    pricing += '  <input class="form-control" type="text" placeholder="Date">';
    pricing += '</form>';
    $('#prices').append(pricing);
  });

});