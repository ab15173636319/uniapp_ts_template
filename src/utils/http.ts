type RequestMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "CONNECT";

type RequestData = {
  [key: string]: any;
};

const baseUrl = "https://playlet.zonelian.com";

/**
 *
 * @param url 路由
 * @param data 请求参数
 * @param method 请求方法
 * @returns 返回promise
 */
export default function Http(
  url: string,
  data: RequestData = {},
  method: RequestMethod = "GET",
) {
  try {
    url = baseUrl + url;
    if (method === "GET" && Object.keys(data).length > 0) {
      const queryParams = new URLSearchParams();
      for (const key in data) {
        if (Object.hasOwn(data, key)) {
          queryParams.append(key, data[key]);
        }
      }
      url += "?" + queryParams.toString();
      data = {};
    }

    return new Promise((resolve, reject) => {
      uni.request({
        url: url,
        data: data,
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        method: method,
        // 允许跨域
        sslVerify: true,
        success: ({ data, statusCode }) => {
          if (statusCode === 200) {
            resolve(data);
          } else {
            reject(data);
          }
        },
        fail: (error) => {
          reject(error);
        },
      });
    });
  } catch (error) {
    return Promise.reject({
      message: "请求发生错误",
      error: error,
    });
  }
}
