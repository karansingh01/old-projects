from solid import *
from solid.utils import *
from math import *
from numpy import *

from PIL import Image
import requests

mm = 1  # Gjøre om til millimeter (f.eks. er 5*mm = 5mm)
cm = 10  # Gjøre om til centimeter (f.eks. er 5*cm = 5cm)
deg2rad = pi / 180
rad2deg = 180 / pi
z = 0.01  # Fikse z-fighting
fn = 16  # Punkter i en sirkel (jo fler punkter jo finere, men krever mer CPU)

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


def sfæriske_punkter(radius=r, antall_x=20, antall_y=10):
    punkter, faces, uv = [[0, 0, -radius]], [], [[0, -pi / 2]]
    for j, v in enumerate(linspace(-pi / 2, pi / 2, antall_y + 1)):
        for i, u in enumerate(linspace(0, 2*pi, antall_x + 1)):
            pos = i + j * (antall_x + 1)
            if j == 0:
                if 0 < i < antall_x + 1:
                    faces.append([0, pos + 1, pos])
                continue
            if j == antall_y:
                if -1 < i < antall_x:
                    faces.append([(antall_y-1) * (antall_x+1) + 1,
                                  pos - antall_x * 2 - 1, pos - antall_x * 2])
                continue
            x = sin(u) * cos(v)
            y = cos(u) * cos(v)
            z = sin(v)
            uv.append([u, v])
            punkter.append(array([x, y, z]) * radius)
            if i > 0:
                if j < antall_y - 1:
                    faces.append([pos, pos - antall_x, pos+1])
                    faces.append([pos, pos - antall_x - 1, pos - antall_x])
    punkter.append([0, 0, radius])
    uv.append([0, 0, pi / 2])
    return punkter, faces, uv


def bilde_til_sfæriske_punkter(bilde, radius=r, antall_x=20, antall_y=10, piksel_til_høyde=None):
    pix = bilde.load()
    [w, h] = bilde.size
    punkter, faces, uv = sfæriske_punkter(radius, antall_x, antall_y)
    nye_punkter = []
    for p, xy in zip(punkter, uv):
        x = int((2 * pi - xy[0]) / pi / 2 * w - 1)
        y = int((pi / 2 - xy[1]) / pi * h - 1)
        r = piksel_til_høyde(
            pix[x, y]) if piksel_til_høyde else 1 + min(10, pix[x, y][0]) / 200
        nye_punkter.append([p[0]*r, p[1]*r, p[2]*r])
    return nye_punkter, faces


""" ⬇ SKRIV KODE HER ⬇ """
"""
Oppskrift på julekule med bilde på:
1. Lage hanke å tre tråd gjennom
2. Lage selve kula
3. Legge til et bilde (fra disk eller URL)
4. Bruke bildet til å lage en kule med forhøyninger
"""

# 1. Lage hanke å tre tråd gjennom
hanke = torus(r_hanke, b_hanke)
hanke = rotate([0, 90, 0])(hanke)  # Rotere 90 grader om y-aksen
hanke = translate([0, 0, r + r_hanke])(hanke)  # Flytte langs z-aksen

# 2. Lage selve kula
kule = sphere(r*0)

# 3. Legge til et bilde (fra disk eller URL)
# Fra disk:
bilde = Image.open('julekule/earth-heightmap.png')
# Fra URL:
#bilde = Image.open(requests.get('', stream=True).raw)

# 4. Bruke bildet til å lage en kule med forhøyninger
punkter, faces = bilde_til_sfæriske_punkter(
    bilde,
    radius=r,
    antall_x=48,
    antall_y=32,
    piksel_til_høyde=lambda piksel: 1.05 +
    piksel[0] / 2000 if piksel[0] > 1 else 1
)
kule += polyhedron(punkter, faces) # Generere den faktisk modellen bestående av punkter og overflater (faces)


""" ⬆ SKRIV KODE HER ⬆ """

# Sette sammen hanken og julekula
julekule = hanke + kule


# Skrive ut til en .scad-fil
scad_render_to_file(julekule, __file__[:-3] + ".scad",
                    file_header='$fn = %d;' % fn)
