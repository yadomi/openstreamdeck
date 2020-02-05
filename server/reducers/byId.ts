const byId = tiles => {
  return tiles.reduce((sum, value, key) => {
    sum[key] = value
    return sum
  }, {})
}

export default initialState => (store = byId(initialState), action: { [type: string]: string }) => {
  switch (action.type) {
    case 'TILE/SET_STATE':
      return {
        ...store,
        [action.id]: {
          ...store[action.id],
          state: {
            isLocked: action.isLocked
          }
        }
      }
    default:
      return store
  }
}
