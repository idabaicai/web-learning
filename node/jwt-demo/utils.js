import { SignJWT, importPKCS8 } from "jose";


const YourPrivateKey = `-----BEGIN PRIVATE KEY-----
-----END PRIVATE KEY-----`

importPKCS8(YourPrivateKey, 'EdDSA').then((privateKey) => {
  const customHeader = {
    alg: 'EdDSA',
    kid: 'TMGTPQTJQD'
  }
  const iat = Math.floor(Date.now() / 1000) - 30;
  const exp = iat + 1000 * 60 * 60 * 24;
  const customPayload = {
    sub: '2ATN2TKUUW',
    iat: iat,
    exp: exp
  }
  new SignJWT(customPayload)
    .setProtectedHeader(customHeader)
    .sign(privateKey)
    .then(token => console.log('JWT: ' + token))
}).catch((error) => console.error(error))