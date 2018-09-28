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
    },
    onShow() {
        console.log("chen")
    }
})
