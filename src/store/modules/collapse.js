/*
 * @Date: 2021-10-21 16:54:14
 * @Description:侧边栏状态
 */

const state = {
  isCollapse: false,
};

const mutations = {
  // 进行数据更新，改变数据状态
  CHANGE_COLLAPSE(state) {
    state.isCollapse = !state.isCollapse;
  },
};

const actions = {
  //执行动作，数据请求
  changeCollapse({ commit }) {
    commit('CHANGE_COLLAPSE');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
