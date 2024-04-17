
var klicksimbesitz = 0;
var anzahlklicks = 0;
var klicksprosekunde = 0;
var autoklicker = 0;
var autoklickerpreis = 10;
//var test = 10;

function click_click()
{
	// Klicks ausgeführt aktualisieren
	klicksimbesitz = klicksimbesitz + 1;
	document.getElementById('cklickstospend').innerText = klicksimbesitz.toFixed(2);
	
	// Klicks insgesamt aktualisieren
	anzahlklicks = anzahlklicks + 1;
	document.getElementById('clicklabel').innerHTML = anzahlklicks;
	/*
	 * Test wegen Multiplikation
	test = test * 1.1;
	alert(test.toFixed(2));
	*/
}

function buy_autoclicker()
{
	
	// Prüfen ob man Autoclicker kaufen kann
	if(klicksimbesitz - autoklickerpreis < 0)
	{
		//
	}
	else
	{
	
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - autoklickerpreis;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);
		
		// Anzahl der Autoclicker
		autoklicker = autoklicker + 1;
		document.getElementById('autoclickcount').innerHTML = autoklicker;
		
		// Preis anpassen
		autoklickerpreis = autoklickerpreis * 1.2;
		// zum Testen
		//alert(autoklickerpreis);
		document.getElementById('autoclick').innerText = autoklickerpreis.toFixed(2) + " Klicks";
		
		// Klicks pro Sekunde aktualisieren
		klicksprosekunde = klicksprosekunde + 1;
		document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
		
		// Klicks ausgeführt aktualisieren
		anzahlklicks = anzahlklicks + 1;
		document.getElementById('clicklabel').innerHTML = anzahlklicks;
	}
}

// Intervall, alle 1000ms ausführen
var intervalId = window.setInterval(function(){
  anzahlklicks = anzahlklicks + klicksprosekunde;
  document.getElementById('clicklabel').innerHTML = anzahlklicks;
  document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
  klicksimbesitz = klicksimbesitz + klicksprosekunde;
  document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);
  
}, 1000);