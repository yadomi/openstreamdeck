import { resolve } from 'path'

const initialize = () => {
  const tiles = require(resolve(__dirname, '../../config.js'))
  return tiles.reduce((sum, value, key) => {
    sum[key] = value;
    return sum;
  }, {})
}

const initialState = initialize();

export default (store = initialState, action: { [type: string]: string }) => {
  switch (action.type) {
    default:
      return store;
  }
};
