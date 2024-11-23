interface RequestConfig {
  baseURL?: string; // 请求的基础 URL
  headers?: Record<string, string>; // 默认头部信息
  timeout?: number; // 请求超时时间（可选）
}

interface RequestOptions {
  headers?: Record<string, string>; // 请求时额外的头部信息
  params?: Record<string, string | number>; // 查询参数
  body?: any; // POST、PUT 请求的请求体
  method?: string; // 请求方法
}

class Request {
  private config: RequestConfig;

  constructor(config: RequestConfig) {
    this.config = config;
  }

  // 请求拦截器
  private requestInterceptor(
    url: string,
    options: RequestOptions
  ): { url: string; options: RequestInit } {
    const fullUrl = `${this.config.baseURL || ""}${url}${this.formatParams(
      options.params
    )}`;
    const requestInit: RequestInit = {
      ...options,
      headers: {
        ...this.config.headers,
        ...options.headers,
      },
    };

    console.log("Request Interceptor: ", fullUrl, requestInit);
    return { url: fullUrl, options: requestInit };
  }

  // 响应拦截器
  private responseInterceptor(response: Response): Promise<any> {
    if (!response.ok) {
      return Promise.reject(
        new Error(`HTTP error! Status: ${response.status}`)
      );
    }
    return response.json();
  }

  // 格式化查询参数
  private formatParams(params?: Record<string, string | number>): string {
    if (!params) return "";
    const query = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    return query ? `?${query}` : "";
  }

  // 通用请求方法
  private async request(
    url: string,
    method: string,
    options: RequestOptions = {}
  ): Promise<any> {
    const { url: fullUrl, options: requestInit } = this.requestInterceptor(
      url,
      {
        ...options,
        method,
      }
    );

    try {
      const response = await fetch(fullUrl, requestInit);
      return await this.responseInterceptor(response);
    } catch (error) {
      console.error("Request Error: ", error);
      throw error;
    }
  }

  // GET 方法
  get(url: string, options: RequestOptions = {}) {
    return this.request(url, "GET", options);
  }

  // POST 方法
  post(url: string, body: any, options: RequestOptions = {}) {
    return this.request(url, "POST", {
      ...options,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
  }
}

export default Request;

const baseRequest = new Request({
  baseURL: "http://dev.entprotocol.io/api",
});

export { baseRequest };
