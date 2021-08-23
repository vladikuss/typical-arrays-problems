exports.min = function min (array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        return array.reduce(function (p, v) {
            return ( p < v ? p : v );
          });
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        return array.reduce(function (p, v) {
            return ( p > v ? p : v );
          });
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
        return array.reduce((a, b) => (a + b)) / array.length;
    } else {
        return 0;
    }
}
