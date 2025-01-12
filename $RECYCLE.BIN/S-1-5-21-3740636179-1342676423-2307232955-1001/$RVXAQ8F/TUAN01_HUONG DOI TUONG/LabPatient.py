import Patient as pt
import matplotlib as plt

menu_options ={
    1:'Load data from file',
    2:'Add new patient',
    3:'Display list of patient',
    4:'Show patient details',
    5:'Update patient information',
    6:'Delete patient',
    7:'Increase treatment cost of patient',
    8:'Decrease treatment cost of patient',
    9:'Show total patient a month',
    10:'Show total treatment cost a month',
    11:'Show average of treatment cost a month',
    12:'Show average of age',
    13:'Show maximum age',
    14:'Sort list of patient according to treatment cost by ascending',
    15:'Draw treatment cost according to age',
    16:'Draw average of treatment cost chart by age group',
    17:'Draw percentage of treatment cost by age group',
    18:'Draw percentage of total patient by age group',
    19:'Store data to file',
    'Others': 'Exit program'
}

def print_menu():
    for key in menu_options.keys():
        print (key, '--', menu_options[key] )
list = []
while(True):
    print_menu()
    userChoice = ''
    try:
       userChoice = int(input('Input choice: '))
    except:
        print('Invalid input, try again')
        continue

    if userChoice == 1:
        fr = open('TUAN01_HUONG DOI TUONG\dbemp_input.db.txt',mode='r',encoding='utf-8')
        for line in fr:
            stripLine = line.strip('\n')
            templist = stripLine.split(',')
            patientID = templist[0]
            name = templist[1]
            age = int(templist[2])
            daysStay = int(templist[3])
            treatmentCost = float(templist[4])
            patient = pt.Patient(patientID,name,age,daysStay,treatmentCost)
            list.append(patient)
        fr.close()

    elif userChoice == 2:
        patientID = input("Input patientID: ")
        name = input("Input name: ")
        age = int(input("Input age: "))
        daysStay = int(input("Input days stay: "))
        treatmentCost = float(input("Input treatment cost: "))
        patient = pt.Patient(patientID,name,age,daysStay,treatmentCost)
        list.append(patient)

    elif userChoice == 3:
        if list.count==0:
            print('The list is empty!')
        else:
            for item in list:
                item.display()   

    elif userChoice == 4:
        if list.count==0:
            print('The list is empty!')
        else:
            patientID =input("Input patientID:")
        for item in list:
            if(item.patientID ==patientID):
                item.display()

    elif userChoice == 5:
        if list.count==0:
            print('Danh sach rong')
        else:
            ma =input("Input patientID for Update:")
            for item in list:
                if(item.patientID ==ma):
                    item.display()
                    menu={
                    1:'Update name',
                    2:'Update age',
                    3:'Update treatment cost',
                    4:'Update days stay',
                    'Others':'Thoat'
                    }
                    def Xuat_menu():
                        for key in menu.keys():
                            print(key,'--',menu[key])
                    while (True):
                        Xuat_menu()
                        traloi=''
                        try:
                            traloi =int(input('Nhap cac tuy chon:'))
                        except:
                            print('Nhap sai dinh dang, nhap lai:')
                            continue
                        if traloi==1:
                            name = input("Input name: ")
                            item.name =name
                            item.display()
                        elif traloi ==2:
                            age = int(input("Input age: "))
                            item.age =age
                            item.display()
                        elif traloi ==3:
                            treatmentCost = float(input("Input treatmentCost: "))
                            item.treatmentCost =treatmentCost
                            item.display()
                        elif traloi ==4:
                            daysStay = int(input("Input daysStay: "))
                            item.daysStay =daysStay
                            item.display()
                        else:
                            print('Ket thuc chinh sua')
                            break

    elif userChoice == 6:
        if list.count==0:
            print('Danh sach rong')
        else:
            ma =input("Input patientID for Update:")
            for item in list:
                if(item.patientID ==ma):
                    item.display()
                    tl = input('Ban co chac chan xoa benh nhan nay khong Y/N?')
                    if tl =='Y':
                        list.remove(item)
        for item in list:
            item.display()
    
    elif userChoice == 7:
        if list.count==0:
            print('Danh sach rong')
        else:
            ma =input("Input patientID for Update:")
            for item in list:
                if(item.patientID ==ma):
                    item.display()
                    phidieutritang = float(input('Nhap muc phi dieu tri tang'))
                    item.treatmentCost = item.treatmentCost + phidieutritang
                    item.display()

    elif userChoice == 8:
        if list.count==0:
            print('Danh sach rong')
        else:
            ma =input("Input patientID for Update:")
            for item in list:
                if(item.patientID ==ma):
                    item.display()
                    phidieutrigiam = float(input('Nhap muc phi dieu tri giam'))
                    item.treatmentCost = item.treatmentCost -phidieutrigiam
                    item.display()

    elif userChoice == 9:
        if list.count==0:
            print('Danh sach rong')
        else:
            tongsbn=0
            for item in list:
                tongsbn = tongsbn+1
            print('Tong so benh nhan =',tongsbn)

    elif userChoice == 10:
        sumtreatmentcost = 0.0
        for item in list:
            sumtreatmentcost = sumtreatmentcost + item.treatmentCost
        print(f'Total treatmentCost: {sumtreatmentcost}')

    elif userChoice == 11:
        if list.count==0:
            print('Danh sach rong')
        else:
            tongsbn=0
            tongphidieutri=0
            for item in list:
                tongsbn = tongsbn+1
                tongphidieutri =tongphidieutri +item.treatmentCost
                item.display()
            phidieutritp = tongphidieutri/tongsbn
            print(f'phi dieu tri trung binh benh nhan ={phidieutritp}')

    elif userChoice == 12:
        if list.count==0:
            print('Danh sach rong')
        else:
            tongtuoi=0
            tongsbn=0
            for item in list:
                tongsbn =tongsbn+1
                tongtuoi = tongtuoi+item.age
                item.display()
            tuoitb = tongtuoi/tongsbn
            print(f'Tuoi trung binh benh nhan ={tuoitb}')

    elif userChoice == 13:
        if list.count==0:
            print('Danh sach rong')
        else:
            for item in list:
                tuoimax=item.age
                break
            for item in list:
                if(item.age>tuoimax):
                    tuoimax = item.age
            print('Tuoi lon nhat =',tuoimax)

    elif userChoice == 14:
        if list.count==0:
            print('Danh sach rong')
        else:
            tongsbn=0
            for item in list:
                tongsbn = tongsbn+1
                item.display()
            print('Tong so benh nhan =',tongsbn)
    elif userChoice == 15:
        arrTuoi = []
        arrPhiDieuTri = []
        for item in list:
            arrTuoi.append(item.age)
            arrPhiDieuTri.append(item.treatmentCost)
        plt.figure(figsize=(15,5))
        plt.title("Age and treatment cost chart")
        plt.xlabel("Ox: age")
        plt.ylabel("Oy: treatment cost")
        plt.plot(arrTuoi,arrPhiDieuTri, "go")
        plt.show()
    elif userChoice == 16:
        arrTuoi = []
        arrPhiDieuTri = []
        for item in list:
            arrTuoi.append(item.age)
            arrPhiDieuTri.append(item.treatmentCost)
        plt.figure(figsize=(15,5))
        plt.title("Age and treatment cost chart")
        plt.xlabel("Ox: age")
        plt.ylabel("Oy: treatment cost")
        plt.plot(arrTuoi,arrPhiDieuTri, "go")
        plt.show()
    elif userChoice == 17:
        arrTuoi = []
        arrPhiDieuTri = []
        for item in list:
            arrTuoi.append(item.age)
            arrPhiDieuTri.append(item.treatmentCost)
        plt.figure(figsize=(15,5))
        plt.title("Age and treatment cost chart")
        plt.xlabel("Ox: age")
        plt.ylabel("Oy: treatment cost")
        plt.plot(arrTuoi,arrPhiDieuTri, "go")
        plt.show()
    elif userChoice == 18:
        arrTuoi = []
        arrPhiDieuTri = []
        for item in list:
            arrTuoi.append(item.age)
            arrPhiDieuTri.append(item.treatmentCost)
        plt.figure(figsize=(15,5))
        plt.title("Age and treatment cost chart")
        plt.xlabel("Ox: age")
        plt.ylabel("Oy: treatment cost")
        plt.plot(arrTuoi,arrPhiDieuTri, "go")
        plt.show()
    elif userChoice == 19:
        arrTuoi = []
        arrPhiDieuTri = []
        for item in list:
            arrTuoi.append(item.age)
            arrPhiDieuTri.append(item.treatmentCost)
        plt.figure(figsize=(15,5))
        plt.title("Age and treatment cost chart")
        plt.xlabel("Ox: age")
        plt.ylabel("Oy: treatment cost")
        plt.plot(arrTuoi,arrPhiDieuTri, "go")
        plt.show()
    else:
        print('BYE BYE')
        break   
