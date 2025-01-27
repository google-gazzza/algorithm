// [JS][6kyu] Can you keep a secret?
// can-you-keep-a-secret
// https://www.codewars.com/kata/5351b35ebaeb67f9110012d2/train/javascript

const createSecretHolder = (secret) => {
  let value = secret
  return {
    getSecret: () => value,
    setSecret: (newSecret) => (value = newSecret),
  }
}

const obj = createSecretHolder(5)
obj.getSecret()
obj.setSecret(2)
obj.getSecret()
