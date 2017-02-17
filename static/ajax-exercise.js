"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
	var fortune = results;
	$('#fortune-text').html(fortune);
}

function showFortune(evt) {
	$.get('/fortune', replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
	evt.preventDefault();
    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    $.get(url, getWeather)
    // TODO: request weather with that URL and show the forecast in #weather-info
}


function getWeather(results) {
	console.log(results);
	$('#weather-info').html(results["forecast"]);
}


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    var formInputs = {
    	"melon_type": $("#melon-type-field").val(),
    	"qty": $("#qty-field").val()
    };

    $.post("/order-melons.json", formInputs, showMessage);

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

function showMessage(results) {
	var message = results;
	$('#order-status').html(message['txt'])
}

$("#order-form").on('submit', orderMelons);


