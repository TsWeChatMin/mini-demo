// miniprogram/pages/camera/camera.js
Page({
    /**
   * Page initial data
   */
    data: {
        backUrl: "",
        devicePosition: "back",
        flash: "auto"
    },

    /**
   * Lifecycle function--Called when page load
   */
    onLoad: function(options) {
        const { backUrl = "../home/home" } = options
        this.setData({
            backUrl
        })
    },

    /**
   * Lifecycle function--Called when page is initially rendered
   */
    onReady: function() {},

    /**
   * Lifecycle function--Called when page show
   */
    onShow: function() {},

    /**
   * Lifecycle function--Called when page hide
   */
    onHide: function() {},

    /**
   * Lifecycle function--Called when page unload
   */
    onUnload: function() {},

    /**
   * Page event handler function--Called when user drop down
   */
    onPullDownRefresh: function() {},

    /**
   * Called when page reach bottom
   */
    onReachBottom: function() {},

    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: "high",
            success: (res) => {
                this.setData({ src: res.tempImagePath })

                wx.navigateTo({
                    url: `${this.data.backUrl}?image=${res.tempImagePath}`
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    },
    choosePhoto() {
        wx.chooseImage({
            sourceType: [ "album" ],
            success(res) {
                console.log(res.tempFilePaths[0])
            }
        })
    }
})
