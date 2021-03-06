const app = getApp()

Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },

  /**
   * 组件的对外属性
   */
  properties: {
  },

  /**
   * 页面的初始数据
   */
  data: {
    baseInfo: app.data.baseInfo
  },

  attached() {
    console.log(app.data)

  },

  /**
   * 组件的方法列表
   */
  methods: {
    openPage(e) {
      var pageTarget = e.currentTarget.dataset.target
      console.log(pageTarget)
    },

    BackPage() {
      wx.navigateBack({
      });
    },

    toHome() {
      wx.reLaunch({
        url: '/pages/home/index',
      })
    }
  }
})