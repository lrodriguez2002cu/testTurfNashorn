
load("http://api.tiles.mapbox.com/mapbox.js/plugins/turf/v3.0.11/turf.min.js");

var arraysTest = function () {


    var arr = ['a b c', 'd e f'];
    print('length: ' + arr.length);

    for (var el in arr) {
        print(arr[el]);
    }

    print("end array printed foreach");

    for (var el = 0; el< arr.length; el++) {
        print("at index: "+ el + "-> " + arr[el]);
    }

    print("end array printed for ");


    return arr;
}


var centerFn = function () {

    var features = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.522259, 35.4691]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.502754, 35.463455]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.508269, 35.463245]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.516809, 35.465779]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.515372, 35.467072]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.509363, 35.463053]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.511123, 35.466601]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.518547, 35.469327]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.519706, 35.469659]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.517839, 35.466998]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.508678, 35.464942]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Point",
                    "coordinates": [-97.514914, 35.463453]
                }
            }
        ]
    };

    var centerPt = turf.center(features);
    centerPt.properties['marker-size'] = 'large';
    centerPt.properties['marker-color'] = '#000';

    var resultFeatures = features.features.concat(centerPt);
    var result = {
        "type": "FeatureCollection",
        "features": resultFeatures
    };

    print("centerFn: " + JSON.stringify(result));
    return result;
}



var alongFn = function () {
    var line = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [-77.031669, 38.878605],
                [-77.029609, 38.881946],
                [-77.020339, 38.884084],
                [-77.025661, 38.885821],
                [-77.021884, 38.889563],
                [-77.019824, 38.892368]
            ]
        }
    };

    var along = turf.along(line, 1, 'miles');

    var resultAlong = {
        "type": "FeatureCollection",
        "features": [line, along]
    };

    print('resultAlong: ' + JSON.stringify(resultAlong));

    return resultAlong;
}

var areaFn =  function(){
    var polygons = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [-67.031021, 10.458102],
                        [-67.031021, 10.53372],
                        [-66.929397, 10.53372],
                        [-66.929397, 10.458102],
                        [-67.031021, 10.458102]
                    ]]
                }
            }, {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[
                        [-66.919784, 10.397325],
                        [-66.919784, 10.513467],
                        [-66.805114, 10.513467],
                        [-66.805114, 10.397325],
                        [-66.919784, 10.397325]
                    ]]
                }
            }
        ]
    };

    var area = turf.area(polygons);

    print("area: " +  JSON.stringify(area));

    return area;
}

var simplifyFn = function () {
    var feature = {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-70.603637, -33.399918],
                [-70.614624, -33.395332],
                [-70.639343, -33.392466],
                [-70.659942, -33.394759],
                [-70.683975, -33.404504],
                [-70.697021, -33.419406],
                [-70.701141, -33.434306],
                [-70.700454, -33.446339],
                [-70.694274, -33.458369],
                [-70.682601, -33.465816],
                [-70.668869, -33.472117],
                [-70.646209, -33.473835],
                [-70.624923, -33.472117],
                [-70.609817, -33.468107],
                [-70.595397, -33.458369],
                [-70.587158, -33.442901],
                [-70.587158, -33.426283],
                [-70.590591, -33.414248],
                [-70.594711, -33.406224],
                [-70.603637, -33.399918]
            ]]
        }
    };

    var tolerance = 0.01;

    var simplified = turf.simplify(
        feature, tolerance, false);

    print("simplified: " + JSON.stringify(simplified));

    return simplified;
}