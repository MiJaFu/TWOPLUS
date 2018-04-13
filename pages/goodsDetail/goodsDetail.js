// pages/goodsDetail/goodsDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodInfo: {
            swiper_img: [
                "http://img02.sogoucdn.com/app/a/100520020/3a8eceb1f401fea9d84cd0ce9845e752",
                "http://img04.sogoucdn.com/app/a/100520020/f758447f3f1f3a9b68517926976ba15b",
                "http://img02.sogoucdn.com/app/a/100520024/46b5b5b7d288ede45e91009d940e7708"
            ],
            chengse: "99新",
            title: "GUCCI 古驰包包",
            newPrice: "5000.00",
            oldPrice: "6000.00",
            goodDesc: "如果你无法简洁的表达你的想法，那只说明你还不够了解它。 阿尔伯特·爱因斯坦"
        },
        goodsList: [
            {
                img_url: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a03058afa40f4bfb7d42e8e0054f78f0f63618a1.jpg',
                chengse: '99新',
                brand: 'GUCCI',
                title: '很漂亮的手表',
                price: '1888.88',
                down: '18888'
            },
            {
                img_url: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a03058afa40f4bfb7d42e8e0054f78f0f63618a1.jpg',
                chengse: '99新',
                brand: 'GUCCI',
                title: '很漂亮的手表',
                price: '1888.88',
                down: '10'
            }, {
                img_url: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a03058afa40f4bfb7d42e8e0054f78f0f63618a1.jpg',
                chengse: '99新',
                brand: 'GUCCI',
                title: '很漂亮的手表',
                price: '1888.88',
                down: '1000'
            }, {
                img_url: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a03058afa40f4bfb7d42e8e0054f78f0f63618a1.jpg',
                chengse: '99新',
                brand: 'GUCCI',
                title: '很漂亮的手表',
                price: '1888.88',
                down: '100'
            }, {
                img_url: 'https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/a03058afa40f4bfb7d42e8e0054f78f0f63618a1.jpg',
                chengse: '99新',
                brand: 'GUCCI',
                title: '很漂亮的手表',
                price: '1888.88',
                down: '10000'
            },
        ],
        show: "hide"
    },
    // 展开商品图片
    unfold() {
        this.setData({
            show: "show"
        })
    },
    // 收起商品图片
    packUp() {
        this.setData({
            show: "hide"
        })
    },

    // 立即购买
    buy() {
        wx.navigateTo({
            url: '../order/takeOrder/takeOrder'
        })
    },

    // 加入购物车
    tocart() {
        wx.showToast({
            title: '加入购物车成功',
            icon: 'success',
            // image: '',
            duration: 1000,
            mask: true
        })
    },
    toseller() {
        wx.navigateTo({
            url: '../seller/seller'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
        wx.setNavigationBarTitle({
            title: '商品详情'
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