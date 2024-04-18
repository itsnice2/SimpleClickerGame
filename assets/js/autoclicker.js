
// ##### A U T O C L I C K E R #######################################################################

// Autoklicker
var autoklicker = 0;
var autoklickerpreis = 10;
var autoklickerupgrade = 1000;
var autoklickerprosekunde = 1;

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
		autoklickerpreis = autoklickerpreis * 1.2;
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
	if(klicksimbesitz - autoklickerupgrade >= 0)
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


