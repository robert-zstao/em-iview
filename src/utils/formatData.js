export function formatDates (date) {
  if (date == null || date == '') {
    return ''
  }
  const y = date.substring(0, 4)
  const m = date.substring(4, 6)
  const d = date.substring(6, 8)
  const h = date.substring(8, 10)
  const mm = date.substring(10, 12)
  const s = date.substring(12)
  const time = y.concat('-').concat(m).concat('-').concat(d).concat(' ')
    .concat(h).concat(':').concat(mm).concat(':').concat(s)
  return time
}

/***
 * 格式化时间戳
 * @param date
 * @returns {*}
 */
export function formatTimeStamp (date) {
  if (date == null) {
    return null
  }
  var date = new Date(date)
  var YY = date.getFullYear() + '-'
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate())
  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return YY + MM + DD + ' ' + hh + mm + ss
}
