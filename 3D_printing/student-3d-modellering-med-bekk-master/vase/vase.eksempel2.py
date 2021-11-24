from solid import *
from solid.utils import *
from math import *
from numpy import *

mm = 1  # Gjøre om til millimeter (f.eks. er 5*mm = 5mm)
cm = 10  # Gjøre om til centimeter (f.eks. er 5*cm = 5cm)
deg2rad = pi / 180
rad2deg = 180 / pi
z = 0.01  # Fikse z-fighting
fn = 26  # Punkter i en sirkel (jo fler punkter jo finere, men krever mer CPU)

# Konstanter og funksjoner
r = 2.5*cm  # Radius på vasen


""" ⬇ SKRIV KODE HER ⬇ """
"""
Oppskrift på vase med spiral-søyler:
1. Lage en fasong/form som en funksjon
2. Rotere denne formen i en sirkel
3. Legge til en spiral-søyle langs formen på søyla
4. Kopiere spiral-søylene rundt vasen x-antall ganger
"""

# 1.
def vase_form_funksjon(x):
    y = r * 0.3
    sc_x =   x +10 #sqrt(x + 3) * 9
    y += (1+sin(sc_x / 18)) * 9
    return y


tykkelse = 0.3*cm
form_på_vase = [[0, 0], [0, -tykkelse],
                [vase_form_funksjon(-tykkelse), -tykkelse]]
steg = 30

for y in linspace(0, 10*cm, steg):
    x = vase_form_funksjon(y)
    form_på_vase.append([x, y])

for [x, y] in form_på_vase[:2:-1]:
    form_på_vase.append([x - tykkelse, y])

# 2.
vase = polygon(form_på_vase)  # Lage formen som en shape
vase = rotate_extrude()(vase)  # Rotere formen rundt z-aksen

# Legge til mønster på vasen
# 3.
punkter = []
for z in linspace(0, 10*cm, steg):
    radius = vase_form_funksjon(z)
    rot = z / 10
    x = radius * sin(rot)
    y = radius * cos(rot)
    punkter.append([x+2, y, z])

t = 0.2*cm
mønster = extrude_along_path(
    [[(t / 2), -t], [-t / 2, t], [-t / 2, t / 2]], punkter)

# 4.
for rot in linspace(0, 360, 10):
    vase += rotate([0, 0, rot])(mønster)

""" ⬆ SKRIV KODE HER ⬆ """


# Skrive ut til en .scad-fil
scad_render_to_file(vase, __file__[:-3] + ".scad",
                    file_header='$fn = %d;' % fn)
