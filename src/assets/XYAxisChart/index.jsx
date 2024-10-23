import React from 'react';
import Chart from 'react-apexcharts';

const XYAxisBarChart = ({
    categories = ['Sep 23','Oct 23','Nov 23','Dec 23','Jan 24','Feb 24','Mar 24','Apr 24','May 24','Jun 24','Jul 24','Aug 24'], // Month names or other categories
    data = [28.5, 35.2, 49.1, 62.5, 58.3, 42.8, 55.4, 69.1, 75.8, 88.4, 91.3, 95.7], // Hardcoded random percentages in decimal
    barColor = '#79D89E',
    labelColor = '#ffffff',
    xAxisLabelColor = '#80838E',
    xAxisLabelFontSize = '10px',
    barHeight = '50%', // Adjusted to make the bars thicker
    dataLabelOffsetY = -20,
    showYAxisLabels = true, // Show Y-axis labels for better clarity
    yAxisCategories = ['0%', '20%', '40%', '60%', '80%', '100%'], // Percentage labels for Y-axis
    yAxisLabelColor = '#80838E',
    yAxisLabelFontSize = '14px',
    yAxisOffsetX = -10,
    chartPaddingLeft = 0,
    containerheight = '350px' // Default height
}) => {
    const options = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
            background: 'transparent',
            padding: {
                left: chartPaddingLeft,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: barHeight,
                borderRadius: 5, 
                dataLabels: {
                    position: 'top',
                },
            },
        },
        xaxis: {
            categories,
            labels: {
                style: {
                    colors: xAxisLabelColor,
                    fontSize: xAxisLabelFontSize,
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            min: 0,
            max: 100,
            labels: {
                show: showYAxisLabels,
                style: {
                    colors: yAxisLabelColor,
                    fontSize: yAxisLabelFontSize,
                },
                formatter: function (value) {
                    return `${value}%`; // Format Y-axis labels as percentages
                },
                offsetX: yAxisOffsetX,
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return `${val.toFixed(1)}%`; // Format floating-point values to one decimal place
            },
            style: {
                colors: [labelColor],
            },
            offsetY: dataLabelOffsetY,
        },
        grid: {
            show: true, // Enable grid
            borderColor: '#2E4C4E', // Color of the grid lines
            strokeDashArray: 15, // Dashed grid lines
            position: 'back',
            yaxis: {
                lines: {
                    show: true, // Show horizontal grid lines
                },
            },
            xaxis: {
                lines: {
                    show: false, // Hide vertical grid lines
                },
            },
        },
        colors: [barColor],
        theme: {
            mode: 'dark',
        },
    };

    const series = [
        {
            data,
        },
    ];

    if (!categories.length || !data.length) {
        return <p>Loading chart...</p>;
    }

    return (
        <Chart 
            options={options} 
            series={series} 
            type="bar" 
            height={containerheight} 
            key={JSON.stringify(series)} 
            width="200%" 
        />
    );
};

export default XYAxisBarChart;
