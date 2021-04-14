const msToTime = (duration, option) => {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? hours : hours;
  minutes = (minutes < 10) ? minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  if (option) {
    return minutes + ':' + seconds
  } else {
    return hours + " hr " + minutes + " min" ;
  }
}

export default msToTime
