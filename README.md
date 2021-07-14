# elementary-bits

This is me playing around with [elementary](https://github.com/nick-thompson/elementary).

On linux, you will need alsa for vmidi demo:

```sh
sudo apt install libasound2-dev
```

It illustrates dynamic-loading (there is a central runtime that loads demo files) and virtual-midi stuff (which I will probly use for emulator.)


## usage

```sh
npm i         # install dependencies

npm run heart # demo - heart
npm run seq   # demo - seq
npm run midi  # demo - midi
npm run vmidi # demo - vmidi
```

Demos watch for file-changes, so you can leave them running in the background while you work on stuff.

## demos

I am wrapping [drumsynth](https://github.com/nick-thompson/drumsynth) in various ways to play around with interfacing things.


# heart

Simple pulse using `train` to make a very simple kick-beat. This seemed liek the best "hello world" for what I am doing in other demos.


### seq

This just uses a built-in sequencer to play a drum-beat. This is essentially the example in the [drumsynth](https://github.com/nick-thompson/drumsynth) repo.

The key trick is `modulate` to modulate drum params to make them sound cool, and using `el.seq` to setup a 0/1 sequences for gates.


### midi

This creates a drum-machine that you can play with any midi keyboard (plug it in first)


### vmidi

This creates a drum-machine with a virtual midi device you can route to in other software.
