Component({
  options:{
    styleIsolation:'apply-shared'
    // addGlobalClass: true 
  },
  properties: {
    readCount: {
      type: Number,
      value: 0,
    },
    commentCount: {
      type: Number,
      value: 0,
    },
    tags: {
      type: Array,
      value: [],
    },
    categories: {
      type: Array,
      value: [],
    }
  },
})