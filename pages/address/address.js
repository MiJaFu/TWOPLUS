// pages/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: [
            {
                name: "王小二",
                tel: '13712345678',
                province: '广东省',
                city: '佛山市',
                district: '南海区',
                address: '桂城街道三山国际创智园二期13A座307'
            },
            {
                name: "李二狗",
                tel: '13712345678',
                province: '广东省',
                city: '广州市',
                district: '南海区',
                address: '桂城街道三山国际创智园二期13A座307'
            },
            {
                name: "黄啊六",
                tel: '13712345678',
                province: '广东省',
                city: '清远市',
                district: '南海区',
                address: '桂城街道三山国际创智园二期13A座307'
            }
        ],
        current: '',
        redchecked: '../../image/icons/redchecked.png',
        checked: '../../image/icons/checked.png'
    },
    checked(e) {
        var current = e.currentTarget.dataset.current;
        var address = this.data.address
        wx.setStorageSync("address", address[current])
        this.setData({
            current: current
        })
        // wx.navigateBack({
        //     delta: 1,
        // })
    },
    edit(e) {
        var current = e.currentTarget.dataset.current;
        var address = this.data.address
        wx.setStorageSync("editaddress", address[current]);
        wx.navigateTo({
            url: './newAddress/newAddress?edit=yes'
        })
    },
    delate(e) {
        var current = e.currentTarget.dataset.current;
        var address = this.data.address;
        address.splice(current, 1);
        this.setData({
            address: address
        })
    },
    addAddress() {

        wx.navigateTo({
            url: './newAddress/newAddress'
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '地址管理'
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
        var address = this.data.address;
        var that = this;
        wx.getStorage({
            key: 'address',
            success: function (res) {
                address.push(res.data);
                that.setData({
                    address: address
                })
            },
            fail: function (res) { },
            complete: function (res) { },
        })

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