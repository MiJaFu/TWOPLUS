// pages/zhuanlan/zhuanlan.js
//获取应用实例
const app = getApp()
const hex_md5 = require("../../utils/hex_md5.js");
var util = require("../../utils/util.js");
Page({
    /**
     * 页面的初始数据
     */
    data: {
        current: 999,
        display: "",
        rank: 999, //排序
        brandArr: [],
        page: 1,
        cate: [],
        optionCate: [],
        brand: [],  //品牌
        goodsList: [], //商品
        totalPage: 999,
        //品类-- 大类号数
        bigCategoryNum: 0,
        // 已选小类
        choosecategory: [],
        // 小类遍历时的数据
        smallCategory: ["手提包", "单肩包", "双肩包", "钱包", "手提包", "手提包", "手提包", "手提包", "各种包包", "各种包包", "各种包包", "各种包包", "各种包包", "各种包包", "各种包包"],
        smallCategoryAll: [
            {
                categoryName: "箱包",
                choose: [],
                category: ["手提包", "单肩包", "双肩包", "钱包", "手提包", "手提包", "手提包", "手提包", "各种包包", "各种包包", "各种包包", "各种包包", "各种包包", "各种包包", "各种包包"],
            },
            {
                categoryName: "配饰",
                choose: [],
                category: ["手链", "手链", "手链", "手链", "手链", "手链", "手链", "手链", "手链", "手链", "手链", "各种手链", "各种手链", "各种手链", "各种手链", "全都是手链"],
            },
            {
                categoryName: "鞋靴",
                choose: [],
                category: ["雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "雪靴", "各种雪靴"],
            },
            {
                categoryName: "服饰",
                choose: [],
                category: ["白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "白寸衫", "各种白寸衫"],
            },
            {
                categoryName: "首饰",
                choose: [],
                category: ["水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "水晶耳坠", "各种水晶耳坠"],
            },
            {
                categoryName: "s手表",
                choose: [],
                category: ["手表", "手表", "手表", "手表", "手表", "手表", "手表", "手表", "手表", "手表", "手表", "手表", "手表", "手表", "各种手表"],
            },
            {
                categoryName: "其他",
                choose: [],
                category: ["海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠", "海底黑珍珠"]
            }

        ],
        qqq: 0,
        screenData: {
            gender: 0,
            price: 0,
            minPrice: 0,
            maxPrice: 1000,
            chengse: 1
        }
    },

    clickOption(e) {
        this.setData({
            current: e.currentTarget.dataset.current
        })
    },
    clickFix_top() {
        this.setData({
            display: "block"
        })
    },
    // 排序
    display_hidden(e) {
        this.setData({
            display: "hidden",
            rank: e.currentTarget.dataset.rank || rank || ""
        })
        var that = this;
        var rank = this.data.rank;
        var page = this.data.page;
        var brandArr = this.data.brnadArr;
        var json = {};
        if (rank <= 4) {
            json = {
                orderBy: rank,
                page: page,
                key: app.globalData.public_key
            }
            json = util.toMap(json);
            sign = hex_md5.hex_md5(json);
            this.setData({
                page: 1,
                current: 999,
                display: "",
                brandArr: [],
                page: 1,
                cate: [],
                totalPage: 999,
            })
            this.request(that, {
                orderBy: rank,
                page: page,
                sign: sign
            })

        }

    },
    // 品牌
    brand(e) {
        var brandArr = this.data.brandArr;
        var currentTarget = e.currentTarget.dataset.brand;
        // 判断 点击是是否（ brandArr[currentTarget] == true ）为第二次点击相同目标
        if (brandArr[currentTarget] == currentTarget) {
            // 将目标（true）替换为 false 占位
            brandArr.splice(currentTarget, 1, undefined);
            this.setData({
                brandArr: brandArr,
            })
            return;
        }
        // 将第一次点击目标的状态保存入数组
        brandArr[currentTarget] = currentTarget;

        this.setData({
            brandArr: brandArr,
        })
    },
    // 点击品牌确认按钮
    brandSubmit() {
        var that = this;
        var page = this.data.page;
        var brandArr = this.data.brandArr;
        brandArr = JSON.stringify(brandArr).replace('[', '').replace(']', '').replace(/"/g, '').replace(/null,/g, '').replace(/,/g, ';');
        var json = {
            brandId: brandArr,
            page: page,
            key: app.globalData.public_key
        }
        json = util.toMap(json).replace(/;/g, ',');
        sign = hex_md5.hex_md5(json);
        this.setData({
            display: 'hide',
            page: 1,
            current: 999,
            display: "",
            rank: 999, //排序
            page: 1,
            cate: [],
            totalPage: 999,
        })
        this.request(that, {
            brandId: brandArr.replace(/;/g, ','),
            page: page,
            sign: sign
        })

    },
    // 重置按钮
    reset() {
        this.setData({
            brandArr: [],
            bigCategoryNum: 0,
            smallCategory: this.data.smallCategoryAll[0],
            screenData: { gender: 0, price: 0, chengse: 0 }
        });
    },

    bigcategory(e) {
        var bigCate = this.data.optionCate;
        var smallCategoryAll = this.data.smallCategoryAll;
        var bigC = e.currentTarget.dataset.bigcategory;
        // 将已选数据全部存入对应的choose数组中
        smallCategoryAll[this.data.bigCategoryNum].choose = this.data.choosecategory;
        // 重置已选数组
        this.setData({
            smallCategoryAll: smallCategoryAll
            // choosecategory: []
        });
        // 这次点击的大类号数
        var current = e.currentTarget.dataset.bigcategory;
        // 将这次点击的大类已选的小类数据调出 回显
        // var choosecategory = this.data.smallCategoryAll[current].choose;
        // console.log(choosecategory)
        this.setData({
            bigCategoryNum: current,
            smallCategory: bigCate[bigC].types,
            // choosecategory: choosecategory
        })
        // console.log(this.data.bigCategoryNum);
    },
    // 小类
    smallcategory(e) {
        var id = e.currentTarget.dataset.id;
        // 将已选小类取出
        var choose = this.data.choosecategory;
        var currentTarget = e.currentTarget.dataset.category;
        // 第一次进不来 ， 判断当前点击的目标是否已经存进已选小类中
        if (choose[id] == id) {
            // 将目标用undefined替换 占位
            choose.splice(id, 1, 'undefined');
            this.setData({
                choosecategory: choose,
            })
            return;
        }
        // 将点击的类目号数存进已选小类数组中
        choose[id] = id;
        this.setData({
            choosecategory: choose,
        })
    },
    // 品类提交按钮
    cateSubmit() {
        var choose = this.data.choosecategory;
        var that = this;
        var page = this.data.page;
        choose = JSON.stringify(choose).replace('[', '').replace(']', '').replace(/"/g, '').replace(/null,/g, '').replace(/,/g, ';');
        var json = {
            typeId: choose,
            page: page,
            key: app.globalData.public_key
        }
        json = util.toMap(json).replace(/;/g, ',');
        sign = hex_md5.hex_md5(json);
        this.request(that, {
            typeId: choose.replace(/;/g, ','),
            page: page,
            sign: sign
        })
        this.setData({
            display: 'hide',
            page: 1,
            current: 999,
            rank: 999,
            brandArr: [],
            totalPage: 999,
        })
    },
    other_gender(e) {
        var current = e.currentTarget.dataset.gender;
        var screenData = this.data.screenData;
        screenData.gender = current;
        this.setData({
            screenData: screenData
        })
    },
    other_price(e) {
        console.log(e.currentTarget.dataset)
        var current = e.currentTarget.dataset.price;
        var min = e.currentTarget.dataset.minprice;
        var max = e.currentTarget.dataset.maxprice;
        var screenData = this.data.screenData;
        screenData.price = current;
        screenData.minPrice = min;
        screenData.maxPrice = max;
        this.setData({
            screenData: screenData
        })
    },
    other_chengse(e) {
        var current = e.currentTarget.dataset.id;
        console.log(current)
        var screenData = this.data.screenData;
        screenData.chengse = current;
        this.setData({
            screenData: screenData
        })
    },
    // 筛选提交按钮
    screen() {
        var screenData = this.data.screenData;
        var that = this;
        var page = this.data.page;
        var json = {
            people: screenData.gender,
            minPrice: screenData.minPrice,
            maxPrice: screenData.maxPrice,
            qualityId: screenData.chengse,
            page: page,
            key: app.globalData.public_key
        }
        console.log(json)
        json = util.toMap(json);
        sign = hex_md5.hex_md5(json);
        this.request(that, {
            people: screenData.gender,
            minPrice: screenData.minPrice,
            maxPrice: screenData.maxPrice,
            qualityId: screenData.chengse,
            page: page,
            sign: sign
        });
        this.setData({
            display: 'hide',
            page: 1
        })
    },
    // 将获取品牌、类目、成色等请求商品数据
    request(that, data) {
        util.request(that, '/product/gainList', data, function callBack(res) {
            console.log(res);
            that.setData({
                goodsList: res.data.productInfos,

            })
        })
    },
    // 点击遮罩层的时候隐藏
    shade() {
        this.setData({
            display: 'hide'
        })
    },
    lower(e) {
        var goodsList = this.data.goodsList;
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
                var c = goodsList.concat(res.data.productInfos);
                wx.hideLoading();
                that.setData({
                    goodsList: c,
                    totalPage: res.data.totalPage
                })
            })
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var cate = this.data.cate;

        var that = this;
        var page = this.data.page;
        if (options.goodsId) {
            cate.push(options.goodsId);
            this.setData({
                cate: cate
            })
            var json = {
                page: page,
                typeId: options.goodsId,
                key: app.globalData.public_key
            };
            json = util.toMap(json);
            var sign = hex_md5.hex_md5(json);
            util.request(that, '/product/gainList', {
                page: 1,
                typeId: options.goodsId,
                sign: sign
            }, function callBack(res) {
                console.log(res)
                that.setData({
                    goodsList: res.data.productInfos
                })
            })
        } else {
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
                console.log(res.data.productInfos)
                wx.hideLoading();
                that.setData({
                    goodsList: res.data.productInfos,
                    totalPage: res.data.totalPage
                })
            })
        }
        var jsonKey = {
            key: app.globalData.public_key
        }
        jsonKey = util.toMap(jsonKey);
        var signKey = hex_md5.hex_md5(jsonKey);
        request(that, '/brand/gainBrand', res => {
            that.setData({
                brand: res.data.brandInfos
            })
        });

        request(that, '/type/gainType', res => {
            that.setData({
                optionCate: res.data.typeInfo,
                smallCategory: res.data.typeInfo[0].types
            })
        });
        request(that, '/quality/gainList', res => {
            console.log(res, "成色")
            that.setData({
                chengse: res.data.qualityInfos
            })
        });
        function request(that, url, call) {
            util.request(that, url, {
                sign: signKey
            }, function callBack(res) {
                call(res)
            })
        }
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