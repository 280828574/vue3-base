import { defineStore } from 'pinia'

export const useCollapse = defineStore({
  id: 'useCollapse',
  state: () => {
    return {
      isCollapse: false,
    }
  },
  actions: {
    change(val) {
      this.isCollapse = val
    },
  },
})
