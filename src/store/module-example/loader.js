class Item {
  constructor (title, url, img, background, color, desc1, desc2, desc3, desc4) {
    this.title = title
    this.url = url
    this.img = img
    this.background = background
    this.color = color
    this.desc1 = desc1
    this.desc2 = desc2
    this.desc3 = desc3
    this.desc4 = desc4
  }
}
export default {
  state: {
    items: []
  },
  mutations: {
    createItems (state, payload) {
      state.items.push(payload)
    },
    loadItems (state, payload) {
      state.items = payload
    }
  },
  actions: {
    createItems () {
      const newItem = new Item()
      this.resource.save({}, newItem)
    },
    getItems () {
      this.resource.get().then(response => response.json())
        .then(items => {
          this.items = items
        })
    }
  },
  getters: {
    itemsGetters (state) {
      console.warn(state.items)
      return state.items
    }
  }
}
