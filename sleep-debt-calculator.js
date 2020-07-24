const sleepHours = day => {
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
  
  console.log(sleepHours('monday'));
  console.log(sleepHours('tuesday'));
  console.log(sleepHours('fork'));
  
}