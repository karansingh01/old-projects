from solid import *
from solid.utils import *
from math import *
from numpy import *

mm = 1  # Gjøre om til millimeter (f.eks. er 5*mm = 5mm)
cm = 10  # Gjøre om til centimeter (f.eks. er 5*cm = 5cm)
deg2rad = pi / 180
rad2deg = 180 / pi
z = 0.05  # Fikse z-fighting
fn = 32  # Punkter i en sirkel (jo fler punkter jo finere, men krever mer CPU)

# Konstanter og funksjoner
r = 2.5*cm  # Radius på julekula
r_hanke = 0.25*cm  # Radius på hanken
b_hanke = r_hanke * 0.4  # Bredden på hanken


def torus(radius, bredde, detaljer=10):
    return rotate_extrude(360, segments=detaljer)(translate([radius, 0, 0])(circle(bredde, segments=detaljer)))


""" ⬇ SKRIV KODE HER ⬇ """

# 1. Lage hanke å tre tråd gjennom
hanke = torus(r_hanke, b_hanke)
hanke = rotate([0, 90, 0])(hanke)  # Rotere 90 grader om y-aksen
hanke = translate([0, 0, r + r_hanke])(hanke)  # Flytte langs z-aksen

# 2. Lage en kube med kanter
kube = cube(r*2)
kube = translate([-r, -r, -r])(kube)

w = .5*cm  # Kube-kant-bredde
kube_hull = cube([r*2 - w*2, r*2 - w*2, r*2 + z*2])
kube_hull = translate([w - r, w - r, -z - r])(kube_hull)

kube -= kube_hull
kube -= rotate([90, 0, 0])(kube_hull)
kube -= rotate([0, 90, 0])(kube_hull)

kube = rotate([45, atan(1 / sqrt(2)) * rad2deg, 0])(kube)
kube_topp = sqrt(3*r**2) - r - b_hanke
kube = translate([0, 0, -kube_topp])(kube)

# 3. Lage en kule som er plassert inni kuben
ball = sphere(r)
ball = translate([0, 0, -kube_topp])(ball)

""" ⬆ SKRIV KODE HER ⬆ """


# Sette sammen hanken og julekula
julekule = hanke + kube + ball


# Skrive ut til en .scad-fil
scad_render_to_file(julekule, __file__[:-3] + ".scad",
                    file_header='$fn = %d;' % fn)
