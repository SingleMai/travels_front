export const getDateTime = (date) => {
  const origDate = new Date(date)
  const resultDate = `${origDate.getFullYear()}-${origDate.getMonth() + 1}-${origDate.getDate()}`
  return `${resultDate} ${getTime(date)}`
}

export const getTime = (date) => {
  const origDate = new Date(date)
  return `${(origDate.getHours() < 10 ? '0' : '') + origDate.getHours()}:${(origDate.getMinutes() < 10 ? '0' : '') + origDate.getMinutes()}:${(origDate.getSeconds() < 10 ? '0' : '') + origDate.getSeconds()}`
}

export const getDate = (date) => {
  const origDate = new Date(date)
  const resultDate = `${origDate.getFullYear()}-${origDate.getMonth() + 1}-${origDate.getDate()}`
  return resultDate
}
