from solid import *
from solid.utils import *
from math import *
from numpy import *

mm = 1  # Gjøre om til millimeter (f.eks. er 5*mm = 5mm)
cm = 10  # Gjøre om til centimeter (f.eks. er 5*cm = 5cm)
deg2rad = pi / 180
rad2deg = 180 / pi
z = 0.01  # Fikse z-fighting
fn = 32  # Punkter i en sirkel (jo fler punkter jo finere, men krever mer CPU)

# Konstanter og funksjoner
w = 5*cm  # Bredde på boksen (x)
d = 5*cm  # Dybde på boksen (y)
h = 5*cm  # Høyde på boksen (z)
tykkelse = 0.2*cm # Tykkelse på veggene
margin = 0.05*cm
har_hengsle = True
har_låsfeste = True # Om den skal ha mulighet for å låse

""" ⬇ SKRIV KODE HER ⬇ """

bunn_blokk = cube([w, d, h - tykkelse])
bunn_hulerom = cube([w - tykkelse*2, d - tykkelse*2, h])
bunn_hulerom = translate([tykkelse, tykkelse, tykkelse])(bunn_hulerom)
bunn = bunn_blokk - bunn_hulerom

lokk = cube([w, d, tykkelse])
lokk_innderdel = cube([w-margin*2-tykkelse*2, d-margin*2-tykkelse*2, tykkelse])
lokk_innderdel = translate([margin+tykkelse, margin+tykkelse, -tykkelse])(lokk_innderdel)
lokk = translate([0, 0, h - tykkelse])(lokk + lokk_innderdel)


def lag_hengslefeste(radius, bredde):
  hengslefeste = rotate([0, 90, 0])(cylinder(r=radius, h=bredde))
  hengslefeste = translate([-bredde / 2, 0, -tykkelse])(hengslefeste)
  return hengslefeste


if har_hengsle:
  radius = tykkelse # Radius på hengsel

  # Selve stanga som fester hengslet
  hengslefeste = lag_hengslefeste(radius, w)
  hengslefeste = translate([w / 2, d, h])(hengslefeste)

  # Margin rundt hengslefeste
  hengslefeste_margin = lag_hengslefeste(radius + margin, w - tykkelse*2)
  hengslefeste_margin = translate([w / 2, d, h])(hengslefeste_margin)

  # Mellomrom rundt hengslefeste til bunnen
  mellomrom = 0.2*cm
  hengslefeste_mellomrom = lag_hengslefeste(radius + mellomrom, w - tykkelse*2)
  hengslefeste_mellomrom = translate([w / 2, d, h])(hengslefeste_mellomrom)

  bunn -= hengslefeste_mellomrom
  bunn += hengslefeste

  # Krok i lokk for at lokket skal feste seg i hengslet
  hengslekrok = lag_hengslefeste(radius + mellomrom - margin, w - tykkelse*2 - margin)
  hengslekrok = translate([w / 2, d, h])(hengslekrok)

  lokk += hengslekrok
  lokk -= translate([-w / 2, 0, 0])(scale([2, 1, 1])(hengslefeste_margin))
  lokk -= translate([0, d+0.13*cm, tykkelse*2])(cube([w, tykkelse*2, h]))

if har_låsfeste and har_hengsle:
  låseradius = 0.4*cm # Støtter de fleste låser
  låsetykkelse = 0.2*cm # Tykkelse på låsen
  feste = cylinder(r=låseradius+låsetykkelse, h=låsetykkelse)
  feste += translate([-låseradius-låsetykkelse, 0])(
    cube([låseradius+låsetykkelse, låseradius+låsetykkelse, låsetykkelse])
  )
  feste -= translate([0, 0, -z])(cylinder(r=låseradius, h=låsetykkelse+z*2))
  feste = rotate([0, 90, 0])(feste)

  toppfeste = translate([w / 2 + margin, -låseradius-låsetykkelse, h-låseradius-låsetykkelse])(feste)
  lokk += toppfeste

  bunnfeste = rotate([0, 180, 0])(feste)
  bunnfeste = translate([w / 2 - margin, -låseradius-låsetykkelse, h-låseradius-låsetykkelse])(bunnfeste)
  bunn += bunnfeste


""" ⬆ SKRIV KODE HER ⬆ """


# Skrive ut til en .scad-fil
scad_render_to_file(bunn, __file__[:-3] + ".boks.scad",
                    file_header='$fn = %d;' % fn)
scad_render_to_file(lokk, __file__[:-3] + ".lokk.scad",
                    file_header='$fn = %d;' % fn)
scad_render_to_file(bunn + lokk, __file__[:-3] + ".sammensatt.scad",
                    file_header='$fn = %d;' % fn)
