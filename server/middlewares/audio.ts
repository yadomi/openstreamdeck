const middleware = config => store => {
  const manager = {}

  return next => action => {
    if (/AUDIO/.test(action.type)) {
      switch (action.type) {
        case 'AUDIO/MUTE':
          manager[action.args.device].toggle()
          break
      }
    }

    return next(action)
  }
}

export default {
  name: 'audio',
  register: middleware
}
