class Car:
    def __init__(self, tenxe, mausac, nguyenlieu):
        self.tenxe = tenxe
        self.mausac = mausac
        self.nguyenlieu = nguyenlieu

    def dungxe(self, mucdich):
        return "{} dang dung xe de {}".format(self.tenxe, mucdich)
    
    def chayxe(self):
        return "{} dang chay tren duong".format(self.tenxe)
    
    def nomay(self):
        return "{} dang no may".format(self.tenxe)
    
toyota = Car("toyota", "do", "dien")
lamborghini = Car("lamborghini", "vang", "deisel")
porsche = Car("porsche", "xanh", "gas")

print(toyota.dungxe("do xang"))
print(lamborghini.chayxe())
print(porsche.nomay())