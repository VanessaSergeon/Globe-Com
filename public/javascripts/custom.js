$(document).ready(function() {

// ****************** TRADE PAGE *********************

// Trade panel

// New pricing click function

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

// New shipment click function

$('#newShipment').click(function() {
  var shipment ='<tr>';
    shipment+= '<td><input class="form-control" type="text"></td>';
    shipment+= '<td><input class="form-control" type="text"></td>';
    shipment+= '<td><input class="form-control" type="text"></td>';
    shipment+= '<td><input class="form-control" type="text"></td>';
    shipment+= '<td><input class="form-control" type="text"></td>';
    shipment+= '</tr>';
  $('#scheduleTable').append(shipment);
});





}); // ************** END DOCUMENT READY ****************

