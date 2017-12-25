import os,sys
import re

def analysis():
    file_object = open("C:\\Users\\Adams\\Desktop\\z.txt", encoding='utf-8')
    try:
        all_the_text = file_object.read()
        courseinfo=re.compile("activity = new TaskActivity(.*);")
        print(courseinfo.findall(all_the_text))
    finally:
        file_object.close()


if __name__  == '__main__':
    analysis()
