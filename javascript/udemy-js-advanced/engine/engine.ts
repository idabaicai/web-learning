function myEngine(code: string) {
  return code.split(/\s+/)
}

const res = myEngine('const engine = "my engine1"')

console.log(res)
