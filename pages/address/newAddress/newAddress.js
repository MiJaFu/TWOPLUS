// pages/address/newaddress/newaddress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        focus: false,

        region: [],
        address: {
            name: '',
            tel: '',
            address: ''
        }
    },
    bindRegionChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            region: e.detail.value
        })
    },
    input(e) {
        var current = e.currentTarget.dataset.current;
        var val = e.detail.value
        var address = this.data.address;
        var region = this.data.region;
        if (region.length > 0) {
            address.province = region[0];
            address.city = region[1];
            address.district = region[2];
            this.setData({
                address: address
            })
        }
        if (current == 0) {
            address.name = val;
            this.setData({
                address: address
            })
        } else if (current == 1) {
            address.tel = val;
            this.setData({
                address: address
            })
        } else if (current == 3) {
            address.address = val;
            this.setData({
                address: address
            })
        }
    },
    submit() {
        var region = this.data.region;
        var address = this.data.address;
        console.log(address)
        if (!region.length) {
            wx.showToast({ title: '省市区不能为空', icon: 'none' });
            return;
        }
        if (!address.name) {
            wx.showToast({ title: '姓名不能为空', icon: 'none' })
            return;
        }
        if (!address.tel) {
            wx.showToast({ title: '联系方式不能为空', icon: 'none' })
            return;
        }
        if (!address.address) {
            wx.showToast({ title: '详细地址不能为空', icon: 'none' })
            return;
        }
        wx.setStorage({
            key: 'address',
            data: this.data.address
        });
        wx.navigateBack({
            delta: 1,
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var address = this.data.address;
        var region = this.data.region;
        if (options.edit) {
            var edit = wx.getStorageSync('editaddress');
            address.name = edit.name;
            address.tel = edit.tel;
            address.address = edit.address;
            region[0] = edit.province;
            region[1] = edit.city;
            region[2] = edit.district;
            this.setData({
                address: address,
                region: region
            })
        } else {
            this.setData({
                address: {
                    name: '',
                    tel: '',
                    address: ''
                },
                region: []
            })
        }

        wx.setNavigationBarTitle({
            title: '新增地址'
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
        this.setData({
            focus: true
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