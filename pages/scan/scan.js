// pages/scan/scan.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showScan: false,
        scan_code: 123456
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        
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
        console.log('show')
        if(!this.data.showScan){
            this.setData({
                showScan: true
            })

            // 扫码上机
            wx.scanCode({
                onlyFromCamera: true,
                barCode: ["barCode", "qrCode"],
                success: function (res) {
                    console.log(res)
                },
                fail: function () {
                    console.log("扫码失败")
                },
                complete: () => {
                    setTimeout(()=> {
                        this.setData({
                            showScan: false
                        })
                    }, 20)
                }
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        // 跳转到上一次打开的 tabbar 页面
        let tabbar_url = wx.getStorageSync("tabbar_url")
        if (tabbar_url && tabbar_url != ""){
            wx.switchTab({
                url: tabbar_url,
            })
        } else {
            wx.switchTab({
                url: '/pages/index/index',
            })
        }
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