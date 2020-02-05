import { spawn } from 'child_process'

const play = (filepath) => {
  const command = "C:/bin/ffplay.exe"; //FIXME: do something better
  const child = spawn(command, ['-i', filepath, '-autoexit', '-nodisp']);
  child.on('exit', () => {
    child.kill()
  })
}

export default store => {
  return next => action => {
    if (/PLAYER/.test(action.type)) {
      switch (action.type) {
        case "PLAYER/PLAY_FILE":
          play(action.args.filepath);
          break;
      }
    }

    return next(action);
  };
};
