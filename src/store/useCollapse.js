import { defineStore } from 'pinia'

export const useCollapse = defineStore({
  id: 'useCollapse',
  state: () => {
    return {
      isCollapse: true,
    }
  },
  actions: {
    change(val) {
      this.isCollapse = val
    },
  },
})
