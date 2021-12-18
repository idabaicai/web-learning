interface FetchCountCallBack {
  (count: number): void
}

export default function fetchCount(cb: FetchCountCallBack) {
  cb(88);
}
