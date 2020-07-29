window.onload = function() {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Active Power Vs. Reactive Power Vs. Apparent Power "
    },
    axisX: {
      includeZero: true,
      valueFormatString: "MMM",
      interval: 1,
      intervalType: "month"
    },
    axisY: {
      includeZero: true,
      suffix: " W"
    },
    data: [
      {
        //active power
        type: "splineArea",
        yValueFormatString: "##",
        dataPoints: [

        <%     for (var i = 0; i < insertdatetime1.length; i++) {     %>
        <%      if (i!= insertdatetime1.length - 1) {                 %>
                 {
                    x: new Date("2019-"+<%i%>+"-20T06:51:45.000Z"),
                    y: <%= W_sum[i].W_sum %>
                  },
        <%        } else {                                            %>
                  {
                    x: new Date("2019-"+<%i%>+"-20T06:51:45.000Z"),
                    y: <%= W_sum[i].W_sum %>
                  }
        <%        }                                                  %>
        <%     }                                                     %>
                // {
            //   x: new Date("2019-12-20T06:51:45.000Z"),
            //   y: 60
            // }
        ]
       }
      //  ,
      // { //reactive power
      //   type: "splineArea",
      //   yValueFormatString: "##",
      //   dataPoints: [{
      //       x: new Date("2019-12-20T06:51:45.000Z"),
      //       y: 60
      //     },
      //     {
      //       x: new Date(2020, 1, 1),
      //       y: 55
      //     },
      //     {
      //       x: new Date(2020, 2, 1),
      //       y: 70
      //     },
      //     {
      //       x: new Date(2020, 3, 1),
      //       y: 65
      //     },
      //     {
      //       x: new Date(2020, 4, 1),
      //       y: 45
      //     },
      //     {
      //       x: new Date(2020, 5, 1),
      //       y: 40
      //     },
      //     {
      //       x: new Date(2020, 6, 1),
      //       y: 30
      //     }
      //   ]
      // },
      // { //Apparent power
      //   type: "splineArea",
      //   yValueFormatString: "##",
      //   dataPoints: [{
      //       x: new Date(2020, 0, 1),
      //       y: 66
      //     },
      //     {
      //       x: new Date(2020, 1, 1),
      //       y: 56
      //     },
      //     {
      //       x: new Date(2020, 2, 1),
      //       y: 76
      //     },
      //     {
      //       x: new Date(2020, 3, 1),
      //       y: 66
      //     },
      //     {
      //       x: new Date(2020, 4, 1),
      //       y: 46
      //     },
      //     {
      //       x: new Date(2020, 5, 1),
      //       y: 60
      //     },
      //     {
      //       x: new Date(2020, 6, 1),
      //       y: 30
      //     }
      //   ]
      // }

    ]
  });
  chart.render();

  function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

}
