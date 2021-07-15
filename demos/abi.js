// this will just output node ABI version.
import { getABIVersion, abiVersionMap } from 'node-abi-version'
const n = getABIVersion()
console.log(Object.keys(abiVersionMap).find(v => abiVersionMap[v] === n))
process.exit(1)