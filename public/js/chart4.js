google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Phase1', 'Phase2'],
    ['January', 270, 210],
    ['February', 270, 250],
    ['March', 270, 210],
    ['April', 270, 250],
    ['May', 270, 210],
    ['June', 270, 250],
    ['July', 270, 210]
  ]);

  var options = {
    title: 'Voltage phase',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  chart.draw(dpVoltagePhase, options);
}
