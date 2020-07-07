$(function() {
    buildTransactionChart();
});

function buildTransactionChart() {
    Highcharts.chart('transactions-chart', {
        chart: {
            type: 'line',
            backgroundColor: '#434b52',
            color: "#fff"
        },
        exporting: false,
        credits: {
            enabled: false
        },
        legend: {
            enabled: false  
        },
        title: {
            text: '',
            style: {
                color: "#fff"
            }
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['1st', '5th', '10th', '15th', '20th', '25th', '30th']
        },
        yAxis: {
            title: {
                text: 'USD'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    color: 'white'
                },
                enableMouseTracking: true,
                color: {
                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                    stops: [
                        [0, '#fe724f'], // start
                        [0.5, '#ff9762'], // middle
                        [1, '#feb175'] // end
                    ]
                },
            }
        },
        series: [{
            name: 'Amount',
            data: [130.0, 189.9, 250.5, 330.0, 375.5, 325.3, 250.2],
        }]
    });
}