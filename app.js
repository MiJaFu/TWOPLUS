//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    
   
  },
  globalData: {
    userInfo: null,
    url:'http://192.168.0.126:9091/front',
    // url:'http://2-plus.cn:9091/front',
    // url:'http://119.23.105.160:9090/front',
    public_key:'918edda1812f4203368792e0ac32df72'
  }
})