import core from 'elementary-core'
import el from '@nick-thompson/elementary'
import ds from '@nick-thompson/drumsynth'

const voices = {
  48: { gain: 1.0, gate: 0.0, key: 'k' },
  50: { gain: 1.0, gate: 0.0, key: 's' },
  52: { gain: 1.0, gate: 0.0, key: 'h' }
}

function updateVoiceState (e) {
  if (e && e.type && typeof e.noteNumber === 'number' && voices[e.noteNumber]) {
    if (e.type === 'noteOn') {
      voices[e.noteNumber].gate = 1.0
    }
    if (e.type === 'noteOff') {
      voices[e.noteNumber].gate = 0.0
    }
  }
}

function drumVoice (voice) {
  const gate = el.const({ key: voice.key, value: voice.gate })
  switch (voice.key) {
    case 'k': return el.mul(voice.gain, ds.kick(40, 0.104, 0.005, 0.4, 4, gate))
    case 's': return el.mul(voice.gain, ds.clap(800, 0.005, 0.204, gate))
    case 'h': return el.mul(voice.gain, ds.hat(800, 0.005, 0.204, gate))
    default: console.error(`Unknown instrument: ${voice.key}`)
  }
}

core.on('load', () => {
  core.on('midi', e => {
    console.log(e)
    updateVoiceState(e)
    const out = el.add(Object.keys(voices).map(n => drumVoice(voices[n])))
    core.render(out, out)
  })
})
