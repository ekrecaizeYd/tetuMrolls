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
  document.getElementById(box.id).style.borderColor = "rgb(251, 96,127)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(255,192,203)"
}
    
/* ITEMS */

function item1() {
  w = document.getElementById("item1_w").value
  
  w2 = 3*w/5
  w2 = w2.toFixed(1)
  
  document.getElementById("item1_part_a").value = w2
}

function item3() {
  m = parseFloat(document.getElementById("item3_m").value)
  d = parseFloat(document.getElementById("item3_d").value)
  r = d/2
  i = parseFloat(document.getElementById("item3_i").value)
  v = parseFloat(document.getElementById("item3_v").value)

  a = -1*m*v*r
  b = m*r**2
  c = b + i

  w = Math.abs(a/c)
  w = w.toFixed(2)
  
  document.getElementById("item3_part_a").value = w
}

function item4() {
  fi = parseFloat(document.getElementById("item4_fi").value)
  fi = fi*1000
  fj = parseFloat(document.getElementById("item4_fj").value)
  fj = fj*1000

  Ti_6 = fi*6
  Ti_8 = fi*8
  Tj_6 = fj*6

  T = Math.sqrt(Ti_6**2 + Ti_8**2 + Tj_6**2)
  T = Math.round(T/1000)*1000
  
  document.getElementById("item4_part_a").value = T
}

function item5() {
  l = parseFloat(document.getElementById("item5_l").value)
  ms = parseFloat(document.getElementById("item5_ms").value)
  ms = ms/1000
  mb = parseFloat(document.getElementById("item5_mb").value)
  mb = mb/1000
  vb = parseFloat(document.getElementById("item5_vb").value)
  vpb = parseFloat(document.getElementById("item5_vpb").value)

  w = 3*mb*(vb - vpb)/(ms*l)
  w = w.toFixed(1)
  
  document.getElementById("item5_part_a").value = w
}

function item6() {
  mb = parseFloat(document.getElementById("item6_mb").value)
  l = parseFloat(document.getElementById("item6_l").value)
  vb = parseFloat(document.getElementById("item6_vb").value)
  mm = parseFloat(document.getElementById("item6_mm").value)

  v = mb*vb/(mb + mm),
  v = v.toFixed(0)

  r = 0.5*mm*l/(mb + mm)
  r_2 = 0.5*l - r

  w = mb*vb*r/(mb*l**2/12 + mb*r**2 + mm*r_2**2)
  w = w.toFixed(1)
  
  document.getElementById("item6_part_a").value = v
  document.getElementById("item6_part_b").value = w
}

function item7() {
  pi = Math.PI

  r = parseFloat(document.getElementById("item7_r").value)
  M = parseFloat(document.getElementById("item7_M").value)
  F = parseFloat(document.getElementById("item7_F").value)
  Ang = parseFloat(document.getElementById("item7_Ang").value)

  t = 2*M*r*(Ang*pi/180)*(8*pi/86400)/(5*F)
  dt = t/3600
  dt = dt.toFixed(1)
  
  document.getElementById("item7_part_a").value = dt
}

function item8() {
  pi = Math.PI

  r = parseFloat(document.getElementById("item8_r").value)
  v1 = parseFloat(document.getElementById("item8_v1").value)
  v2 = parseFloat(document.getElementById("item8_v2").value)
  m = parseFloat(document.getElementById("item8_m").value)
  t = parseFloat(document.getElementById("item8_t").value)

  l = m*r*(v1 - v2)

  p = l*2*pi/t

  if (l > 1000) {
    l = Math.round(l/100)*100
  }
  else {
    l = Math.round(l/10)*10
  }
  
  if (p > 1000) {
    p = Math.round(p/100)*100
  }
  else {
    p = Math.round(p/10)*10
  }
  
  document.getElementById("item8_part_a").value = l
  document.getElementById("item8_part_b").value = l
  document.getElementById("item8_part_c").value = p
}

function item9() {
  pi = Math.PI

  l = parseFloat(document.getElementById("item9_l").value)
  g = 9.8

  v0 = Math.sqrt(3*g*l*(1 - Math.cos(0*pi/180)))
  v1 = Math.sqrt(3*g*l*(1 - Math.cos(10*pi/180)))
  v2 = Math.sqrt(3*g*l*(1 - Math.cos(20*pi/180)))
  v3 = Math.sqrt(3*g*l*(1 - Math.cos(30*pi/180)))
  v4 = Math.sqrt(3*g*l*(1 - Math.cos(40*pi/180)))
  v5 = Math.sqrt(3*g*l*(1 - Math.cos(50*pi/180)))
  v6 = Math.sqrt(3*g*l*(1 - Math.cos(60*pi/180)))
  v7 = Math.sqrt(3*g*l*(1 - Math.cos(70*pi/180)))
  v8 = Math.sqrt(3*g*l*(1 - Math.cos(80*pi/180)))
  v9 = Math.sqrt(3*g*l*(1 - Math.cos(90*pi/180)))

  v1 = v1.toFixed(1)
  v2 = v2.toFixed(1)
  v3 = v3.toFixed(1)
  v4 = v4.toFixed(1)
  v5 = v5.toFixed(1)
  v6 = v6.toFixed(1)
  v7 = v7.toFixed(1)
  v8 = v8.toFixed(1)
  v9 = v9.toFixed(1)
  
  document.getElementById("item9_part_0").value = v0
  document.getElementById("item9_part_1").value = v1
  document.getElementById("item9_part_2").value = v2
  document.getElementById("item9_part_3").value = v3
  document.getElementById("item9_part_4").value = v4
  document.getElementById("item9_part_5").value = v5
  document.getElementById("item9_part_6").value = v6
  document.getElementById("item9_part_7").value = v7
  document.getElementById("item9_part_8").value = v8
  document.getElementById("item9_part_9").value = v9
}
