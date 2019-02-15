import fetch from "cross-fetch"
import qs from "querystring"
import env from "../shared/env"
const host = env.env === "dev" ? "" : ""

const get = (url: string, params: object, option?: object) => {
    const URL = `${host}${url}?${qs.stringify(params)}`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return new Promise((resolve: any, reject: any) => {
        fetch(URL, Object.assign({}, options, option)).then((res: any) => {
            if (res.code === 200) {
                resolve(res.data)
            } else {
                reject(res.message)
            }
        })
    })
}

const post = (url: string, params: object, option?: object) => {
    const URL = `${host}${url}`
    const options = {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json"
        }
    }
    return new Promise((resolve: any, reject: any) => {
        fetch(url, Object.assign({}, options, option)).then(res => {
            fetch(URL, Object.assign({}, options, option)).then((res: any) => {
                if (res.code === 200) {
                    resolve(res.data)
                } else {
                    reject(res.message)
                }
            })
        })
    })
}

export { get, post }
