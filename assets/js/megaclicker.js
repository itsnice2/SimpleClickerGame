
// ##### M E G A C L I C K E R #######################################################################

// Megaklicker
var megaklicker = 0;
var megaklickerpreis = 1000;
var megaklickerupgrade = 100000;
var megaklickerprosekunde = 100;

function buy_autoclicker()
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
		megaklickerpreis = megaklickerpreis * 1.2;
		document.getElementById('megaclick').innerText = megaklickerpreis.toFixed(2) + " Klicks";
		
		// Klicks pro Sekunde aktualisieren
		klicksprosekunde = klicksprosekunde + 100;
		document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
		
		// Klicks ausgeführt aktualisieren
		anzahlklicks = anzahlklicks + 1;
		document.getElementById('clicklabel').innerHTML = anzahlklicks;
	}
}

function upgrade_autoclicker()
{
	if(klicksimbesitz - megaklickerupgrade >= 0)
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - megaklickerupgrade;
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

		// Upgrade-Kosten
		megaklickerupgrade = megaklickerupgrade * 1.5;
		document.getElementById('upgrademegaclickcost').innerText = megaklickerupgrade.toFixed(2);

		// Klicks pro Sekunde ändern
		megaklickerprosekunde = megaklickerprosekunde + 20;
		document.getElementById('upgrademegaclickcount').innerText = megaklickerprosekunde;
	}
}


