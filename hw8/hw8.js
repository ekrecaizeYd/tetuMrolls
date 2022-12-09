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
  document.getElementById(box.id).style.borderColor = "rgb(238,103, 92)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(250,210,207)"
}

/* ITEMS */

function item2() {

  mc = document.getElementById("item2_mc").value
  mb = document.getElementById("item2_mb").value
  wm = document.getElementById("item2_wm").value
  ww = document.getElementById("item2_ww").value

  c_b = Math.sqrt(mc/mb)
  c_b = c_b.toFixed(3)

  m_w = (ww/wm).toFixed(3)

  document.getElementById("item2_part_a").value = c_b
  document.getElementById("item2_part_b").value = m_w
}

function item3() {

  ma = document.getElementById("item3_ma").value
  mb = document.getElementById("item3_mb").value
  va = document.getElementById("item3_va").value
  vb = document.getElementById("item3_vb").value

  va_i = (mb*vb - ma*va)/ma
  D_K = (ma*va**2 + mb*vb**2 - ma*va_i**2)*0.5

  document.getElementById("item3_part_a").value = va_i.toFixed(3)
  document.getElementById("item3_part_b").value = D_K.toFixed(4)
}

function item4() {

  v = document.getElementById("item4_v").value
  v = v*(5/18)
  w = document.getElementById("item4_m").value
  h = document.getElementById("item4_h").value
  rho = document.getElementById("item4_rho").value
  
  F = w*h*rho*v**2
  F = Math.round(F/10**5)*10**5

  document.getElementById("item4_part_a").value = F
}

function item5() {

  vi = document.getElementById("item5_vi").value
  vf = document.getElementById("item5_vf").value
  ma = document.getElementById("item5_ma").value
  mn = document.getElementById("item5_mn").value
  
  va = (mn*vi - (mn - ma)*vf)/ma
  va = Math.round(va/100)*100

  document.getElementById("item5_part_a").value = va + " m/s"
  document.getElementById("item5_part_a").name = va
}

function item6() {

  mA = document.getElementById("item6_ma").value
  VAx = document.getElementById("item6_vai").value
  VAy = document.getElementById("item6_vaj").value
  VAz = document.getElementById("item6_vak").value
  mB = document.getElementById("item6_mb").value
  VApx = document.getElementById("item6_vbi").value
  VApy = document.getElementById("item6_vbj").value
  VApz = document.getElementById("item6_vbk").value
  
  VBx = (mA*(VAx - VApx)/mB).toFixed(1)
  VBy = (mA*VAy/mB).toFixed(1)
  VBz = (mA*(VAz - VApz)/mB).toFixed(1)

  document.getElementById("item6_part_a").value = VBx + ", " + VBy + ", " + VBz
}

function item7() {
  pi = Math.PI

  m = document.getElementById("item7_m").value
  v = document.getElementById("item7_v").value
  tht = document.getElementById("item7_tht").value
  
  vx = v*Math.cos(tht*pi/180)
  v3 = Math.sqrt(5*vx**2)
  vd = Math.atan(0.5)*180/pi
  vk = m*v3**2/6 - m*vx**2/6
  
  v3 = v3.toFixed(1)
  vd = vd.toFixed(1)
  vk = Math.round(vk/1000)*1000

  document.getElementById("item7_part_a").value = v3
  document.getElementById("item7_part_b").value = vd
  document.getElementById("item7_part_c").value = vk
}

function item8() {
  m = document.getElementById("item8_m").value
  h = document.getElementById("item8_h").value
  bmb = document.getElementById("item8_bmb").value
  bmb = bmb/100
  bmc = document.getElementById("item8_bmc").value
  bmc = bmc/100
  
  v = 2*9.8*h

  J = m*Math.sqrt(v)
  J = Math.round(J/10)*10
  
  ab = v/(2*bmb)
  F = m*(ab + 9.8)
  F = Math.round(F/10**4)*10**4

  ac = v/(2*bmc)
  F2 = m*(ac + 9.8)
  F2 = Math.round(F2/100)*100 

  document.getElementById("item8_part_a").value = J
  document.getElementById("item8_part_b").value = F
  document.getElementById("item8_part_c").value = F2
}

function item9() {
  k = document.getElementById("item9_k").value

  m1 = 3
  m2 = 4.5
  vi = 8

  v = m1*vi/(m1 + m2)

  x = Math.sqrt((m1*vi**2 - (m1 + m2)*v**2)/k)
  x = x.toFixed(2)

  v1 = vi*(m1 - m2)/(m1 + m2)
  v2 = vi + v1

  document.getElementById("item9_part_a").value = x
  document.getElementById("item9_part_b").value = v1 + ", " + v2
}

function item11() {
  pi = Math.PI

  vn = document.getElementById("itemb_vn").value

  tht = Math.atan(4)*180/pi
  sin_tht = Math.sin(tht*pi/180)

  vnp = vn/(sin_tht + Math.cos(tht*pi/180))
  vhp = vnp*sin_tht/(2*Math.sqrt(2))

  vnp = Math.round(vnp/10**4)*10**4
  vhp = Math.round(vhp/10**4)*10**4

  document.getElementById("itemb_part_b").value = vnp + " ," + vhp
}

function item12() {
  ma = parseInt(document.getElementById("itemc_ma").value)
  mb = parseInt(document.getElementById("itemc_mb").value)
  vai = document.getElementById("itemc_vai").value
  vaj = document.getElementById("itemc_vaj").value
  vbi = document.getElementById("itemc_vbi").value
  vbj = document.getElementById("itemc_vbj").value

  vi = (ma*vai + mb*vbi)/(ma + mb)
  vj = (ma*vaj + mb*vbj)/(ma + mb)

  vi = vi.toFixed(1)
  vj = vj.toFixed(1)

  document.getElementById("itemc_part_a").value = vi + " ," + vj
}

function item13() {
  m1 = document.getElementById("itemd_m1").value
  m1 = m1/1000
  m2 = 1.4
  v1 = 310

  v = m1*v1/(m1 + m2)

  h = v**2/19.6
  h = h.toFixed(2)

  document.getElementById("itemd_part_a").value = h
}

function item14() {
  pi = Math.PI
  
  m = parseFloat(document.getElementById("iteme_m").value)
  M = parseFloat(document.getElementById("iteme_M").value)

  h = 3.6

  vm = Math.sqrt(19.6*h)*(m - M)/(m + M)
  vM = m*(Math.sqrt(19.6*h) - vm)/M
  d = vm**2/(19.6*Math.sin(pi/6))

  vm = Math.abs(vm.toFixed(2))
  vM = Math.abs(vM.toFixed(2))
  d = Math.abs(d.toFixed(2))

  document.getElementById("iteme_part_a").value = vm
  document.getElementById("iteme_part_b").value = vM
  document.getElementById("iteme_part_c").value = d
}