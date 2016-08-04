$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature_up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature_down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature_reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#switch_power_saving_mode_on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power_saving_status').text('On')
    updateTemperature();
  })

  $('#switch_power_saving_mode_off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power_saving_status').text('Off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());

  }



});
