
var klicksimbesitz = 0;
var anzahlklicks = 0;
var klicksprosekunde = 0;

// Manueller Klick
var manualklicker = 1;
var manualklickerupgrade = 1000;
var manualklickerprosekunde = 1;


// Autoklicker
var autoklicker = 0;
var autoklickerpreis = 10;
var autoklickerupgrade = 1000;
var autoklickerprosekunde = 1;


//var test = 10;

function click_click()
{
	// Klicks ausgeführt aktualisieren
	klicksimbesitz = klicksimbesitz + manualklicker;
	document.getElementById('cklickstospend').innerText = klicksimbesitz.toFixed(2);
	
	// Klicks insgesamt aktualisieren
	anzahlklicks = anzahlklicks + manualklicker;
	document.getElementById('clicklabel').innerHTML = anzahlklicks;
	/*
	 * Test wegen Multiplikation
	test = test * 1.1;
	alert(test.toFixed(2));
	*/
}

function upgrade_click_click()
{
	//
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

function upgrade_autoclicker()
{
	
	if(klicksimbesitz - autoklickerupgrade < 0)
	{
		//
	}
	else
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - autoklickerupgrade;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

		// Upgrade-Kosten
		autoklickerupgrade = autoklickerupgrade * 1.5;
		document.getElementById('upgradeautoclickcost').innerText = autoklickerupgrade.toFixed(2);

		// Klicks pro Sekunde ändern
		autoklickerprosekunde = autoklickerprosekunde + 1;
		document.getElementById('upgradeautoclickcount').innerText = autoklickerprosekunde;
	}
}

// Intervall, alle 1000ms ausführen
var intervalId = window.setInterval(function(){
  anzahlklicks = anzahlklicks + klicksprosekunde;
  document.getElementById('clicklabel').innerHTML = anzahlklicks;
  klicksprosekunde = (autoklickerprosekunde * autoklicker);
  document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
  klicksimbesitz = klicksimbesitz + klicksprosekunde;
  document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);
  
}, 1000);