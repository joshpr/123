Page({
  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value; //获取表单所有input的值


wx.request({
  url: 'https://api.heclouds.com/devices/503118965/datapoints?type=3',
  method: 'POST',
  header: {
    'content-type':'application/json',
    'api-key': 'IbL6y4pjp7KPV2W5QjXIZsY6s9Q=',
  },
  data: { "Password": formData},
  success: function (res) {
    wx.showToast({ title: '发送成功' })
  },

  fail: function (res) {
    wx.showToast({ title: '系统错误' })
  },
  complete: function (res) {
    wx.hideLoading()
  }
})

  }

})