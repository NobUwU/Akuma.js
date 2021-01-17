/**
 * Custom Error Registery
 */
export interface AkumaError {
  new (key: string, ...args: Array<string>)
}
/**
 * Function for predefined errors that need dynamic description
 * @param args args to pass to predefined function
 */
export declare function predefinedFunction(...args: Array<string>): string
