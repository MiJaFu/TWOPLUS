// pages/order/takeOrder/takeOrder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        block: true,
        address: {}
    },
    addAddress() {
        wx.navigateTo({
            url: '../../address/address'
        })
    },
    submit() {
        if (wx.getStorageSync("address")) {
            wx.navigateTo({
                url: '../payOrder/payOrder'
            })
        }else{
            wx.showToast({
                title: '请填写收货地址',
                icon:'none'
            })
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '确认订单'
        });

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        if (wx.getStorageSync("address")) {
            this.setData({
                block: false,
                address: wx.getStorageSync("address")
            })
        }


    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})