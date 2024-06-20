let options = {

    series: [
        {
            name: "Общая доходность",
            data: [32, 38, 28, 27, 26, 27, 26, 29, 25, 25, 25.10]
        },
        {
            name: "Средняя доходность инвесторов",
            data: [16, 19, 14, 13, 13, 13, 13, 14, 12, 12, 12]
        }
        
    ],
    chart: {
        height: 350,
        type: 'line',
        dropShadow: {

            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 90,
            opacity: 0.2
        },
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
        
    },
    colors: ['#0000DE', '#355DFB'],
    dataLabels: {
        enabled: true,
    },
   
    stroke: {
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 3,
        dashArray: 0
    },

    grid: {
        borderColor: '#C6D9E9',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
        column: {
            colors: undefined,
            opacity: 0.5
        },
      
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ['Сен', 'Окт', 'Ноя', 'Дек', 'Янв', 'Фев', 'Марt', 'Апр', 'Май', "Июнь", 'Июль'],

    },

    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    }
};

let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();