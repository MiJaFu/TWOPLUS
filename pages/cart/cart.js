// pages/cart/cart.js
/** 
*删除数组指定下标或指定对象 
*/
Array.prototype.remove = function (obj) {
    for (var i = 0; i < this.length; i++) {
        var temp = this[i];
        if (!isNaN(obj)) {
            temp = i;
        }
        if (temp == obj) {
            for (var j = i; j < this.length; j++) {
                this[j] = this[j + 1];
            }
            this.length = this.length - 1;
        }
    }
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsList: [
            {
                num: 0,
                storeName: "天王盖地虎",
                renZheng: "实名认证",
                image_url: "https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=1009139838,3818694564&fm=77&w_h=121_75&cs=4219338419,1469463618",
                title: "高档手表",
                newPrice: "9999",
                oldPrice: "12000"
            },
            {
                num: 1,
                storeName: "小鸡炖蘑菇",
                renZheng: "企业认证",
                image_url: "https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=1009139838,3818694564&fm=77&w_h=121_75&cs=4219338419,1469463618",
                title: "高档手表",
                newPrice: "8888",
                oldPrice: "12000"
            },
            {
                num: 2,
                storeName: "宝塔镇河妖",
                renZheng: "实名认证",
                image_url: "https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=1009139838,3818694564&fm=77&w_h=121_75&cs=4219338419,1469463618",
                title: "高档手表",
                newPrice: "7777",
                oldPrice: "12000"
            },
            {
                num: 3,
                storeName: "提莫一米五",
                renZheng: "企业认证",
                image_url: "https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=1009139838,3818694564&fm=77&w_h=121_75&cs=4219338419,1469463618",
                title: "高档手表",
                newPrice: "6666",
                oldPrice: "12000"
            },
            {
                num: 4,
                storeName: "广州王小二",
                renZheng: "企业认证",
                image_url: "https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=1009139838,3818694564&fm=77&w_h=121_75&cs=4219338419,1469463618",
                title: "高档手表",
                newPrice: "5555",
                oldPrice: "12000"
            },
            {
                num: 5,
                storeName: "还有谁！！！",
                renZheng: "实名认证",
                image_url: "https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=1009139838,3818694564&fm=77&w_h=121_75&cs=4219338419,1469463618",
                title: "高档手表",
                newPrice: "4444",
                oldPrice: "12000"
            }
        ],
        choose: [],
        goodNum: 0,
        lastPrice: 0,
        redchecked: '../../image/icons/redchecked.png',
        checked: '../../image/icons/checked.png'
    },

    choose(e) {
        var current = e.currentTarget.dataset.current;
        var choose = this.data.choose;
        var lastPrice = this.data.lastPrice;
        var goodsList = this.data.goodsList;

        // 判断已选的第current个是否是数字类型
        if (typeof (choose[current]) == 'number') {
            // 判断已选的第current个和goodsList第current个是否相等
            if (choose[current] == goodsList[current].num) {
                // 将第current个用undefined占位
                choose.splice(current, 1, 'undefined')
                // goodNum是去掉undefined的数据
                var goodNum = choose.filter(function (key) {
                    return key !== 'undefined'
                })

                // 算出最后结算的价钱
                lastPrice = lastPrice - parseFloat(goodsList[current].newPrice);
                this.setData({
                    goodNum: goodNum.length,
                    choose: choose,
                    lastPrice: lastPrice
                })
                return;
            }
        }


        choose[current] = goodsList[current].num;
        var goodNum = choose.filter(function (key) {
            return key !== 'undefined'
        })
        lastPrice = lastPrice + parseFloat(goodsList[current].newPrice);
        this.setData({
            goodNum: goodNum.length,
            choose: choose,
            lastPrice: lastPrice
        })

    },
    submit() {
        var that = this;
        wx.navigateTo({
            url: '../order/takeOrder/takeOrder',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })




        // wx.showModal({
        //     title: '确定要买吗？',
        //     content: '劳烦' + that.data.lastPrice + '元，谢谢',
        //     showCancel: true,
        //     cancelText: '取消',
        //     cancelColor: '#f10',
        //     confirmText: '确定',
        //     confirmColor: '#0a0',
        //     success: function (res) {
        //         var goodsList = that.data.goodsList;
        //         var choose = that.data.choose;
        //         var arr = [];

        //         if (res.cancel){
        //             that.setData({ goodsList: goodsList, choose: [], lastPrice: 0, goodNum: 0 });
        //             return;
        //         }
        //         wx.showToast({
        //             title: '购买成功',
        //             icon: 'success',
        //             image: '',
        //             duration: 1000,
        //             mask: true,
        //         });

        //         for (var i = 0; i < goodsList.length; i++) {
        //             if (goodsList[i].num == choose[i]) {
        //                 // 将已选商品的num 值存入arr 数组
        //                 /**
        //                  * 存在一个问题：当移除goodsList中的某一项时，其他的goodsList也会随之改变包括data中的数据和(listarr=goodsList中的listarr)，但是视图中的不变化
        //                  */
        //                 arr.push(goodsList[i].num);

        //             }
        //         }
        //         // 遍历arr中的每一项，依次与goodsList中的num对比
        //         for (var i = 0; i < arr.length; i++) {
        //             for (var j = 0; j < goodsList.length; j++) {
        //                 if (goodsList[j].num == arr[i]) {
        //                     // 如果相等，则删除goodsList中的第J项
        //                     goodsList.splice(j, 1, "undefined");
        //                 }
        //             }

        //         }
        //         // 移除数组中的“undefined”占位
        //         var goodsList = goodsList.filter(function (key) {
        //             return key !== 'undefined'
        //         })

        //         that.setData({ goodsList: goodsList, choose: [], lastPrice: 0, goodNum: 0 });
        //     },
        //     fail: function (res) { 
        //         console.log(111)
        //     },
        //     complete: function (res) { },
        // })
    },
    pay() {
        var that = this;
        wx.navigateTo({
            url: '../order/takeOrder/takeOrder',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
        })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '购物车',
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