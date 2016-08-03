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
});
