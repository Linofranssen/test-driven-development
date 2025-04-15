export function formatDuration(seconds: number): string {

  if (seconds === 0) {
      return '0s';
  }

  if (seconds < 0) {
    throw new Error('Sekundenanzahl muss nicht negativ sein.');
  }

  let roundedSeconds = Math.round(seconds);
  let result: string = '';

  const hours: number = Math.floor(roundedSeconds / 3600);
  if(hours>0){
      result = result + hours + 'h';
      roundedSeconds = roundedSeconds - (hours*3600);
  }

  const minutes: number = Math.floor(roundedSeconds / 60);
  if(minutes>0){
      result = result + minutes + 'm';
      roundedSeconds = roundedSeconds - (minutes*60);
  }

  if (roundedSeconds>0 || result.length ===0){
      result = result+ roundedSeconds +'s';
  }

  return result;
}
