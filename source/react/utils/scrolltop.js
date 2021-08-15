function scrollTo (element, to, duration) {
  if (duration <= 0) return
  var difference = to - element.scrollTop
  var perTick = difference / duration * 10

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}

export default scrollTo