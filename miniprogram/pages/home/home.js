Page({
    data: {
        count: 1,
        image: ""
    },
    onLoad(options) {
        const { image = "" } = options
        this.setData({
            image
        })

        image && this.upload(image)
    },
    onShow() {
        console.log("chen")
    },
    upload(filename) {
        wx.uploadFile({
            url: "http://localhost:3001/getImageInfo",
            filePath: filename,
            name: "image",
            success(res) {
                console.log(res)
            }
        })
    }
})
