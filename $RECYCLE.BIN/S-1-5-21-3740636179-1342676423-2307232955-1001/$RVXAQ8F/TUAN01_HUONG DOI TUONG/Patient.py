class Patient:
    def __init__(self, patientID, name, age, daysStay, treatmentCost):
        self.patientID = patientID
        self.name = name
        self.age = age
        self.daysStay = daysStay
        self.treatmentCost = treatmentCost

    def updateTreatmentCost(self, newTreatmentCost):
        if (newTreatmentCost >= 0):
            self.treatmentCost = newTreatmentCost

    def updateDaysStay(self, newDaysStay):
        self.condition = newDaysStay

    def calHospitalFee(self):
        baseFeePerDay = 100
        totalFee = (self.daysStay * baseFeePerDay) + self.treatmentCost
        return totalFee

    def display(self):
        print(f'patientID: {self.patientID}, name: {self.name}, age: {self.age}, days stay: {self.daysStay}, treatment cost: {self.treatmentCost}, HospitalFee: {self.calHospitalFee()}\n')