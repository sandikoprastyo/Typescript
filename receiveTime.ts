const receiveTime = (val) => {
  let [time, setTime] = val.split(' ');
  let [hours, minutes, second] = time.split(':');

  if(hours === '12') {
    hours = '00';
  }

  if (setTime === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  console.log(`${hours}:${minutes}:${second}`)
};
receiveTime('5:00:13 PM');
