// pages/order/wuliu/wuliu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsInfo:

        {
            orderNum: 1104,
            sellerName: "天王盖地虎",
            renzheng: "实名认证",
            status: 2,
            state: "待收货",
            goods: [
                {
                    title: "喵了个咪",
                    count: 1,
                    img_url: "http://img02.sogoucdn.com/app/a/100520024/36407026935bbbce6d8dcf1865d50d28",
                    price: 10000
                }, {
                    title: "北冥有鱼",
                    count: 4,
                    img_url: "http://img04.sogoucdn.com/app/a/100520024/98731fbaedb861f2d0d4b0e3340dc7ec",
                    price: 15000
                }, {
                    title: "二哈狗头",
                    count: 3,
                    img_url: "http://img03.sogoucdn.com/app/a/100520024/76b45e5f78b6511cf601a6ec552e8a2f",
                    price: 2000
                }, {
                    title: "致命诱惑",
                    count: 1,
                    img_url: "http://img01.sogoucdn.com/app/a/100520024/003e0e465bbcde9c189824c09ac94824",
                    price: 3000
                }
            ]
        },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '物流详情'
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