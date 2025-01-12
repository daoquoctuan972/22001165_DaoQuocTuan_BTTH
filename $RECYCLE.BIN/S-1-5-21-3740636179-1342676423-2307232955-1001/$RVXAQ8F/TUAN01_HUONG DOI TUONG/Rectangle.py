class Rectangle:

    def __init__(self,width,length):
        self.width = width
        self.length = length
    def area(self):
        result = self.width * self.length
        return result
    def perimeter(self):
        result = 2*(self.width + self.length)
        return result
    def display(self):
        print(f'rộng: {self.width}, dài: {self.length}, chu vi: {self.perimeter():.2f}, diện tích:{self.area():.2f}\n')
