/*
	Übersicht über die verschiedenen Klicker (die noch kommen)
						Anzahl 		Kosten 			Upgrade 		Klicks/s
AutoClicker 		= 	0			,100			,1000			,1
MegaClicker 		= 	0			,1000			,100000			,10
UltraClicker 		= 	0			,10000			,100000			,100
PlanetaryClicker 	= 	0			,100000			,100000			,1000
SolarSystemClicker 	= 	0			,1000000		,100000			,10000
GalaxyClicker 		= 	0			,10000000		,100000			,100000
UniverseClicker 	= 	0			,100000000		,100000			,1000000
MultiverseClicker 	= 	0			,1000000000		,100000			,10000000
*/


var visible_AutoClicker = document.getElementById('autoclicker');

var klicksimbesitz = 0;
var anzahlklicks = 0;
var klicksprosekunde = 0;

var footerisvisible = false;
var manualclickerIsVisible = false;
var upgradetableIsVisible = false;;
var megacklickerIsVisible = false;
var counter = 0;

//var manualklicker = 10000000000000; // Testwert, zum Testen. Was denn sonst? Nein. Das ist kein Cheaten... glaub ich XD
var manualklicker = 1;
var manualklickerupgrade = 1000;
var manualklickerprosekunde = 1;


function TestFunktion(anzahl)
{
		// Klicks ausgeführt aktualisieren
		klicksimbesitz = klicksimbesitz + anzahl;
		document.getElementById('cklickstospend').innerText = klicksimbesitz.toFixed(2);
	
		// Klicks insgesamt aktualisieren
		anzahlklicks = anzahlklicks + manualklicker;
		document.getElementById('clicklabel').innerHTML = anzahlklicks.toFixed(0);
}


// Intervall, alle 1000ms ausführen
var intervalId = window.setInterval(function(){
	anzahlklicks = anzahlklicks + (klicksprosekunde / 100);
	document.getElementById('clicklabel').innerHTML = anzahlklicks.toFixed(0);
	klicksprosekunde = (autoklickerprosekunde * autoklicker) + (megaklickerprosekunde * megaklicker);
	document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
	klicksimbesitz = klicksimbesitz + (klicksprosekunde / 100);
	document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

	// ToDo: Sichtbarkeit der Upgrade
}, 10);


var showUpgrades = window.setInterval(function(){
	/*
	var manualclickerIsVisible = false;
	var upgradetableIsVisible = false;
	var autocklickerIsVisible = false;
	var megacklickerIsVisible = false;
	*/

	counter += 1;
	
	if(counter > 300) //Std: 300
	{ 
		manualclickerIsVisible = true;
		document.getElementById('manualclicker').style.display = "block";
		document.getElementById('buyupgrades').style.display = "block";
	}
	
	if(anzahlklicks > 100)
	{
		upgradetableIsVisible = true;
		document.getElementById('buyupgrades').style.display = "block";
		document.getElementById('upgradetable').style.display = "block";
	}

	if(anzahlklicks > 1000)
	{
		megacklickerIsVisible = true;
		document.getElementById('megaclicker').style.visibility = "visible";
	}

}, 1000);


function show_changelog()
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

// ##### M A N U A L C L I C K E R #######################################################################

function click_click()
{
	
	// Klicks ausgeführt aktualisieren
	klicksimbesitz = klicksimbesitz + manualklicker;
	document.getElementById('cklickstospend').innerText = klicksimbesitz.toFixed(2);

	// Klicks insgesamt aktualisieren
	anzahlklicks = anzahlklicks + manualklicker;
	document.getElementById('clicklabel').innerHTML = anzahlklicks.toFixed(0);

}

function upgrade_click_click()
{
	if(klicksimbesitz - manualklickerupgrade >= 0)
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - manualklickerupgrade;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

		// Upgrade-Kosten
		manualklickerupgrade = manualklickerupgrade * 1.8;
		document.getElementById('upgrademanualclickcost').innerText = manualklickerupgrade.toFixed(2);

		// Klicks pro Klick ändern
		manualklicker = manualklicker + 2;
		document.getElementById('upgrademanualclickcount').innerText = manualklicker;
	}
}



// ##### A U T O C L I C K E R #######################################################################

// Autoklicker
var autoklicker = 0;
var autoklickerpreis = 10;
var autoklickerupgrade = 1000;
var autoklickerprosekunde = 1;
var autoclickerpercentage = 0;
var autoclickerpreimultiplikator = 1.018;
var autoklickerupgrademultiplikator = 1.5;

function buy_autoclicker()
{
	if(klicksimbesitz - autoklickerpreis >= 0)
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - autoklickerpreis;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);
		
		// Anzahl der Autoclicker
		autoklicker = autoklicker + 1;
		document.getElementById('autoclickcount').innerHTML = autoklicker;
		
		// Preis anpassen
		autoklickerpreis = autoklickerpreis * autoclickerpreimultiplikator;
		document.getElementById('autoclick').innerText = autoklickerpreis.toFixed(2);
		
		// Klicks pro Sekunde aktualisieren
		klicksprosekunde = klicksprosekunde + 1;
		document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
		
		// Klicks ausgeführt aktualisieren
		anzahlklicks = anzahlklicks + 1;
		document.getElementById('clicklabel').innerHTML = anzahlklicks;

		percentage();
	}
}

function upgrade_autoclicker()
{
	if(klicksimbesitz - autoklickerupgrade >= 0)
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - autoklickerupgrade;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

		// Upgrade-Kosten
		autoklickerupgrade = autoklickerupgrade * autoklickerupgrademultiplikator;
		document.getElementById('upgradeautoclickcost').innerText = autoklickerupgrade.toFixed(2);

		// Klicks pro Sekunde ändern
		autoklickerprosekunde = autoklickerprosekunde + 1;
		document.getElementById('upgradeautoclickcount').innerText = autoklickerprosekunde;

		percentage();
	}
}



// ##### M E G A C L I C K E R #######################################################################

// Megaklicker
var megaklicker = 0;
var megaklickerpreis = 1000;
var megaklickerupgrade = 100000;
var megaklickerprosekunde = 100;
var megaclickerpreimultiplikator = 1.07;
var megaklickerupgrademultiplikator = 1.5;

function buy_megaclicker()
{
	if(klicksimbesitz - megaklickerpreis >= 0)
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - megaklickerpreis;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);
		
		// Anzahl der Megaclicker
		megaklicker = megaklicker + 1;
		document.getElementById('megaclickcount').innerHTML = megaklicker;
		
		// Preis anpassen
		megaklickerpreis = megaklickerpreis * megaclickerpreimultiplikator;
		document.getElementById('megaclick').innerText = megaklickerpreis.toFixed(2);
		
		// Klicks pro Sekunde aktualisieren
		klicksprosekunde = klicksprosekunde + 100;
		document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
		
		// Klicks ausgeführt aktualisieren
		anzahlklicks = anzahlklicks + 100;
		document.getElementById('clicklabel').innerHTML = anzahlklicks;
	}
}

function upgrade_megaclicker()
{
	if(klicksimbesitz - megaklickerupgrade >= 0)
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - megaklickerupgrade;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

		// Upgrade-Kosten
		megaklickerupgrade = megaklickerupgrade * megaklickerupgrademultiplikator;
		document.getElementById('upgrademegaclickcost').innerText = megaklickerupgrade.toFixed(2);

		// Klicks pro Sekunde ändern
		megaklickerprosekunde = megaklickerprosekunde + 20;
		document.getElementById('upgrademegaclickcount').innerText = megaklickerprosekunde;
	}
}


