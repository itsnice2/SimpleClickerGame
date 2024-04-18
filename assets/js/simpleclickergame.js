
/*
MegaClicker = new Clicker(0,1000,100000,100);
UltraClicker = new Clicker(0,1000,100000,100);
PlanetaryClicker = new Clicker(0,1000,100000,100);
SolarSystemClicker = new Clicker(0,1000,100000,100);
GalaxyClicker = new Clicker(0,1000,100000,100);
UniverseClicker = new Clicker(0,1000,100000,100);
*/


var klicksimbesitz = 0;
var anzahlklicks = 0;
var klicksprosekunde = 0;

var footerisvisible = false;

// Manueller Klick
var manualklicker = 1;
var manualklickerupgrade = 1000;
var manualklickerprosekunde = 1;


// Autoklicker
var autoklicker = 0;
var autoklickerpreis = 10;
var autoklickerupgrade = 1000;
var autoklickerprosekunde = 1;

var test = 0;
var MegaCklicker = new Clicker(0,1000,100000,100);

function TestFunction()
{
	test += 1;
	MegaCklicker.buyClicker();
	document.getElementById('TestLabel').innerText = "Test-Funktion: " + test + " - " + MegaCklicker.showClickerNumbers();
}

const btn = document.querySelector("");
btn.addEventListener("click", show_footer);

function show_footer()
{
	var showchangelog = document.getElementById('versioninfo');

	if(footerisvisible == true)
	{
		footerisvisible = false;
		showchangelog.style.display = "none";
	}
	else
	{
		footerisvisible = true;
		showchangelog.style.display = "block";
	}
}


function click_click()
{
	
	// Klicks ausgeführt aktualisieren
	klicksimbesitz = klicksimbesitz + manualklicker;
	document.getElementById('cklickstospend').innerText = klicksimbesitz.toFixed(2);

	// Klicks insgesamt aktualisieren
	anzahlklicks = anzahlklicks + manualklicker;
	document.getElementById('clicklabel').innerHTML = anzahlklicks;
}

function upgrade_click_click()
{
	if(klicksimbesitz - manualklickerupgrade < 0)
	{
		//
	}
	else
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - manualklickerupgrade;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

		// Upgrade-Kosten
		manualklickerupgrade = manualklickerupgrade * 1.8;
		document.getElementById('upgrademanualclickcost').innerText = manualklickerupgrade.toFixed(2);

		// Klicks pro Sekunde ändern
		manualklicker = manualklicker + 2;
		document.getElementById('upgrademanualclickcount').innerText = manualklicker;
	}
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
	anzahlklicks = anzahlklicks + (klicksprosekunde / 10);
	document.getElementById('clicklabel').innerHTML = anzahlklicks.toFixed(0);
	klicksprosekunde = autoklickerprosekunde * autoklicker;
	document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
	klicksimbesitz = klicksimbesitz + (klicksprosekunde / 10);
	document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);
}, 100);

