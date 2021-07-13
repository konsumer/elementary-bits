# elementary-bits

This is me playing around with [elementary](https://github.com/nick-thompson/elementary).

On linux, you will need alsa:

```sh
sudo apt install libasound2-dev
```

## usage

```sh
npm i         # install dependencies

npm run seq   # demo - seq
npm run midi  # demo - midi
npm run vmidi # demo - vmidi
```

## demos

I am wrapping [drumsynth](https://github.com/nick-thompson/drumsynth) in various ways to play around with interfacing things.

### seq

This just uses a built-in sequencer to play a drum-beat. This is essentially the example in the [drumsynth](https://github.com/nick-thompson/drumsynth) repo.


### midi

This creates a drum-machine that you can play with any midi keyboard (plug it in first)


### vmidi

This creates a drum-machine with a virtual midi device you can route to in other software.
