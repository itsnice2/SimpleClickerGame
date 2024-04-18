class Clicker
{
    
    autoclickerNumbers  = 0;
    autoclickerPrice    = 10;
    autoclickerUpgrade  = 1000;
    autoclicksPerSecond = 1;
    

    constructor(autoclickerNumbers, autoclickerPrice, autoclickerUpgrade, autoclicksPerSecond)
    {
        this.autoclickerNumbers = autoclickerNumbers;
        this.autoclickerPrice = autoclickerPrice;
        this.autoclickerUpgrade = autoclickerUpgrade;
        this.autoclicksPerSecond = autoclicksPerSecond;
    }
    
    buyClicker()
    {
        this.autoclickerNumbers = this.autoclickerNumbers + 1;
        this.autoclickerPrice = this.autoclickerPrice * 1.5;
    }

    upgradeClicker()
    {
        this.autoclicksPerSecond = this.autoclicksPerSecond + 1;
        this.autoclickerUpgrade = this.autoclickerUpgrade * 1.8;
    }

    showClickerNumbers()
    {
        return this.autoclickerNumbers;
    }

    showClickerPrice()
    {
        return this.autoclickerPrice;
    }

    showClickerUpgradeCost()
    {
        return this.autoclickerUpgrade;
    }

    showClicksPerSecond()
    {
        return this.autoclicksPerSecond;
    }
    

}

//const MegaCklicker = new Clicker(0,1000,100000,100);

