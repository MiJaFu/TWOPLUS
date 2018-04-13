// pages/order/payOrder/payOrder.js
var timer = null;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        checked: '../../../image/icons/checked.png',
        redchecked: '../../../image/icons/redchecked.png',
        current: 0,
        shuoming: false,
        h: 15,
        m: 0
    },
    checked(e) {
        var current = e.currentTarget.dataset.current;
        this.setData({
            current: current
        })
    },
    pay() {
        clearInterval(timer);
        var current = this.data.current;
        if (current == 0) {
            pay("支付宝");
        } else if (current == 1) {
            pay("微信");
        }
        function pay(way) {
            wx.showToast({
                title: way + '付款成功',
                icon: 'success',
                duration: 500,
                mask: true,
                success: function (res) {
                    setTimeout(function () {
                        wx.reLaunch({
                            url: '../order?key=1'
                        })
                    }, 1000)
                }
            })
        }

    },
    shuoming() {
        this.setData({
            shuoming: true
        })
    },
    close() {
        this.setData({
            shuoming: false
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var h, m;
        var that = this;
        timer = setInterval(function () {
            h = parseInt(that.data.h);
            m = parseInt(that.data.m);
            m--;
            if (m <= 0) {
                m = 59;
                h--;
            }
            if (m < 10) {
                m = '0' + m
            }
            if (h < 10) {
                h = '0' + h
            }
            console.log(m)
            if (h == 0 && m == 0) {
                m = h = '00';
                that.setData({
                    m: m,
                    h: h
                })
                clearInterval(timer);
                return;
            }
            that.setData({
                m: m,
                h: h
            })
        }, 1000)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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