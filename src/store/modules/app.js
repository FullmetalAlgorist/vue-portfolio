const schema = require('../../../schema.json')

export default {
  namespaced: true,

  state: {
    schema,
    initials: schema.basics.name.split(' ').map(name => name.charAt(0)).join(''),
    killPenrose: false,
    killLines: false,
    triangle:  2,
    // s: 0
  },
  mutations: {
    death (state) {
      // `state` is the local module state
      state.triangle = state.triangle + .5;
      state.killPenrose =  !state.killPenrose;
    },
    death2 (state){
      state.killLines = !state.killLines;
    },
    // plusS (state){
    //   state.s++;
    // },
    // minusS(state){
    //   state.s--;
    // },
    // setState(state, blah){
    //   state.s = blah;
    // }
  },
  getters: {
    whatShape(state){
      return state.triangle%2 == 0;
    }
  }
}
