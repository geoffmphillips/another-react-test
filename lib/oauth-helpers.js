function randomChar() {
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ09123456789';
  return alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
}

function generateNonce() {
  let nonce = '';
  for (let i = 0; i < 25; i++) {
    nonce += randomChar();
  }
  return nonce;
}

function createSignature(method, url) {
  let signature = '';

  return signature;
}

module.exports = {
  randomChar,
  generateNonce,
  createSignature,
}
