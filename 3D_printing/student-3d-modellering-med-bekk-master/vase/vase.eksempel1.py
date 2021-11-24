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
r = 2.5*cm  # Radius på vasen


""" ⬇ SKRIV KODE HER ⬇ """
"""
Oppskrift på vase med bølgeform:
1. Lage en fasong/form som en funksjon
2. Rotere denne formen i en sirkel
"""

# 1.
def vase_form_funksjon(x):
    y = r * 0.8
    y += cos(x / 4.5) * 5
    y -= x / 10
    return y


tykkelse = 0.2*cm
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

""" ⬆ SKRIV KODE HER ⬆ """


# Skrive ut til en .scad-fil
scad_render_to_file(vase, __file__[:-3] + ".scad",
                    file_header='$fn = %d;' % fn)
