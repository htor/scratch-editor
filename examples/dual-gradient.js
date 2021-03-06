// draw two grascale gradients

title('dual gradient')

let psize = 20
bground('black')
for (let x = 0; x < w; x += psize) {
  for (let y = 0; y < h / 2; y += psize) {
    let c = `rgba(255, 255, 255, ` +
       map(x, 0, w, 1, 0) + `)`
    fstyle(c)
    frect(x, y, psize, psize)
  }
}

for (let x = 0; x < w; x += psize) {
  for (let y = h / 2; y < h; y += psize) {
    let c = `rgba(255, 255, 255, ` +
       map(x, 0, w, 0, 1) + `)`
    fstyle(c)
    frect(x, y, psize, psize)
  }
}
