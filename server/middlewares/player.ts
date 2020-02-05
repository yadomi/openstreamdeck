import { spawn } from 'child_process'
// const play = (filepath) => {
//   const command = "C:/bin/ffplay.exe"; //FIXME: do something better
//   const child = spawn(command, ['-i', filepath, '-autoexit', '-nodisp']);
//   child.on('exit', () => {
//     child.kill()
//   })
// }

const play = filepath => {
  return new Promise((resolve, reject) => setTimeout(resolve, 5000))
}

const middleware = config => store => {
  return next => async action => {
    if (/PLAYER/.test(action.type)) {
      switch (action.type) {
        case 'PLAYER/PLAY_FILE':
          next({ type: 'TILE/SET_STATE', id: action.from, isLocked: true })
          await play(action.args.filepath)
          next({ type: 'TILE/SET_STATE', id: action.from, isLocked: false })
          break
      }
    }

    return next(action)
  }
}

export default {
  name: 'player',
  register: middleware
}
