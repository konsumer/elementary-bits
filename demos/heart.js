import core from 'elementary-core'
import el from '@nick-thompson/elementary'
import dt from '@nick-thompson/drumsynth'

export const load = () => {
  const out = dt.kick(40, 0.104, 0.4, 0.4, 4, el.train(2))
  core.render(out, out)
}
