const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('Starts with an initial temperature of 20 degrees', () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  })

  it('Increases temperature by 1 degree to 21 (from 20)', () => {
    let thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  })

  it('Decreases temperature by 1 degree to 19 (from 20)', () => {
    let thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  })

  it('Refuses to decrease the temperature below 10 degrees', () => {
    let thermostat = new Thermostat();
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  })

  it('Let power saving mode default start as true', () => {
    let thermostat = new Thermostat();
    expect(thermostat.powerSavingMode).toBe(true);
  })

  it('Let power saving mode default start as true', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    expect(thermostat.powerSavingMode).toBe(false);
  })

  it('Refuses to increase the temperature aboce 25 when power saving mode is on', () => {
    let thermostat = new Thermostat();
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  })

  it('Refuses to increase the temperature aboce 32 when power saving mode is off', () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  })

  it('Resets the temperature to 20 degrees', () => {
    let thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  })

  it("Reports the thermostat as low enrgy usage", () => {
    let thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(thermostat.reportEnergyUsage()).toBe('low-usage');
  })

  it("Reports the thermostat as medium enrgy usage", () => {
    let thermostat = new Thermostat();
    expect(thermostat.reportEnergyUsage()).toBe('medium-usage');
  })

  it("Reports the thermostat as low enrgy usage", () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.reportEnergyUsage()).toBe('high-usage');
  })
})