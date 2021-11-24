from solid import *
from solid.utils import *
from math import *
from numpy import *

mm = 1  # Gjøre om til millimeter (f.eks. er 5*mm = 5mm)
cm = 10  # Gjøre om til centimeter (f.eks. er 5*cm = 5cm)
deg2rad = pi / 180
rad2deg = 180 / pi
z = 0.01  # Fikse z-fighting
fn = 16  # Punkter i en sirkel (jo fler punkter jo finere, men krever mer CPU)

# Konstanter og funksjoner
r = 2.5*cm  # Radius på vasen


""" ⬇ SKRIV KODE HER ⬇ """
"""
Oppskrift på vase:
1. Lage en bunnform
2. Bygg opp vasen lagvis langs noen punkter
3. Legg på rotasjon og skalering på hvert av punktene
4. Lage en bunnform separat fordi de ikke kan legges sammen grunnet noen bugs (Kan legge de sammen senere i 3D-printing-prosessen)
"""

def vase_form_funksjon(x):
    y = r * 0.3
    sc_x = sqrt(x + 3) * 9
    y += (1+sin(sc_x / 18)) * 10
    return y

# Lage bunnformen på vasen
# 1.
bunnform_på_vase_utside = []
bunnform_på_vase_innside = []
for rad in linspace(0, 2.002*pi, 49, endpoint=True): # 2.002 fordi en bug i sliceren
    dybde = (1 + cos(rad * 6) * 0.1)
    x = sin(rad) * r * dybde
    y = cos(rad) * r * dybde
    bunnform_på_vase_utside.append([x, y])
    bunnform_på_vase_innside.append([x*0.8, y*0.8])

bunnform_på_vase = bunnform_på_vase_utside + bunnform_på_vase_innside[::-1]

# Reise opp vasen fra bunnformen, og legge på skalering og rotasjon
# 2. og 3.
punkter = [[0, 0, 0]]
skalering = [0]
rotasjon = []
for z in linspace(0, 10*cm, 20):
    x = 0
    y = 0
    punkter.append([x, y, z])
    s = vase_form_funksjon(z) / r
    skalering.append(s)
    rotasjon.append(z)
punkter = punkter[:-1]
skalering = skalering[:-1]

vase = extrude_along_path(bunnform_på_vase, punkter, scales=skalering, rotations=rotasjon)

# Legge til bunn på vasen
# 4.
bunn = polygon(bunnform_på_vase_utside)
bunn = linear_extrude(height=0.2*cm)(bunn)

""" ⬆ SKRIV KODE HER ⬆ """


# Skrive ut til en .scad-fil
scad_render_to_file(vase, __file__[:-3] + ".vase.scad",
                    file_header='$fn = %d;' % fn)
scad_render_to_file(bunn, __file__[:-3] + ".bunn.scad",
                    file_header='$fn = %d;' % fn)
