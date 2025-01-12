class Computer:
    def __init__(self):
        self.__maxprice = 900

    def sell(self):
        print("Gia ba san pham: {}".format(self.__maxprice))

    def setMaxprice(self, price):
        self.__maxprice = price

c = Computer()
c.sell()
c.__maxprice  = 1000
c.sell()
c.setMaxprice(1000)
c.sell()