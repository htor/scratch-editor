// color smudging, based on floating-circles.js
push()
let t=ms()*.000499,c,c2,g
treset(1)
scale(.5,.5)
tslate(w+cos(t*2)*50,h/2)
rotate(cos(t)*120)
c=rgba(254,abs(sin(t)*152),15,1)
fstyle(c)
fellips(sin(t)*50,cos(t/4)*220,
    abs(sin(t)*200),abs(sin(t/10)*200))

rotate(sin(t)*33)
c2=rgba(abs(cos(t)*225),abs(sin(t)*144),140,1)
fstyle(c2)
fellips(cos(t)*210,sin(t/2)*220,
    abs(cos(t)*200),abs(cos(t/10)*200))
freset(0)
pop()