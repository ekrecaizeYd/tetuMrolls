function copy_default(btn) {
  var text_id = btn.name.substr(13, 6)
  document.getElementById(text_id).value = "Copy"
  document.getElementById(text_id).style.width = "35px"
}
function copy(btn){
  var text_id = btn.name.substr(0, 12)
  var text = document.getElementById(text_id)
  text.select()
  navigator.clipboard.writeText(text.value)
}
function copy_name(btn){
  var text_id = btn.name.substr(0, 12)
  var text = document.getElementById(text_id)
  text.select()
  navigator.clipboard.writeText(text.name)
}
function copied(btn) {
  var text_id = btn.name.substr(13, 6)
  document.getElementById(text_id).value = "Copied"
  document.getElementById(text_id).style.width = "45px"
}
function copy_directly(btn) {
  navigator.clipboard.writeText(btn.value)
}
function textbox_underline(box) {
  document.getElementById(box.id).style.borderColor = "rgb( 52,203,203)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(174,234,234)"
}
    
/* ITEMS */

function item1() {
  mp = document.getElementById("item1_mp").value
  mb = document.getElementById("item1_mb").value
  mball = parseFloat(document.getElementById("item1_mball").value)

  g = 10
  sqrt2 = Math.sqrt(2)

  wp = mp*g
  wb = mb*g
  wball = mball*g

  T = (5*wb + 4*wp)/(4 + 5*sqrt2)
  n = wp - T

  x = (sqrt2*wp - wb)/wball

  n = Math.round(n/10)*10
  x = Math.ceil(x)
  
  document.getElementById("item1_part_b").value = n
  document.getElementById("item1_part_c").value = x
}

function item4() {
  ms = parseFloat(document.getElementById("item4_ms").value)
  mla = parseFloat(document.getElementById("item4_mla").value)
  cgla = parseFloat(document.getElementById("item4_cgla").value)
  cgla = cgla/100

  g = 9.8
  wla = mla*g
  ws = ms*g

  Fm = (wla*cgla + ws*0.3)/0.025

  if (Fm < 1000) {
    Fm = Math.round(Fm/10)*10
  }
  else {
    Fm = Math.round(Fm/100)*100
  }
  
  document.getElementById("item4_part_a").value = Fm
}

function item5() {
  mp = parseFloat(document.getElementById("item5_mp").value)
  mb = parseFloat(document.getElementById("item5_mb").value)

  g = 9.8
  wp = mp*g
  wb = mb*g

  FA = wp*3
  FB = wp*4

  FA_2 = wb + wp*3
  FB_2 = wb*2 + wp*4

  FA = Math.round(FA/100)*100
  FB = Math.round(FB/100)*100
  FA_2 = Math.round(FA_2/100)*100
  FB_2 = Math.round(FB_2/100)*100
  
  document.getElementById("item5_part_a").value = FA
  document.getElementById("item5_part_c").value = FB
  document.getElementById("item5_part_e").value = FA_2
  document.getElementById("item5_part_g").value = FB_2
}

function item6() {
  pi = Math.PI

  tht = parseFloat(document.getElementById("item6_tht").value)
  m = parseFloat(document.getElementById("item6_m").value)

  FL = m*9.8/Math.sin(tht*pi/180)
  FR = FL*Math.cos(tht*pi/180)

  FL = Math.round(FL/100)*100
  FR = Math.round(FR/100)*100
  
  document.getElementById("item6_part_a").value = FR
  document.getElementById("item6_part_b").value = FL
}

function item7() {
  mT = parseFloat(document.getElementById("item7_mT").value)
  mP = parseFloat(document.getElementById("item7_mP").value)

  wT = mT*9.8
  wP = mP*9.8

  d = 0.5 - (0.6*wT/wP)
  d = d.toFixed(2)
  
  document.getElementById("item7_part_a").value = d
}

function item8() {
  rs = parseFloat(document.getElementById("item8_rs").value)
  rb = parseFloat(document.getElementById("item8_rb").value)

  Fmin = rs*9/79
  Fmax = rb*9/79

  Fmin = Math.round(Fmin/10)*10
  Fmax = Math.round(Fmax/10)*10
  
  document.getElementById("item8_part_a").value = Fmin + " ," + Fmax
}

function item9() {
  pi = Math.PI

  l = parseFloat(document.getElementById("item9_l").value)
  m = parseFloat(document.getElementById("item9_m").value)
  w = parseFloat(document.getElementById("item9_w").value)
  t = parseFloat(document.getElementById("item9_t").value)

  sin53_37 = Math.sin(16*pi/180)

  Fx = t*0.6
  Fy = m*9.8 + w - t*0.8

  x = (t*l*sin53_37 - m*9.8*0.5*l*0.8)/(w*0.8)

  if (Fy < -10) {
    Fy = Fy.toFixed(0)
  }
  else {
    Fy = Fy.toFixed(1)
  }
  
  Fx = Fx.toFixed(0)
  x = x.toFixed(1)
  
  document.getElementById("item9_part_b").value = Fy + " N"
  document.getElementById("item9_part_b").name = Fy
  document.getElementById("item9_part_c").value = Fx + " N"
  document.getElementById("item9_part_c").name = Fx
  document.getElementById("item9_part_d").value = x + " m"
  document.getElementById("item9_part_d").name = x
}

function item10() {
  m = parseFloat(document.getElementById("itema_m").value)

  w = m*9.8

  Fup = 8.5*w
  Fdown = Fup - w

  t = Fup*0.02

  Fup = Math.round(Fup/10)*10
  Fdown = Math.round(Fdown/10)*10
  
  document.getElementById("itema_part_b").value = Fup
  document.getElementById("itema_part_c").value = Fdown
  document.getElementById("itema_part_d").value = w.toFixed(0)
  document.getElementById("itema_part_e").value = t.toFixed(0)
}

function item11() {
  pi = Math.PI

  m = parseFloat(document.getElementById("itemb_m").value)
  thtA = parseFloat(document.getElementById("itemb_thtA").value)
  thtB = parseFloat(document.getElementById("itemb_thtB").value)

  sinA = Math.sin(thtA*pi/180)
  sinB = Math.sin(thtB*pi/180)
  sinA_B = Math.sin((thtB - thtA)*pi/180)

  Fa = m*sinB*9.8/sinA_B
  Fb = Fa*sinA/sinB

  Fa = Math.round(Fa/10)*10
  Fb = Math.round(Fb/10)*10
  
  document.getElementById("itemb_part_a").value = Fa
  document.getElementById("itemb_part_b").value = Fb
}