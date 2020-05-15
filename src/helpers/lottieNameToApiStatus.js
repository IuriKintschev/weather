//@flow
/**
 * Get name Lottie file by request
 */

export function getFileLottieByStatusApi(status: String): String {
  switch (status) {
    case 'none_day':
      return 'clear_day';

    case 'none_night':
      return 'clear_night';

    default:
      return status;
  }
}
