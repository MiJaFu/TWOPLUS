//index.js
//获取应用实例
const app = getApp()
const hex_md5 = require("../../utils/hex_md5.js");
var util = require("../../utils/util.js");

Page({
    data: {
        src: [
            "http://img02.sogoucdn.com/app/a/100520020/3a8eceb1f401fea9d84cd0ce9845e752",
            "http://img04.sogoucdn.com/app/a/100520020/f758447f3f1f3a9b68517926976ba15b",
            "http://img02.sogoucdn.com/app/a/100520024/46b5b5b7d288ede45e91009d940e7708"
        ],
        goodsList: [],
        cateList: [],
        current: 999,
        page: 1,
        totalPage: null,
        position: 1,
        love: '../../image/icons/love.png',
        redlove: '../../image/icons/redlove.png',

    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '自定义转发标题',
            path: '/page/index',
            success: function (res) {
                // 转发成功
            },
            fail: function (res) {
                // 转发失败
            }
        }
    },
    nav(e) {
        var nav = e.currentTarget.dataset.nav;
        wx.navigateTo({
            url: '../zhuanlan/zhuanlan?nav=' + nav + ''
        })
    },
    zhuanglan(e) {
        var cate = e.currentTarget.dataset.cate;
        wx.navigateTo({
            url: '../zhuanlan/zhuanlan?cate=' + cate + ''
        })
    },
    cate(e) {
        var current = parseInt(e.currentTarget.dataset.current);
        if (current == 999) {
            this.goodsRequest(1);
            this.setData({
                current: current,
                page: 1
            });
            return;
        }
        var cate = this.data.cateList;
        var id = cate[current].types;
        var idArr = [];
        for (var i = 0; i < id.length; i++) {
            idArr.push(id[i].id);
        }
        id = JSON.stringify(idArr).replace('[', '').replace(']', '').replace(/"/g, '');
        var page = this.data.page;
        this.setData({
            current: current,
            page: 1
        })
        var that = this;
        var json = {
            key: app.globalData.public_key,
            page: page,
            typeId: id,
        };

        json = JSON.stringify(util.objKeySort(json));
        // ele.replace(/}/g, '').replace(/:/g, '=').replace(/,/g, ', ').replace(/"/g, '').split('{')[1];
        json = json.replace(/}/g, '').split('{')[1].replace(/"/g, '').replace(/:/g, '=').replace('page=1,', 'page=1, ').replace('key=918edda1812f4203368792e0ac32df72,', 'key=918edda1812f4203368792e0ac32df72, ')

        var sign = hex_md5.hex_md5(json);
        util.request(that, '/product/gainList', {
            'typeId': id,
            'sign': sign,
            'page': page
        }, function callBack(res) {
            that.setData({
                goodsList: res.data.productInfos,
                totalPage: res.data.totalPage
            })
        })
    },
    togoodsDetail(e) {
        var goods = e.currentTarget.dataset.goods;
        wx.navigateTo({
            url: '../goodsDetail/goodsDetail?goods=' + goods + ''
        })
    },
    love(e) {
        var num = e.currentTarget.dataset.love;
        var goods = this.data.goodsList;
        if (goods[num].love == 0) {
            goods[num].love = 1;
            this.setData({
                goodsList: goods,

            })
        } else {
            goods[num].love = 0;
            this.setData({
                goodsList: goods
            })
        }
        wx.request({
            url: '',
            data: '',
            header: {},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: function (res) {

            }
        })
    },
    scroll(e) {

        var top = e.detail.scrollTop;

        var page = this.data.page;
        // console.log(e)

        if (top > 477) {
            this.setData({
                position: true
            })
        } else {
            this.setData({
                position: false
            })
        }
    },
    lower(e) {
        var page = this.data.page;
        var totalPage = this.data.totalPage;
        if (page == totalPage) {

            page = page - 2;
            wx.showToast({
                title: '已经到底了',
                icon: 'none',
                duration: 500,
                mask: true
            });
            return;
        } else {
            page = page + 1;
            this.setData({
                page: page
            })
            this.goodsRequest(page);
        }

    },
    goodsRequest(page) {
        var goodsList = this.data.goodsList;
        var that = this;
        var json = {
            page: page,
            key: app.globalData.public_key
        };
        json = util.toMap(json);
        var sign = hex_md5.hex_md5(json);
        util.request(that, '/product/gainList', {
            'sign': sign,
            'page': page
        }, function callBack(res) {
            console.log(res.data.productInfos, "res")
            var c = goodsList.concat(res.data.productInfos);

            wx.hideLoading();
            that.setData({
                goodsList: c,
                totalPage: res.data.totalPage
            })
        })
    },
    cateRequest() {
        var that = this;
        var json = {
            key: app.globalData.public_key
        };
        json = util.toMap(json);
        var sign = hex_md5.hex_md5(json);
        util.request(that, '/type/gainType', { 'sign': sign }, function callback(res) {
            console.log(res.data.typeInfo)
            that.setData({
                cateList: res.data.typeInfo
            })
        })
    },
    onLoad() {
        var that = this;
        wx.showLoading({
            title: '加载中',
            mask: true,
            success: function (res) {
                that.cateRequest();
                that.goodsRequest(1);
            },
            fail: function (res) { },
            complete: function (res) { },
        })

    }
})
