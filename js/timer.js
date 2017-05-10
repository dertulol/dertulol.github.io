var deadline = 'Apr 1, 2017';

function getTimeRemaining(endtime, dayCicle) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
        while (t <= 0) {
            t += 1000 * 60 * 60 * 24 * dayCicle;
        }
    }

    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime, day, dayCicle) {

    var clock = document.getElementById(id);
    var days = document.getElementById(day);

    function updateClock() {
        var t = getTimeRemaining(endtime, dayCicle);


        if (t.hours < 10) {
            t.hours = "0" + t.hours;
        }

        if (t.seconds < 10) {
            t.seconds = "0" + t.seconds;
        }

        if (t.minutes < 10) {
            t.minutes = "0" + t.minutes;
        }

        if (document.getElementById(day)) {
            if (t.days > 1 && t.days < 5) {
                days.innerHTML = t.days + ' дня - до окончания';
            } else if (t.days == 1) {
                days.innerHTML = t.days + ' день - до окончания';
            } else if (t.days == 0 || t.days > 4) {
                days.innerHTML = t.days + ' дней - до окончания';
            }
        }

        if (document.getElementById(id)) {
            clock.innerHTML = t.hours +
                ':' + t.minutes + ':' + t.seconds;
            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('time', deadline, 'day', 2);
initializeClock('time4', deadline, 'day4', 4);
