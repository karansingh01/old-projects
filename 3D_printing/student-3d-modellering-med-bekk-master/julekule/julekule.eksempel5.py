from solid import *
from solid.utils import *
from math import *
from numpy import *

mm = 10  # Gjøre om til millimeter (f.eks. er 5*mm = 5mm)
cm = 15  # Gjøre om til centimeter (f.eks. er 5*cm = 5cm)
deg2rad = pi / 180
rad2deg = 180 / pi
z = 0.01  # Fikse z-fighting
fn = 32  # Punkter i en sirkel (jo fler punkter jo finere, men krever mer CPU)

# Konstanter og funksjoner
r = 2.5*cm  # Radius på julekula
r_hanke = 0.25*cm  # Radius på hanken
b_hanke = r_hanke * 0.4  # Bredden på hanken


def torus(radius, bredde, detaljer=10):
    return rotate_extrude(360, segments=detaljer)(translate([radius, 0, 0])(circle(bredde, segments=detaljer)))


def kurve(punkter, bredde=1*cm, detaljer=fn):
    dott = sphere(bredde / 2, segments=detaljer)
    model = translate(punkter[0])(dott)
    for (punkt1, punkt2) in zip(punkter, punkter[1:]):
        model += hull()(translate(punkt1)(dott), translate(punkt2)(dott))
    return model


# Lage hanke å tre tråd gjennom
hanke = torus(r_hanke, b_hanke)
hanke = rotate([0, 90, 0])(hanke)  # Rotere 90 grader om y-aksen
hanke = rotate([0, 0, 90])(hanke)  # Rotere 90 grader om z-aksen
hanke = translate([0, 0, r + r_hanke])(hanke)  # Flytte langs z-aksen

# Lage selve kula

""" ⬇ SKRIV KODE HER ⬇ """

bredde = 0.6*cm

tekst_topp = text("Aryan", size=10, font="monospace",
                  halign="center", valign="center")
tekst_topp = linear_extrude(height=(bredde+2*z), center=True)(tekst_topp)
tekst_topp = rotate([90, 0, 0])(tekst_topp)
tekst_topp = translate([-1, 0, 10])(tekst_topp)

tekst_bunn = text("Arvin!", size=10, font="monospace",
                  halign="center", valign="center")
tekst_bunn = linear_extrude(height=bredde+2*z, center=True)(tekst_bunn)
tekst_bunn = rotate([90, 0, 0])(tekst_bunn)
tekst_bunn = translate([1, 0, -8])(tekst_bunn)


sirkel = circle(r=r)
sirkel = linear_extrude(height=bredde, center=True)(sirkel)
sirkel = rotate([90, 0, 0])(sirkel)

# "o" og "d" i "God Jul!" har en flyvende blokk, den må fikses
støtteblokk = cube([1, bredde, 10])
støtteblokk1 = translate([-1.3, -bredde / 2, 3.5])(støtteblokk)
støtteblokk2 = translate([8.1, -bredde / 2, 3.5])(støtteblokk)

""" ⬆ SKRIV KODE HER ⬆ """


# Sette sammen hanken og resten
julekule = hanke + sirkel - tekst_topp - \
    tekst_bunn + støtteblokk1 + støtteblokk2


# Skrive ut til en .scad-fil
scad_render_to_file(julekule, __file__[:-3] + ".scad",
                    file_header='$fn = %d;' % fn)
