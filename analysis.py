import re


def analysis():
    file_object = open("C:\\Users\\Adams\\PycharmProjects\\ScheduleCrawler\\testdata.txt", encoding='utf-8')
    try:
        all_the_text = file_object.read()
        courseinfo = re.compile("activity = new TaskActivity(.*);")
        # 5:CourseName 7:CourseClassroom 8:ValidWeek
        for each in courseinfo.findall(all_the_text):
            course = each.split(",")
            print(course[5].replace("\"", ""))
            print(course[7].replace("\"", ""))
            print(course[8].replace("\"", ""))
            break
    finally:
        file_object.close()


''' 正则
activity = new TaskActivity(.*);.*var teachers
'''

if __name__ == '__main__':
    analysis()
