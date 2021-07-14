// this is a basic midi drum machine

import core from 'elementary-core'
import el from '@nick-thompson/elementary'
import dt from '@nick-thompson/drumsynth'

const gates = {
  C2: 0, // kick
  D2: 0 // clap
}

export default function () {
  core.on('midi', e => {
    if (e.noteName && (e.type === 'noteOn' || e.type === 'noteOff')) {
      gates[e.noteName] = e.type === 'noteOn' ? 1 : 0
    }

    const out = el.add(
      el.mul(0.7, dt.kick(40, 0.104, 0.4, 0.4, 4, el.const({ key: 'kick', value: gates.C2 }))),
      el.mul(0.6, dt.clap(800, 0.005, 0.204, el.const({ key: 'clap', value: gates.D2 })))
    )

    core.render(out, out)
  })
}
