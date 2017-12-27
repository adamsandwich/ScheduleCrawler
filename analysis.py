import re
import time
import datetime


# {'teacherName': '李大志', 'courseName': '网络与通信(080931101931.02)', 'courseClassroom': '奉贤3教楼309',
# 'courseWeek': '01111111111111111000000000000000000000000000000000000',
# 'time': [{'weekday': '0', 'section': '2'}, {'weekday': '0', 'section': '3'}, {'weekday': '0', 'section': '4'}]}
def analysis():
    file_object = open("C:\\Users\\Adams\\PycharmProjects\\ScheduleCrawler\\testdata.txt", encoding='utf-8')
    try:
        list = []
        all_the_text = file_object.read()
        # 获取课程主体文本
        processed_text = re.compile(r"var activity=null;.*table0.marshalTable", re.M | re.S).findall(all_the_text)[0]
        # 处理文本
        for each in processed_text.split("var teachers"):
            dic = {}
            # 获取教师姓名
            teacherInfo = re.findall(r"var actTeachers .{0,62}", each)
            if len(teacherInfo):
                teacherName = re.findall(r"name:\"(.{0,8})\"", teacherInfo[0])
                if len(teacherName):
                    dic['teacherName'] = teacherName[0]
            else:
                continue
            # 获取课程 名称、地点、周次
            for eachinfo in re.findall(r"activity = new TaskActivity(.{0,220});", each):
                info = eachinfo.split(",")
                courseName = info[5].replace("\"", "")
                courseClassroom = info[7].replace("\"", "")
                courseWeek = info[8].replace("\"", "")
                dic['courseName'] = courseName
                dic['courseClassroom'] = courseClassroom
                dic['courseWeek'] = courseWeek
            temp = []
            for eachtime in re.findall(r"index =(\d{1,2})\*unitCount\+(\d{1,2});", each):
                temp.append({"weekday": eachtime[0], "section": eachtime[1]})
            dic['time'] = temp
            list.append(dic)
        return list
    finally:
        file_object.close()


#
def setTime(l):
    startTime = ""
    endTime = ""
    for each in l:
        if startTime


# 生成日历ICS文件 startTime:201712250900
def generateICSfile(l, startTime):
    startTime_UTC = local2UTC(local2UTC(startTime))
    content = "BEGIN:VCALENDAR\n"
    for each in l:
        content += "BEGIN:VEVENT\n"
        content += "DTSTART:" + "\n"
        content += "DTEND:" + "\n"
        content += "END:VEVENT\n"
    content += "END:VCALENDAR"


# 年   月 日 时 分
# 2017 12 26 15 42
def local2UTC(localtime):
    year = int(localtime[0:4])
    month = int(localtime[4:6])
    day = int(localtime[6:8])
    hour = int(localtime[8:10])
    minutes = int(localtime[10:12])
    local = datetime.datetime(year, month, day, hour, minutes, 0, 0)  # 2017-12-26 09:00:00
    # time_struct = time.mktime(local.timetuple())
    # utc_time = datetime.datetime.utcfromtimestamp(time_struct)
    return time.strftime("%Y%m%dT%H%M%SZ", local.timetuple())


# 201712260900
def generate_DTSTART_DTEND(start_time, end_time):
    DTSTART = local2UTC(start_time)
    DTEND = local2UTC(end_time)
    return {DTSTART, DTEND}


if __name__ == '__main__':
    # print(local2UTC("201712260900"))
    print(analysis()[0])
