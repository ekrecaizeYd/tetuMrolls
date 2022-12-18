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
  document.getElementById(box.id).style.borderColor = "rgb(170, 70,230)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(225,185,245)"
}
  
/* ITEMS */
  
function item5() {
  pi = Math.PI
  
  w1 = document.getElementById("item5_w1").value
  w2 = document.getElementById("item5_w2").value
  
  w = Math.sqrt(w1**2+w2**2)
  w = w.toFixed(1)

  theta = Math.atan(w2/w1)*180/pi
  theta = theta.toFixed(1)

  alpha = w1*w2
  alpha = Math.round(alpha/10)*10
  
  document.getElementById("item5_part_c").value = w + " rad/s"
  document.getElementById("item5_part_c").name = w

  document.getElementById("item5_part_d").value = theta + " °"
  document.getElementById("item5_part_d").name = theta

  document.getElementById("item5_part_e").value = alpha + " rad/s²"
  document.getElementById("item5_part_e").name = alpha
}

function item6() {
  a = document.getElementById("item6_a").value
  b = document.getElementById("item6_b").value
  c = document.getElementById("item6_c").value

  w_3 = a - 6*b + 108*c
  alpha_3 = -2*b + 108*c

  th_3 = 3*a - 9*b + 81*c
  th_2 = 2*a - 4*b + 16*c

  w_2 = a - 4*b + 32*c

  w_avg = th_3 - th_2
  alpha_avg = w_3 - w_2

  w_3 = w_3.toFixed(0)
  alpha_3 = Math.round(alpha_3/10)*10
  w_avg = w_avg.toFixed(0)
  alpha_avg = alpha_avg.toFixed(0)
  
  document.getElementById("item6_part_c").value = w_3
  document.getElementById("item6_part_d").value = alpha_3
  document.getElementById("item6_part_e").value = w_avg
  document.getElementById("item6_part_f").value = alpha_avg
}

function item7() {
  dia = document.getElementById("item7_dia").value
  fi = document.getElementById("item7_fi").value
  fj = document.getElementById("item7_fj").value

  r = dia/200

  t = fj*r

  t = t.toFixed(2)
  
  document.getElementById("item7_part_a").value = t
}

function item8() {
  m = document.getElementById("item8_m").value
  a = document.getElementById("item8_a").value

  r_1 = 0.31
  r_2 = 0.025

  t = m*r_1*a

  f = t/r_2

  t = t.toFixed(1)
  f = Math.round(f/10)*10
  
  document.getElementById("item8_part_a").value = t
  document.getElementById("item8_part_b").value = f
}

function item9() {
  pi = Math.PI

  r = document.getElementById("item9_r").value
  a = document.getElementById("item9_a").value

  m1 = 8
  m2 = 10
  g = 9.8

  t1 = m1*g*Math.sin(32*pi/180) + m1*a

  t2 = m2*g*Math.sin(61*pi/180) - m2*a

  tork = (t2 - t1)*r

  I = tork*r/a

  t1 = t1.toFixed(0)
  t2 = t2.toFixed(0)
  tork = tork.toFixed(1)
  I = I.toFixed(2)
  
  document.getElementById("item9_part_d").value = t1
  document.getElementById("item9_part_e").value = t2
  document.getElementById("item9_part_f").value = tork
  document.getElementById("item9_part_g").value = I
}

function item10() {
  m1 = parseFloat(document.getElementById("itema_m1").value)
  m2 = parseFloat(document.getElementById("itema_m2").value)
  r = parseFloat(document.getElementById("itema_r").value)
  r = r/100
  mp = parseFloat(document.getElementById("itema_mp").value)
  v = parseFloat(document.getElementById("itema_v").value)
  t = parseFloat(document.getElementById("itema_t").value)

  g = 9.8

  a = g*(m1 - m2)/(m1 + m2 + 0.5*mp)

  a_2 = v/t

  tork = r*g*(m1 - m2) + (m1 + m2 + 0.5*mp)*a_2*r
  
  a = a.toFixed(1)
  tork = tork.toFixed(2)
  
  document.getElementById("itema_part_a").value = a
  document.getElementById("itema_part_b").value = tork
}

function item11() {
  mwh = parseFloat(document.getElementById("itemb_mwh").value)
  rwh = parseFloat(document.getElementById("itemb_rwh").value)
  rwh = rwh/100
  mwe = parseFloat(document.getElementById("itemb_mwe").value)
  rwe = parseFloat(document.getElementById("itemb_rwe").value)
  rwe = rwe/100

  x = mwe*rwe/(mwh + mwe)

  I = 0.5*mwh*rwh**2 + mwh*x**2 + mwe*(rwe - x)**2

  x = x.toFixed(3)*100
  I = I.toFixed(2)
  
  document.getElementById("itemb_part_a").value = x
  document.getElementById("itemb_part_b").value = I
}

function item12() {
  ma = parseFloat(document.getElementById("itemc_ma").value)
  mb = parseFloat(document.getElementById("itemc_mb").value)
  rp = parseFloat(document.getElementById("itemc_rp").value)
  mp = parseFloat(document.getElementById("itemc_mp").value)
  h = parseFloat(document.getElementById("itemc_h").value)

  g = 9.8

  v = Math.sqrt(2*(mb - ma)*g*h/(ma + mb + 0.5*mp))
  v = v.toFixed(1)
  
  document.getElementById("itemc_part_a").value = v
}