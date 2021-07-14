// this is a basic midi drum machine that starts a virtual midi device (so you can route to it)

import core from 'elementary-core'
import el from '@nick-thompson/elementary'
import dt from '@nick-thompson/drumsynth'
import midi from 'midi'
import noteName from 'midi-note'

const gates = {
  C2: 0, // kick
  D2: 0 // clap
}

const input = new midi.Input('Elementary Drum Machine', true)

input.on('message', (deltaTime, message) => {
  console.log(`m: ${message} d: ${deltaTime}`);
})

export default function () {
  const out = el.add(
    el.mul(0.7, dt.kick(40, 0.104, 0.4, 0.4, 4, el.const({ key: 'kick', value: gates.C2 }))),
    el.mul(0.6, dt.clap(800, 0.005, 0.204, el.const({ key: 'clap', value: gates.D2 })))
  )
  core.render(out, out)
}
