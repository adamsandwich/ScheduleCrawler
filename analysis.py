import re


def analysis():
    file_object = open("C:\\Users\\Adams\\PycharmProjects\\ScheduleCrawler\\testdata.txt", encoding='utf-8')
    try:
        list = []
        all_the_text = file_object.read()
        # 获取课程主体文本
        processed_text = re.compile(r"var activity=null;.*table0.marshalTable", re.M|re.S).findall(all_the_text)[0]
        # 处理文本
        for each in processed_text.split("var teachers"):
            dic = {}
            # 获取教师姓名
            teacherInfo = re.findall(r"var actTeachers .{0,62}", each)
            if len(teacherInfo):
                teacherName = re.findall(r"name:\"(.{0,8})\"", teacherInfo[0])
                if len(teacherName):
                    dic['teacherName'] = teacherName[0]
            # 获取课程 名称、地点、周次
            for eachinfo in re.findall(r"activity = new TaskActivity(.{0,220});", each):
                info=eachinfo.split(",")
                courseName = info[5].replace("\"", "")
                courseClassroom = info[7].replace("\"", "")
                courseWeek =info[8].replace("\"", "")
                dic['courseName'] =courseName
                dic['courseClassroom'] = courseClassroom
                dic['courseWeek'] = courseWeek
                list.append(dic)
    finally:
        file_object.close()


if __name__ == '__main__':
    analysis()
