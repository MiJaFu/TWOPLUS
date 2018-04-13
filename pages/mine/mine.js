// pages/mine/mine.js
//获取应用实例
const app = getApp()
const hex_md5 = require("../../utils/hex_md5.js");
var util = require("../../utils/util.js");

Page({

    /**
     * 页面的初始数据
     */
    data: {
        user: {
            account: 111111,
            headimgurl: '',
            isReg: '',
            key: '',
            opendid: ''
        }
    },


    order(e) {
        var current = e.currentTarget.dataset.current;
        console.log(current)
        wx.navigateTo({
            url: '../order/order?key=' + current + ''
        })
    },
    address() {
        wx.navigateTo({
            url: '../address/address',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    call() {
        wx.makePhoneCall({
            phoneNumber: '13719072342', //仅为示例，并非真实的电话号码
            success(res) {
                wx.showToast({
                    title: '操作成功',
                    duration: 0,
                    mask: true,
                })
            }
        })
    },
    help() {
        wx.navigateTo({
            url: '../help/help'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        var user = this.data.user;
        var $this = this;
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
        wx.getSetting({
            success(res) {

                if (!res.authSetting['scope.userInfo']) {

                    wx.authorize({
                        scope: 'scope.userInfo',
                        success() {
                            // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                            wx.getUserInfo({
                                success: function (res) {
                                    console.log(res)
                                    var uInfo = res.userInfo;

                                    user.avatarUrl = uInfo.avatarUrl;
                                    user.city = uInfo.city;
                                    user.country = uInfo.country;
                                    user.gender = uInfo.gender;
                                    user.nickName = uInfo.nickName;
                                    user.province = uInfo.province
                                    $this.setData({
                                        user: user
                                    })
                                    wx.setStorageSync('user', user)
                                }
                            })
                        },
                        fail: function () {
                            wx.showModal({
                                title: '警告',
                                content: '您点击了拒绝授权,将无法正常显示个人信息,点击确定重新获取授权。',
                                success: function (res) {
                                    if (res.confirm) {
                                        wx.openSetting({
                                            success: function (res) {
                                                if (res.authSetting["scope.userInfo"]) {////如果用户重新同意了授权登录
                                                    // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                                                    wx.getUserInfo({
                                                        success: function (res) {
                                                            console.log(res)
                                                            var uInfo = res.userInfo;
                                                            $this.setData({
                                                                avatarUrl: uInfo.avatarUrl,
                                                                city: uInfo.city,
                                                                country: uInfo.country,
                                                                gender: uInfo.gender,
                                                                nickName: uInfo.nickName,
                                                                province: uInfo.province
                                                            })
                                                            wx.setStorageSync('userInfo', {
                                                                avatarUrl: uInfo.avatarUrl,
                                                                city: uInfo.city,
                                                                country: uInfo.country,
                                                                gender: uInfo.gender,
                                                                nickName: uInfo.nickName,
                                                                province: uInfo.province
                                                            })
                                                        }
                                                    })

                                                }
                                            }, fail: function (res) {

                                            }
                                        })

                                    }
                                }
                            })
                        }
                    })
                } else {
                    wx.showModal({
                        title: '授权状态',
                        content: '已授权',
                    })
                    console.log($this.data)
                    wx.getStorage({
                        key: 'userInfo',
                        success: function (res) {
                            var uInfo = res.data;
                            $this.setData({
                                avatarUrl: uInfo.avatarUrl,
                                city: uInfo.city,
                                country: uInfo.country,
                                gender: uInfo.gender,
                                nickName: uInfo.nickName,
                                province: uInfo.province
                            })
                        }
                    })
                }
            }
        })

        // 登录
        wx.login({
            success: res => {
                // console.log(res.code)
                var json = {//获取code
                    code: res.code,
                    key: app.globalData.public_key
                }
                json = util.toMap(json);
                var sign = hex_md5.hex_md5(json);
                wx.request({ //将code传给后台
                    url: app.globalData.url + '/member/wechatLogin',
                    data: {
                        code: res.code,
                        sign: sign
                    },
                    header: { 'content-type': 'application/x-www-form-urlencoded' },
                    method: 'POST',
                    dataType: 'json',
                    responseType: 'text',
                    success: function (res) {
                        console.log(res);
                        user.account = res.aaccount;
                        user.headimgurl = res.headimgurl;
                        user.isReg = res.isReg;
                        user.key = res.key;
                        user.opendid = res.opendid;
                        that.setData({
                            user: user
                        })
                    },
                    fail: function (res) { },
                    complete: function (res) { },
                })
            }
        })
        wx: wx.setNavigationBarTitle({
            title: 'TWOPLUS',
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