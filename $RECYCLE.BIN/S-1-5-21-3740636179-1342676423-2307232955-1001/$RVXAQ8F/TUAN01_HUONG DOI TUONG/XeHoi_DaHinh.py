class Toyota:
    def dungxe(self):
        print("Toyota dang dung xe de nap dien")

    def nomay(self):
        print("Toyota dang no may bang hop so tu dong")

class Porsche:
    def dungxe(self):
       print("Porsche dang dung xe de bom xang")

    def nomay(self):
        print("Porsche dang no may bang hop so co") 

def kiemtra_dungxe(car): 
    car.dungxe()

toyota = Toyota()
porsche = Porsche()

kiemtra_dungxe(toyota)
kiemtra_dungxe(porsche)
