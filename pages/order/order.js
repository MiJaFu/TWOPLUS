// pages/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderAll: [
            {
                orderNum: 1101,
                sellerName: "天王盖地虎",
                renzheng: "实名认证",
                status: 0,
                state: "待付款",
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
            {
                orderNum: 1102,
                sellerName: "天王盖地虎",
                renzheng: "实名认证",
                status: 0,
                state: "待付款",
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
            {
                orderNum: 1103,
                sellerName: "天王盖地虎",
                renzheng: "实名认证",
                status: 1,
                state: "待发货",
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
            {
                orderNum: 1105,
                sellerName: "天王盖地虎",
                renzheng: "实名认证",
                status: 3,
                state: "交易完成",
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
            }, {
                orderNum: 1106,
                sellerName: "天王盖地虎",
                renzheng: "实名认证",
                status: 4,
                state: "已收货",
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
            }
        ],
        order: [],
        checked: 6,
        scrollleft: 0
    },
    option(e) {
        var orderAll = this.data.orderAll;
        var current = e.currentTarget.dataset.current;
        var order = [];
        for (var i = 0; i < orderAll.length; i++) {
            if (orderAll[i].status == current) {
                // order[i] = orderAll[i];
                order.push(orderAll[i])
            }
        }
        if (current == 6) {
            order = orderAll;
        }
        this.setData({
            checked: current,
            order: order
        })
    },
    action(e) {
        var orderAll = this.data.orderAll;
        var action = e.currentTarget.dataset.action;
        var orderNum = e.currentTarget.dataset.ordernum;
        var price = 0;
        if (action == 'pay') {
            for (var i = 0; i < orderAll.length; i++) {
                if (orderAll[i].orderNum == orderNum) {
                    for (var j = 0; j < orderAll[i].goods.length; j++) {
                        price += orderAll[i].goods[j].count * orderAll[i].goods[j].price;
                    }

                }
            }
            wx.showModal({
                title: '订单：' + orderNum + '确认买了吗？',
                content: '劳烦' + price + '元',
                showCancel: true,
                cancelText: '取消',
                confirmText: '确定',
                success: function (res) {
                    if (res.cancel) {
                        return;
                    }

                    wx.showToast({
                        title: '购买成功',
                        icon: 'success',
                        image: '',
                        duration: 1000,
                        mask: true,
                    });
                }
            })
        }
        if (action == 'cancel') {
            console.log("取消订单")
        }
        if (action == 'service') {
            console.log("联系客服")
        }
        if (action == 'delate') {
            console.log("删除订单")
        }
        if (action == 'log') {
            wx.navigateTo({
                url: './wuliu/wuliu'
            })
        }
        if (action == 'receive') {
            wx.showModal({
                title: '确认收货',
                content: '确定货物已经到手了吗？',
                showCancel: true,
                cancelText: '取消',
                confirmText: '确定',
                success: function (res) {
                    if (res.cancel) {
                        return;
                    } else {

                        wx.showToast({
                            title: '收货成功',
                            icon: 'success',
                            duration: 500,
                            mask: true,
                            success: function (res) {
                                // 已收货函数
                            }
                        })
                    }
                }
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '订单'
        })
        var key = options.key;
        if (key == 4) {
            this.setData({
                scrollleft: 300
            })
        }
        var orderAll = this.data.orderAll;
        var current = key;
        var order = [];
        for (var i = 0; i < orderAll.length; i++) {
            if (orderAll[i].status == current) {
                // order[i] = orderAll[i];
                order.push(orderAll[i])
            }
        }
        if (current == 6) {
            order = orderAll;
        }
        this.setData({
            order: this.data.orderAll,
            checked: key,
            order: order
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