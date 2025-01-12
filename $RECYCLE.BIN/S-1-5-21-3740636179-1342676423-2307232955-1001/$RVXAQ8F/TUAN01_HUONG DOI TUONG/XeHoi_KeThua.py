class Car:
    def __init__(self,hangxe, tenxe, mausac):
        self.tenxe = tenxe
        self.mausac = mausac
        self.hangxe = hangxe

    def dungxe(self, mucdich):
        print("{} dang dung xe de {}".format(self.tenxe, mucdich))
    
    def chayxe(self):
        print("{} dang chay tren duong".format(self.tenxe))

class Toyota(Car):
    def __init__(self, hangxe, tenxe, mausac, nguyenlieu):
        super().__init__(hangxe, tenxe, mausac)
        self.nguyenlieu = nguyenlieu

    def dungxe(self, mucdich):
        print("{} dang dung xe de {}".format(self.tenxe, mucdich))
        print("{} dang chay bang {}".format(self.tenxe, self.nguyenlieu))

    def chayxe(self):
        print("{} dang chay tren duong".format(self.tenxe))
    
    def nomay(self):
        print("{} dang no may".format(self.tenxe))

toyota1 = Toyota("Toyota", "Toyota Hilus", "do", "dien")
toyota2 = Toyota("Toyota", "Toyota Varis", "vang", "deisel")
toyota3 = Toyota("Toyota", "Toyota Vios", "xanh", "gas")
toyota1.dungxe("nap dien")
toyota2.chayxe()
toyota3.nomay()
