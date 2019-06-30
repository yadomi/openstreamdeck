const initialState = {
  "1": {
    name: "Ouuiii",
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage:
        "url(https://media.ouest-france.fr/v1/pictures/cb32dff126e3f90b0bda568c4d1d1106-julien-lepers-son-licenciement-divise-encore-un-juge-professionnel-la-rescousse.jpg?width=1260&height=712&focuspoint=50%2C24&cropresize=1&client_id=cmsfront&sign=1aab665c7d7998812164a3e202c96676ea825e293cb79feff9702c98e56a14bc)"
    },
    actions: [
      {
        type: "PLAYER/PLAY_FILE",
        args: {
          filepath: "Y:/projects/Assets/Sample/julien.wav"
        }
      }
    ]
  },
  "2": {
    name: "Mute Speaker",
    actions: [{ type: "AUDIO/MUTE", args: { device: "speaker" } }]
  },
  "3": {
    name: "Mute Mic",
    actions: [{ type: "AUDIO/MUTE", args: { device: "mic" } }]
  }
};

export default (store = initialState, action: { [type: string]: string }) => {
  switch (action.type) {
    default:
      return store;
  }
};
