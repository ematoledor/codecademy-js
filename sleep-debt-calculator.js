const getSleepHours = day => {
  if(day === 'monday') {
    return 8;
  } else if(day === 'tuesday') {
    return 8;
  } else if(day === 'wednesday') {
    return 8;
  } else if(day === 'thusrday') {
    return 8;
  } else if(day === 'friday') {
    return 8;
  } else if(day === 'saturday') {
    return 8;
  } else if(day === 'sunday') {
    return 8;
  } else {
    return 'Error!'
  }
}

const getActualSleepHours = () => {
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
}

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
}