const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {
                categoryId: 1231,
                title: 'JavaScript',
                pv: 132,
                background: 'http://',
                name: '前端',
                blogNum: 91
            },
            {
                categoryId: 1231,
                title: 'JavaScript',
                pv: 132,
                background: 'http://',
                name: '前端',
                blogNum: 91
            },
            {
                categoryId: 1231,
                title: 'JavaScript',
                pv: 132,
                background: 'http://',
                name: '前端',
                blogNum: 91
            },
            {
                categoryId: 1231,
                title: 'JavaScript',
                pv: 132,
                background: 'http://',
                name: '前端',
                blogNum: 91
            },
            {
                categoryId: 1231,
                title: 'JavaScript',
                pv: 132,
                background: 'http://',
                name: '前端',
                blogNum: 91
            }
        ])
    }, 75)
})

export {
    testPromise
}