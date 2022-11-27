import datetime
print(datetime.datetime.now())
today = datetime.datetime.now().date()
print("today is ", end=" -:  ")
print(today)
print("hello thomas kitaba")
print(datetime.datetime.now().date().year)
print(datetime.datetime.now().month)
print(datetime.datetime.now().day)
print("thomas kitaba")

day = str(datetime.datetime.now().year) + "-" + str(datetime.datetime.now().month) + "-" + str(datetime.datetime.now().day)
print(day)

mytime=  datetime.datetime.now().strftime("%H:%M:%S")
print(mytime)

print("====== SPLITING DATE======")
txt = "2022-10-14 00:04:20"

date_time = txt.split()


print(date_time)

date = date_time[0].split("-")
print(date)

print("year", end=":")
print(date[0])
print("month", end=":")
print(date[1])
print("day", end=":")
print(date[2])

print("---------------------------")
date = date_time[1].split(":")
print(date)

print("hour", end=":")
print(date[0])
print("minute", end=":")
print(date[1])
print("second", end=":")
print(date[2])

