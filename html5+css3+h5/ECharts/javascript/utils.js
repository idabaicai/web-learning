
export const getDateTime = () => {
  const dt = new Date();
  const y = dt.getFullYear();
  const dm = dt.getMonth() + 1;
  const d = dt.getDate();
  const h = dt.getHours().toString().padStart(2, '0');
  const m = dt.getMinutes().toString().padStart(2, '0');
  const s = dt.getSeconds().toString().padStart(2, '0');
  return `${y}年${dm}月${d}日 ${h}:${m}:${s}`
}