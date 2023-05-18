// console.log('Welcome to Node Tutorial')
// require("./07-mind-grenade")

const os = require("os")

//info about current user

const user = os.userInfo()
console.log(user)

console.log(`The system  Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name:os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)