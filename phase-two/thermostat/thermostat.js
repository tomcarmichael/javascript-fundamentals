class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSavingMode === true) {
      if (this.temperature < 25) {
        this.temperature += 1;
      }
    } else {
      if (this.temperature < 32) {
        this.temperature += 1;
      }
    }
  }
  
  down() {
    if (this.temperature > 10) {
      this.temperature -= 1;
    }
  }

  setPowerSavingMode(status) {
    this.powerSavingMode = status;
  }

  reset() {
    this.temperature = 20;
  }

  reportEnergyUsage() {
    if(this.temperature < 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}



module.exports = Thermostat;