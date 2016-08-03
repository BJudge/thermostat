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
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  });
});
