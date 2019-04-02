import fetch from "cross-fetch";
/**
 * Requests a URL, returning a promise.
 * 包装 fetch 函数的通用需求：{url, method, headers, body}
 * @return {object} An object containing either "data" or "err"
 */

// content-type
const ContentType = {
    JSON: "application/json; charset=UTF-8",
    FORM: "application/x-www-form-urlencoded; charset=UTF-8"
}

// Http method
const HttpMethod = {
    GET : "GET",
    POST : "POST",
    //TODO 其他的方法
}

// handle url
const getUrl = (url) => {
    if(url.startsWith('http://') || url.startsWith('https://')) return url
    return url //TODO 线上自己的地址
}

// common check
const checkStatus = response => {
    if(Object.is(200, response.status)) return response.json()
    throw new Error(response.status)
}

// common header
const getHeaders = () => {
    return {
      "Accept": ContentType.JSON,
      "Content-Type": ContentType.JSON
    }
}

// token header
export const getTokenHeaders = (token) => {
    return {
      "Accept": ContentType.JSON,
      "Content-Type": ContentType.JSON,
      "Authorization": `Bearer ${token}`
    }
}

// common error
const handleError = promise => {
    return promise
      .then(response => checkStatus(response))
      .catch((error) => {
        throw new Error('服务器发生未知错误')
    })
}

export default {
     /** GET请求
     * @param url: string
     * @param params {}
     * @param headers
     * @returns Promise<any>
     */
    get: function (url, params, headers = getHeaders()) {
        if (params) {
          let paramsArray = []
          // encodeURIComponent
          Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
          if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
          } else {
            url += '&' + paramsArray.join('&')
          }
        }
        const promise = fetch(getUrl(url), {
          method : HttpMethod.GET,
          headers: headers
        })
        return handleError(promise)
    },
    /** POST请求  FormData 表单数据
     * @param url
     * @param formData
     * @param headers
     * @returns Promise<any>
     */
    postForm: function (url, formData, headers = getHeaders()) {
        const promise = fetch(getUrl(url), {
          method : HttpMethod.POST,
          headers: headers,
          body : formData
        })
        return handleError(promise)
    },
    /*** POST 请求 JSON格式
   * @param url
   * @param params 参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
   * @param headers
   * @returns Promise<any>
   * */
    postJSON: function (url, params, headers = getHeaders()) {
        const promise = fetch(getUrl(url), {
        method : HttpMethod.POST,
        headers: headers,
        body : JSON.stringify(params)
        })
        return handleError(promise)
    },
}
