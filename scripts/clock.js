function showTime() {
    
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h === 0) {
        h = 12;
    } else if (h > 12) {
        h -= 12;
        session = "PM";
    }

    h = ( h < 10 ) ? "0" + h : h;
    m = ( m < 10 ) ? "0" + m : m;
    s = ( s < 10 ) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    const clockDisplay = document.getElementById("clockDisplay");
    clockDisplay.innerText = time;
    clockDisplay.textContent = time;
    
    setTimeout( showTime, 1000 );
}
showTime();