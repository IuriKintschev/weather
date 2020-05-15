//@flow

/**
 * Date formatted to Screen
 */

export function dateToScreen(date: String): String {
  const arrDate = date.split('-');

  return `${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`;
}
