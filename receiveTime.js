var receiveTime = function (val) {
    var _a = val.split(' '), time = _a[0], setTime = _a[1];
    var _b = time.split(':'), hours = _b[0], minutes = _b[1], second = _b[2];
    if (hours === '12') {
        hours = '00';
    }
    if (setTime === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    console.log("".concat(hours, ":").concat(minutes, ":").concat(second));
};
receiveTime('5:00:13 PM');
