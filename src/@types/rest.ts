export interface APIRequestInterface {
  new (options: APIRequestOptionsInterface): APIRequestClassInterface
}
export interface APIRequestClassInterface {
  /**
   * 
   */
  create(): Promise<JSON>
  /**
   * Get options that were passed to request object
   */
  getOptions(): APIRequestOptionsInterface
}

export interface APIRequestOptionsInterface {
  /**
   * Http Request Method
   */
  method: "GET" | "POST" | "DELETE" | "PATCH" | "PUT" | "get" | "post" | "delete" | "patch" | "put"
  /**
   * Discord Api Endpoint. EX: `/gateway/bot`
   */
  path: string
  /** 
   * CLient token, if no token given authorization header will not be sent
   */
  token?: string
  /**
   * Append extra headers to the request
   */
  headers?: JSON
  /**
   * Use versioned API? `Default: true`
   */
  versioned?: boolean
  /**
   * Body of request if needed
   */
  body?: JSON
}
