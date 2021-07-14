// This illustrates dynamic-loading of synth-engine

import core from 'elementary-core'

if (!process.argv[2]) {
  console.error('Usage: elementary -r esm demo.js YOURDEMO.js')
  process.exit(1)
}

async function main () {
  const load = (await import(`${process.argv[2]}`)).default

  if (load) {
    load()
  }
}

core.on('load', main)
