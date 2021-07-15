// this will just output node ABI version.
const { getABIVersion, abiVersionMap } = require('node-abi-version')
const n = getABIVersion()
console.log(Object.keys(abiVersionMap).find(v => abiVersionMap[v] === n))
process.exit(0)