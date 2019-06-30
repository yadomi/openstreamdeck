export default store => {
  return next => action => {
    if (/PLAYER/.test(action.type)) {
      switch (action.type) {
        case "PLAYER/PLAY_FILE":
          require("node-wav-player").play({
            path: action.args.filepath
          });
          break;
      }
    }

    return next(action);
  };
};
