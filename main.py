import sys
import io
from urllib import request

# 改变标准输出的默认编码
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf8')
# 课表url
url = 'http://course.shnu.edu.cn/eams/home.action'
# post数据
post_data = {
    'ignoreHead': '1',
    'setting.kind': 'std',
    'startWeek': '1',
    'semester.id': '102',
    'ids': '138276'}
# 浏览器登录后得到的cookie
cookie_str = r'semester.id=102; JSESSIONID=D66491452DC0DA9569B02BC6263EDEEA'
req = request.Request(url)
# 设置cookie
req.add_header('cookie', cookie_str)
# 设置请求头
req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36')
resp = request.urlopen(url)
print(resp.read().decode('utf-8'))
