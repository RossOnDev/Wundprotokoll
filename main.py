import eel

eel.init('GUI')
list = []
diff = 0

@eel.expose
def savedata(size, name):
    global diff
    for p in list:
        arr = p.split(",")

        if arr[1] == name:
            oldSize = arr[0]
            print(size + ", " + oldSize)
            diff = round(((int(size)/int(oldSize))-1)*100, 2)

    list.append(size + "," + name + "," + str(diff))
    return list


@eel.expose
def test(a, b):
    print(a, b)


eel.start('index.html', size=(1500, 800))
