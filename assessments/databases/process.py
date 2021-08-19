# importing the file contents and saving them to a variable. 
log_file = open("um-server-01.txt")

# Declaring a function that takes in a list, loops over it and removes whitespaces, then checks the first three letters to see if the day is ____. If it is, print the entire line.  
def sales_reports(log_file):
    for line in log_file:
        line = line.rstrip()
        day = line[0:3]
        if day == "Mon":
            print(line)

# Invoking the above function. 
# sales_reports(log_file)


def numbers_reports(log_file):
    for line in log_file:
        line = line.rstrip().split(' ')
        count = int(line[2])
        # print(count)
        if count > 10:
            print(line)






numbers_reports(log_file)