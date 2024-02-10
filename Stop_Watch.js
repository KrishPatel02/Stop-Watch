// Declaration

let hr = 0;

let min = 0;

let sec = 0;

let timer = false;

// Start Stop-Watch Function

starttime = () => {
  if (timer == false) {
    timer = true;

    stopwatch();
  }
};

// Stop Stop-Watch Function

stoptime = () => {
  timer = false;
};

//Reset Stop-Watch Function

resettime = () => {
  if (timer == true) {
    let c = confirm("This will Reset your Stop Watch Time");

    confirmfunction(c);
  } else if ((hr != 0) | (min != 0) | (sec != 0)) {
    let c = confirm("This will Reset your Stop Watch Time");

    confirmfunction(c);
  } else {
  }
};

confirmfunction = (c) => {
  if (c) {
    timer = false;

    hr = 0;

    min = 0;

    sec = 0;

    document.querySelector("#Hrid").innerHTML = "00";

    document.querySelector("#Minid").innerHTML = "00";

    document.querySelector("#Secid").innerHTML = "00";
  } else {
    if (timer == true) {
      timer = true;
    } else {
      timer = false;
    }
  }
};

stopwatch = () => {
  if (timer == true) {
    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;

      sec = 0;
    }

    if (min == 60) {
      hr = hr + 1;

      min = 0;

      sec = 0;
    }

    if (sec < 10) {
      document.querySelector("#Secid").innerHTML = "0" + sec;
    } else {
      document.querySelector("#Secid").innerHTML = sec;
    }

    if (min < 10) {
      document.querySelector("#Minid").innerHTML = "0" + min;
    } else {
      document.querySelector("#Minid").innerHTML = min;
    }

    if (hr < 10) {
      document.querySelector("#Hrid").innerHTML = "0" + hr;
    } else {
      document.querySelector("#Hrid").innerHTML = hr;
    }

    setTimeout("stopwatch()", 1000);
  }
};
