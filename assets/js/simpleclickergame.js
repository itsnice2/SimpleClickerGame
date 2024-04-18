
var klicksimbesitz = 0;
var anzahlklicks = 0;
var klicksprosekunde = 0;

var footerisvisible = false;

var manualklicker = 1;
var manualklickerupgrade = 1000;
var manualklickerprosekunde = 1;


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
	document.getElementById('clicklabel').innerHTML = anzahlklicks.toFixed(0);
}

function upgrade_click_click()
{
	if(klicksimbesitz - manualklickerupgrade >= 0)
	{
		// Klicks im Besitz verkleinern
		klicksimbesitz = klicksimbesitz - manualklickerupgrade;W
		document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);

		// Upgrade-Kosten
		manualklickerupgrade = manualklickerupgrade * 1.8;
		document.getElementById('upgrademanualclickcost').innerText = manualklickerupgrade.toFixed(2);

		// Klicks pro Sekunde ändern
		manualklicker = manualklicker + 2;
		document.getElementById('upgrademanualclickcount').innerText = manualklicker;
	}
}

// Intervall, alle 1000ms ausführen
var intervalId = window.setInterval(function(){
	anzahlklicks = anzahlklicks + (klicksprosekunde / 100);
	document.getElementById('clicklabel').innerHTML = anzahlklicks.toFixed(0);
	klicksprosekunde = autoklickerprosekunde * autoklicker;
	document.getElementById('clickspersecond').innerHTML = klicksprosekunde;
	klicksimbesitz = klicksimbesitz + (klicksprosekunde / 100);
	document.getElementById('cklickstospend').innerHTML = klicksimbesitz.toFixed(2);
}, 10);

