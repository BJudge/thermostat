'use strict';

function Thermostat() {
this.temperature = 20;
this.MINIMUM_TEMPERATURE = 10;
this.powerSavingMode = true;
//this.POWER_SAVING_MODE_MAX_TEMP = 25;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function () {
//  if(this.isPowerSavingMaxTemp()) {
  //  return;
//  }
   this.temperature += 1;
};

Thermostat.prototype.isMinTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.down = function () {
  if(this.isMinTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
};

//Thermostat.prototype.isPowerSavingMaxTemp = function() {
  //return this.temperature === this.POWER_SAVING_MODE_MAX_TEMP;
//};
