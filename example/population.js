define([
    '../src/CompositeView',
    'jquery',
    'cesiumLib'
], function(
    CompositeView
) {
    'use strict'

    $.getJSON('../data/population.json', function(data) {
        data = data.filter(function(dataItem) {
            return dataItem[2] > 0;
        }).map(function(dataItem) {
            return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
        });
        var option = {
            backgroundColor: '',
            globe: {
                show: false,
                shading: 'lambert',
                light: {
                    main: {
                        intensity: 2
                    }
                },
                viewControl: {
                    autoRotate: false
                }
            },
            visualMap: {
                max: 40,
                calculable: true,
                realtime: false,
                inRange: {
                    colorLightness: [0.2, 0.9]
                },
                textStyle: {
                    color: '#fff'
                },
                controller: {
                    inRange: {
                        color: 'orange'
                    }
                },
                outOfRange: {
                    colorAlpha: 0
                }
            },
            composite3D: {
                globeRadius: 63,
                show: false,
                shading: 'lambert',
                light: {
                    main: {
                        intensity: 2
                    }
                },
                viewControl: {
                    autoRotate: false,
                    targetCoord: [116.46, 39.92],
                    distance: 63 * 2,
                    maxDistance: 63 * 2
                }
            },
            series: [{
                type: 'bar3D',
                coordinateSystem: 'composite3D',
                data: data,
                barSize: 0.6,
                minHeight: 0.2,
                silent: true,
                itemStyle: {
                    color: 'orange'
                }
            }]
        };
        var view = new CompositeView('container', option);

    });

});