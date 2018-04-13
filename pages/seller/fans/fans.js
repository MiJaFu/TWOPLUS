// pages/seller/fans/fans.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        fansList: [
            {
                nickName: "天王盖地虎",
                vip_grade: "普通会员",
                img_url: "http://img02.sogoucdn.com/app/a/100520024/36407026935bbbce6d8dcf1865d50d28",
                signature: "比卡丘，去吧~~~"
            }, {
                nickName: "提莫一米五",
                vip_grade: "普通会员",
                img_url: "http://img04.sogoucdn.com/app/a/100520024/98731fbaedb861f2d0d4b0e3340dc7ec",
                signature: "电死这二哈~~~~"
            }, {
                nickName: "宝塔镇河妖",
                vip_grade: "SVIP",
                img_url: "http://img03.sogoucdn.com/app/a/100520024/76b45e5f78b6511cf601a6ec552e8a2f",
                signature: "翻滚吧奥特曼"
            }, {
                nickName: "广州王小二",
                vip_grade: "MVIP",
                img_url: "http://img01.sogoucdn.com/app/a/100520024/003e0e465bbcde9c189824c09ac94824",
                signature: "比卡丘，去吧~~~"
            }, {
                nickName: "还有谁！！！",
                vip_grade: "普通会员",
                img_url: "http://img01.sogoucdn.com/app/a/100520024/433c8fe8bbfd4d1ce3d1a660c9c219ef",
                signature: "比卡丘，去吧~~~"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '粉丝列表'
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