'use strict'

class Animate {
  constructor(animation) {
    if (!animation) {
      animation = [" __(o)=\n \\_~_)\n", "  __(o)=\n  \\_~_)\n", "   __(o)=\n   \\_~_)\n", "    __(o)=\n    \\_~_)\n", "     __(o)=\n     \\_~_)\n", "      __(o)=\n      \\_~_)\n", "       __(o)=\n       \\_~_)\n", "        __(o)=\n        \\_~_)\n", "         __(o)=\n         \\_~_)\n", "          __(o)=\n          \\_~_)\n", "           __(o)=\n           \\_~_)\n", "            __(o)=\n            \\_~_)\n", "             __(o)=\n             \\_~_)\n", "              __(o)=\n              \\_~_)\n", "               __(o)=\n               \\_~_)\n", "                __(o)=\n                \\_~_)\n", "                 __(o)=\n                 \\_~_)\n", "                  __(o)=\n                  \\_~_)\n", "                   __(o)=\n                   \\_~_)\n", "                   __(o)=\n                   \\_~_)\n", "                   __(o)<\n                   \\_~_)\n", "                   __(o)<\n                   \\_~_)\n", "                   __(o)<\n                   \\_~_)\n", "                    >(o)\n                    /( )\\\n", "                    =(o)__\n                     (_~_/\n", "                   =(o)__\n                    (_~_/\n", "                  =(o)__\n                   (_~_/\n", "                 =(o)__\n                  (_~_/\n", "                =(o)__\n                 (_~_/\n", "               =(o)__\n                (_~_/\n", "              =(o)__\n               (_~_/\n", "             =(o)__\n              (_~_/\n", "            =(o)__\n             (_~_/\n", "           =(o)__\n            (_~_/\n", "          =(o)__\n           (_~_/\n", "         =(o)__\n          (_~_/\n", "        =(o)__\n         (_~_/\n", "       =(o)__\n        (_~_/\n", "      =(o)__\n       (_~_/\n", "     =(o)__\n      (_~_/\n", "    =(o)__\n     (_~_/\n", "   =(o)__\n    (_~_/\n", "  =(o)__\n   (_~_/\n", " =(o)__\n  (_~_/\n", "=(o)__\n (_~_/\n", "=(o)__\n (_~_/\n", "=(o)__\n (_~_/\n", ">(o)__\n (_~_/\n", ">(o)__\n (_~_/\n", " (o)=\n/( )\\\n"]
    }

    this.animation = animation

    this.start()
  }

  start() {
    this.animate(this.animation, 0)
  }

  animate(animation, frame) {
    if (!frame) frame = 0

    this.animation = animation

    this.next(frame)
  }

  next(frame) {
    let sprite = this.animation[frame]

    frame = ((this.animation.length - 1) === frame) ? 0 : (frame + 1)

    setTimeout(() => {
      this.clear()
      this.display(sprite)
      this.next(frame)
    }, 100)
  }

  display(sprite) {
    console.log(sprite)
  }

  clear() {
    console.log('\x1B[2J\x1B[0f\x1B[3J')
  }
}
