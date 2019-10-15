function getIP(networkInterfaces) {
  let interfaces = []
  for (let int in networkInterfaces) {
    let isLocalhost = networkInterfaces[int].map(x => x.address).includes('127.0.0.1')

    if (!isLocalhost) {
      interfaces.push(networkInterfaces[int])
    }
  }

  let ip = interfaces.flat().filter(x => x.family == 'IPv4').map(x => x.address)[0]
  return ip
}

module.exports = {
  getIP
}