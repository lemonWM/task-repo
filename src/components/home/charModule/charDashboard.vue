<template>
  <div>
    <div class="d-flex flex-row top-dashboard-conetent">
      <p>Dashboard</p>
      <div>
        <button class="btn left-side"><i class="fas fa-caret-left "></i></button>
        <button class="btn right-side"><i class="fas fa-caret-right "></i></button>
      </div>
    </div>
      <div class="chart">
        <canvas id="chart" ref="chart" style="height: 250px"></canvas>
      </div>
    </div>

</template>

<script>

import Chart from 'chart.js'

export default {
    name: 'chart-dashboard',
    data() {
        return {
            values: [60,50,30,40,60,50]
        }
    },
    methods: {
      createChart(chartId,chartData){
        var myChart = new Chart(this.$refs.chart.getContext("2d"), {
          type: 'line',
          data: {
            labels: ['Mon','Thu','Wed','Thu','Fri','Sat'],
            datasets: [{
                label: false,
                data: chartData,
                backgroundColor: ['rgba(64, 68, 230, 0.4'],
                borderColor: ['rgba(64, 68, 230, 1)'],
                borderWidth: 4,
                borderCapStyle: 'butt',
                showLine: true,
                lineTension: .5,
                pointStyle: 'circle',
                pointBorderWidth: 10,
                pointHoverBorderWidth: 10,
                pointBorderColor: 'rgba(45, 45, 227, 1)',
                pointBackgroundColor: 'rgba(250, 250, 250, 1)',
                pointHoverBackgroundColor: 'rgba(45, 45, 227, 1)',
                pointHoverBorderColor: 'rgba(0, 0, 0, 1)',
                responsive: true
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  padding: 10
                },
                afterTickToLabelConversion : function(q){
                    for(let tick in q.ticks){

                        if(tick % 2 == 0 ){
                          q.ticks[tick];
                        } else{
                          q.ticks[tick] = ''
                        }
                    }
                },
                gridLines: {
                  borderDash: [4, 4],
                  color: "#becfd7",  
                },
                
              }],
              xAxes: [{
                ticks: {
                  padding: 10
                },
                afterTickToLabelConversion : function(q){
                    for(let tick in q.ticks){

                        if(q.ticks[q.ticks.length-1]){

                          q.ticks[q.ticks.length-1] = ''
                        }
                    }
                },
                gridLines: {
                    borderDash: [8, 4],
                    color: "transparent"
                }
              }]
            },
            title: {
                display: true,
                text: 'Online Users',
                verticalAlign: "left",
                position: 'top',
                fontSize: 18,
                fontStyle: 'normal',  
                position: 'top'  ,
            },
            events: ['mousemove'],
            legend: {
                display: false,
            },
            tooltips: {
                yAlign: 'bottom',
                xAlign: 'center',
                caretSize: 0,
                caretPadding: 15,
                yAlign: 'bottom',
                backgroundColor: '#898adc',
                titleAlign:'center',
                bodyAlign: 'center',
                xPadding: 7,
                yPadding: 13,
                cornerRadius: 22,
                intersect: false,
                callbacks: {
                    title: function() {
                        return '';
                    }
                }, 
                custom: function(tooltip) {
                    if (!tooltip) return;
                    tooltip.displayColors = false;
                },
            },
            layout: {
                padding: {                    
                    top: 25,
                    left: 20,
                    right:50
                }
            }
          }
        });
      }
    },
    mounted(){
      let data = this.values
      this.createChart('chart',data);
    }
}
</script>
