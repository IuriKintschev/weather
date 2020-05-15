//@flow
/**
 * Get name Lottie file by request
 */

export function getFileLottieByStatusApi(status: String): String {
  const paramTrim = status.trim();
  switch (paramTrim) {
    case 'storm':
      return require('../assets/lottie/storm.json');
    case 'snow':
      return require('../assets/lottie/snow.json');
    case 'hail':
      return require('../assets/lottie/hail.json');
    case 'rain':
      return require('../assets/lottie/rain.json');
    case 'fog':
      return require('../assets/lottie/fog.json');
    case 'clear_day':
      return require('../assets/lottie/clear_day.json');
    case 'clear_night':
      return require('../assets/lottie/clear_night.json');
    case 'cloud':
      return require('../assets/lottie/cloud.json');
    case 'cloudly_day':
      return require('../assets/lottie/cloudly_day.json');
    case 'cloudly_night':
      return require('../assets/lottie/cloudly_night.json');
    case 'none_day':
      return require('../assets/lottie/clear_day.json');
    case 'none_night':
      return require('../assets/lottie/clear_night.json');
  }
}
