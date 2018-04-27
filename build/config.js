/*global require*/
requirejs.config({
    baseUrl: '.',
    paths: {
        'domReady': './lib/requirejs-2.1.9/domReady',
        'cesiumLib': './lib/cesium/Cesium',
        'echarts-gl': './lib/echarts/echarts-gl',
        'echarts': './lib/echarts/echarts',
        'jquery': './lib/jquery-2.1.1/jquery'
    },
    shim: {
        'echarts-gl': {
            deps: ['echarts']
        }
    }
});
require(['src/index'], function() {
    console.log('app is loading');
});