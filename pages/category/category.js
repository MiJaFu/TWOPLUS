// pages/category/category.js
var toViewItem = ['Bags', 'Accs', 'boots', 'costumes', 'jewelrys', 'watches', 'others'];
var word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const app = getApp()
const hex_md5 = require("../../utils/hex_md5.js");
var util = require("../../utils/util.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0,
        asideCurrent: 0,
        typeInfo: [
            {
                id: '111',
                img: '',
                name: '箱包',
                pid: '111',
                types: [
                    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
                ]
            }

        ],

        toView: '',
        toword: '',
        scrollTop: '',
        swiperTab: 0,
        knowBrand: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
        word: word,
        allBrand: [
            { word: "A", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "B", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "C", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "D", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "E", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "F", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "G", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "H", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "I", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "J", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "K", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "L", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "M", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "N", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "O", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "P", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "Q", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "R", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "S", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "T", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "U", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "V", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "W", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "X", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "Y", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
            { word: "Z", brand: ["Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王", "Alexander Wang 阿历山大 王"] },
        ]
    },

    clickNO1(e) {
        this.setData({
            currentTab: e.currentTarget.dataset.current
        })
    },
    clickAside: function (e) {

        this.setData({
            toView: 'cate' + e.target.dataset.current,
            asideCurrent: e.target.dataset.current
        })
    },
    scroll(e) {
        var top = e.detail.scrollTop;
        // 监视当前滚动条的位置并切换大类样式
        for (var i = 0; i < 7; i++) {
            if (top < 276) {
                this.setData({
                    asideCurrent: 0
                })
                break;
            }
            if (top > 276 + 400 * i && top < 276 + 400 * (i + 1)) {
                this.setData({
                    asideCurrent: i + 1
                })
                break;
            }
            // console.log(this.data.asideCurrent)
        }

    },
    swiper(e) {
        this.setData({
            currentTab: e.detail.current
        })
    },
    toview(e) {

        this.setData({
            toword: word[e.currentTarget.dataset.toview]
        })
    },
    request(url, data, resCallBack) {
        var that = this;
        wx.request({
            url: app.globalData.url + url,
            data: data,
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {
                resCallBack(res);

            },
            fail: function (res) { },
            complete: function (res) { },
        })
    },
    cateRequest() {
        var that = this;
        var json = {
            key: app.globalData.public_key
        };
        json = util.toMap(json);
        var sign = hex_md5.hex_md5(json);
        this.request('/type/gainType', { 'sign': sign }, function callback(res) {
            console.log(res.data.typeInfo)
            that.setData({
                cateList: res.data.typeInfo
            })
        })
    },
    bindcate(e) {
        var id = e.currentTarget.dataset.cate;
        wx.navigateTo({
            url: '../zhuanlan/zhuanlan?goodsId=' + id
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        wx.setNavigationBarTitle({
            title: '分类'
        })
        that.cateRequest();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

})