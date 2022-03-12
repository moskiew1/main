from textwrap import fill

#komentarz
a = 5

print(a > 2 and a > 10)
print(a > 2 or a > 10)

name = "kamil"
print(len(name))  # długość Stringa
print(name.capitalize()) #pierwsza litera z dużej
print(name.upper()) # całość z dużej litery
print(name.lower()) # całość z małej litery

print(name[0:2]) # wyciąga konkretne litery z Stringa

channel = "Jak nauczyć się programowania"
print(channel.split(" ")) # dodaje ' między słowami

join_string = "-"
print(join_string.join(['jak', 'nauczyć,', 'się', 'programowania'])) # dodaje - między wyrazami

print(name.startswith("k")) # True
print(name.startswith("K")) # False

print(name.endswith("l"))  # usuwa ostatnią literę
print(name.rstrip("l")) #  usuwa pierwszy z prawej
print(name.strip("a")) # usuwa z lewej i prawej literę a 

first_name = "Kamil"
last_name = "Brzeziński"

print(first_name + " " + last_name)

join_string = " "
print(join_string.join([first_name, last_name])) # dokłądnie to samo co wyżej

james_bond = 7
print(str(james_bond).zfill(3)) # dodaje 2 zera przed Stringiem

