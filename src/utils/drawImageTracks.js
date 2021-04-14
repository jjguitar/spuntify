const getColorPlaylist = (ctx) => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const quality = 20
  let red = 0
  let blue = 0
  let green = 0
  let count = 0
  for (let i = 0; i < canvas.width * canvas.height; i = i + quality) {
    const offset = i + 4
    const alpha = imgData.data[offset + 3]
    if (alpha > 0) {
      ++count
      red += imgData.data[offset]
      green += imgData.data[offset + 1]
      blue += imgData.data[offset + 2]
    }
  }
  red= ~~(red/count);
  green = ~~(green/count);
  blue = ~~(blue/count);
  return [red, green, blue]
}

const drawImage = (source) => {
  const canvas = document.getElementById('canvas')
  const main = document.getElementById('main-container__playlist')
  const header = document.getElementById('header')
  const ctx = canvas.getContext('2d')
  const img = new Image
  img.setAttribute('crossOrigin', 'anonymous')
  img.setAttribute('src', source)
  img.addEventListener('load', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    let color = getColorPlaylist(ctx)
    main.style.background = `linear-gradient(180deg, rgba(${color[0]},${color[1]},${color[2]},1) 0%, rgba(0,0,0,1) 100%)`
    header.style.background = `rgb(${color[0]},${color[1]},${color[2]})`
  })
}

export default drawImage

