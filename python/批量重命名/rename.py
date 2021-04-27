import os

path = r'E:\web前端\228 - XXXXXXXXXXX'
fileList = os.listdir(path)

replace = '【more web learning source】'
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

  
  
