// this is a simple self-sequenced drum loop

import core from 'elementary-core'
import el from '@nick-thompson/elementary'
import dt from '@nick-thompson/drumsynth'

function modulate (x, rate, amount) {
  return el.add(x, el.mul(amount, el.cycle(rate)))
}

const kickPattern = [1, 0, 0, 1, 0, 1, 1, 0]
const clapPattern = [0, 0, 1, 0, 0, 0, 1, 0]

export default function () {
  const gate = el.train(4)

  const kickSeq = el.seq({ seq: kickPattern, hold: true }, gate)
  const clapSeq = el.seq({ seq: clapPattern }, gate)
  const kick = dt.kick(40, 0.104, modulate(0.255, 1, 0.250), 0.4, 4, kickSeq)
  const clap = dt.clap(800, 0.005, 0.204, clapSeq)

  const hat = dt.hat(
    modulate(317, 1, 900),
    modulate(14000, 4.5, 4000),
    0.005,
    modulate(0.5, 4.1, 0.45),
    gate
  )

  const out = el.add(
    el.mul(0.7, kick),
    el.mul(0.6, clap),
    el.mul(0.75, hat)
  )

  core.render(out, out)
}
