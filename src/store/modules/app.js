const schema = require('../../../schema.json')

export default {
  namespaced: true,

  state: {
    schema,
    initials: schema.basics.name.split(' ').map(name => name.charAt(0)).join(''),
    killPenrose: false,
    triangle:  2
  },
  mutations: {
    death (state) {
      // `state` is the local module state
      state.triangle = state.triangle + .5;
      state.killPenrose =  !state.killPenrose;
    }
  },
  getters: {
    whatShape(state){
      return state.triangle%2 == 0;
    }
  }
}
