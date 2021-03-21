import os

path = r'E:\web前端\228 - ustbhuangyi-Vue.js 源码全方位深入解析 （含 Vue3.0 源码分析）\第6章 编译（上）'
fileList = os.listdir(path)

replace = '【更多it资源微信610060008】'
# 需要删除的长度
length = len(replace)
print(length)
for i in fileList: 
  # 结束索引
  endIndex = i.find('【')
  # 文件新name
  newName = i[0:endIndex] + '.mp4'
  os.rename(path + '\\'+ i, path + '\\' + newName)
  print(i + '=======>' + newName)

  
  
