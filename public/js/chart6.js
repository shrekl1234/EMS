google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Current1', 'Current2'],
    ['January', 270, 210],
    ['February', 270, 250],
    ['March', 270, 210],
    ['April', 270, 250],
    ['May', 270, 210],
    ['June', 270, 250],
    ['July', 270, 210]

  ]);

  var options = {
    title: 'Current(Amperage)',
    curveType: 'function',
    legend: {
      position: 'bottom'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart3'));

  chart.draw(data, options);
}
