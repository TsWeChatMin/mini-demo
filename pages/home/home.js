Page({
    data: {
        count: 1
    },
    onShow() {
        console.log("chen")

        console.log(this.data.count)
    },
    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: "high",
            success: (res) => {
                this.setData({ src: res.tempImagePath })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    }
})
