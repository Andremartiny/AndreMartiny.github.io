import os
import time

for i in range(100):
    string = ""
    for _ in range(i):
        string = string + " "
    string = string + "#"
    for _ in range(i+1, 50):
        string = string + " "
    for n in range(5):
        print(string)
    time.sleep(0.02)
    os.system('cls')


