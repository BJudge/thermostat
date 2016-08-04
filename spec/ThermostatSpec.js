'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a temperature of 20 by default', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase the temperature by 1 degree', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease the temperature by 1 degree', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('cannot go below 10 degrees', function() {
    for(var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
    //expect(function(){thermostat.getCurrentTemperature();}).toThrowError('Minimum temperature reached');
  });

  it('has power saving model on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  it('can switch power saving mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch power saving mode back on', function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can reset temperature to 20', function() {
    for(var i = 0; i<6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it('it has a maximum temperature is 25 degrees', function() {
      for(var i = 20; i<27; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('it has a maximum temperature is 32 degrees', function() {
      thermostat.switchPowerSavingModeOff();
      for(var i = 0; i<13; i++) {
        thermostat.up();
      }
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

    describe('it should display green when temperature is below 18 degrees', function() {
      it('displays low usage', function(){
        for(var i = 0; i< 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('Low Usage');
      });
    });

    describe('it should display yellow when temperature is between 18 and 25 degrees', function() {
      it('displays medium usage', function() {
        expect(thermostat.energyUsage()).toEqual('Medium Usage');
      });
    });

    describe('it should display red when above 25 degress', function() {
      it('displays high usage', function() {
        thermostat.powerSavingMode = false  
        for(var i = 0; i<6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('High Usage');
      });
    });


});
