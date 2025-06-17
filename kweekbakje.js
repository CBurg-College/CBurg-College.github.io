const channelId = "2936917";		// Channel number of 'Kweekbakje 1'
const points = 1;					// Number of data points requested
const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json&results=${points}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
	const feeds = data.feeds;
	feeds.forEach(feed => {
	  document.getElementById("Grondvochtigheid").innerHTML = `${feed.field1}`;
	  document.getElementById("Lichtsterkte").innerHTML = `${feed.field2}`;
	  document.getElementById("Luchtvochtigheid").innerHTML = `${feed.field3}`;
	  document.getElementById("Temperatuur").innerHTML = `${feed.field4}`;
	  document.getElementById("Pomp").innerHTML = `${feed.field5}`;
	});
  })
