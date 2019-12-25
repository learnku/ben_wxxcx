Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 中心点经、纬
    longitude: "",
    latitude: "",
    scale: 14,
    // 标记点
    markers: [{
      iconPath: "/imgs/icons/computer.png",
      id: 0,
      latitude: 22.72174,
      longitude: 114.06031,
      width: "50rpx",
      height: "50rpx",
      address_id: 1,
      address: "广东深深圳市南山区xxxx2 号" 
    }],
    // 圆
    circles: []
  },

  // 定位当前地理位置
  currentLocation: function() {
    wx.getLocation({
      type: "wgs84",
      isHighAccuracy: true,
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,

          // markers: [{
          //   id: 0,
          //   longitude: res.longitude,
          //   latitude: res.latitude,
          //   iconPath: "/imgs/icons/current.png",
          //   width: "50rpx",
          //   height: "50rpx",
          // }]
        })
      },
    })
  },
  // 选择位置
  selectedLocation: function(){
    // 设置权限
    // wx.openSetting({
    //   success: function(res){
    //     console.log(res)
    //   }
    // })

    // 打开位置
    wx.chooseLocation({
      success: (res)=> {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
        })
      },
    })
  },
  // 点击标记点
  markertap: function(res) {
    console.log("获取到这个酒店的 id = " + this.data.markers[res.markerId]['address_id'])
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取当前位置
    this.currentLocation()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 存储当前打开 tabbar 页面 url 地址
    wx.setStorageSync("tabbar_url", "/pages/map/map")
  }
})