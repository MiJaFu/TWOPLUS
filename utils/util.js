const app = getApp();
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function objKeySort(obj) {//排序的函数
    var newkey = Object.keys(obj).sort();
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newObj = {};//创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newObj;//返回排好序的新对象
}
// 
function toMap(json) {
    var ele = JSON.stringify(objKeySort(json));

    ele = ele.replace(/}/g, '').replace(/:/g, '=').replace(/,/g, ', ').replace(/"/g, '').split('{')[1];
    return ele;
}
function request(that, url, data, resCallBack) {
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
}
module.exports = {
    formatTime: formatTime,
    objKeySort: objKeySort,
    toMap: toMap,
    request: request
}
