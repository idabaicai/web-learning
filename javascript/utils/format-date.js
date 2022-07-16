/*
 * @Date: 2022-07-16 10:56:50
 * @Author: liuhui
 * @LastEditTime: 2022-07-16 11:39:11
 * @LastEditors: liuhui
 * @Description: 日期格式化
 */

function format(time, format = 'yyyy:MM:dd') {
  const date = new Date(time);
  const timeObj = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };
  const time_str = format.replace(/([yMdHms])+/g, (res, key) => {
    const value = timeObj[key];
    // res: 匹配到 format 的字符
    const len = res.length;
    return value.toString().padStart(len, '0');
  });
  return time_str;
}
