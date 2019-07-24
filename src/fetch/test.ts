const testPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 12321,
          title: "前端",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/321f1ebdf1009674a025.jpg?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "frontend",
          blogNum: 91
        },
        {
          id: 12331,
          title: "后端",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/d788a559489fa6e30b25.png?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "backend",
          blogNum: 91
        },
        {
          id: 121231,
          title: "IOS",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/321f1ebdf1009674a025.jpg?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "前端",
          blogNum: 91
        },
        {
          id: 1223131,
          title: "TypeScript",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/d788a559489fa6e30b25.png?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "前端",
          blogNum: 91
        },
        {
          id: 121231231,
          title: "DNodeJS",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/321f1ebdf1009674a025.jpg?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "前端",
          blogNum: 91
        },
        {
          id: 12631,
          title: "TypeScript",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/d788a559489fa6e30b25.png?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "前端",
          blogNum: 91
        },
        {
          id: 17231,
          title: "DNodeJS",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/321f1ebdf1009674a025.jpg?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "前端",
          blogNum: 91
        },
        {
          id: 12831,
          title: "TypeScript",
          pv: 132,
          background:
            // tslint:disable-next-line:max-line-length
            "https://lc-gold-cdn.xitu.io/d788a559489fa6e30b25.png?imageView2/2/w/200/h/64/q/85/format/webp/interlace/1",
          name: "前端",
          blogNum: 91
        }
      ])
    }, 75)
  })

export { testPromise }
