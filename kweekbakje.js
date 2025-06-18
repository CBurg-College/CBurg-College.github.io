const channelId = "2936917";		// Channel number of 'Kweekbakje 1'
const points = 1;					// Number of data points requested
const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json&results=${points}`;


fetch(url)
  .then(response => response.json())
  .then(data => {
	const feeds = data.feeds;
	const moisture = document.getElementById("Grondvochtigheid")
	const illumination = document.getElementById("Lichtsterkte")
	const temperature = document.getElementById("Temperatuur")
	const humidity = document.getElementById("Luchtvochtigheid")
	const pump = document.getElementById("Pomp")
	if (feeds && (feeds.length > 0)) {
		feeds.forEach(feed => {
		  if (moisture) moisture.innerHTML = `${feed.field1}`;
		  if (illumination) illumination.innerHTML = `${feed.field2}`;
		  if (humidity) humidity.innerHTML = `${feed.field3}`;
		  if (temperature) temperature.innerHTML = `${feed.field4}`;
		  if (pump) pump.innerHTML = `${feed.field5}`;
		});
	}
	else {
	  if (moisture) moisture.innerHTML = `###`;
	  if (illumination) illumination.innerHTML = `###`;
	  if (humidity) humidity.innerHTML = `###`;
	  if (temperature) temperature.innerHTML = `###`;
	  if (pump) pump.innerHTML = `###`;
	}
  })
