// pages/seller/seller.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ischecked:0,
        priceUp:NaN
    },
    checked(e){
        var current = e.currentTarget.dataset.current;
        this.setData({
            ischecked:current
        })
        
        var priceUp = this.data.priceUp;
        console.log(priceUp, !priceUp)
        this.setData({
            priceUp: !priceUp
        })
        if (current < 2) {
            this.setData({
                priceUp: NaN
            })
        }
    },
    seller_other(e){
        var other = e.currentTarget.dataset.other;
        if(other == 0){
            wx.navigateTo({
                url: './fans/fans'
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: 'TA的店铺'
        })
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