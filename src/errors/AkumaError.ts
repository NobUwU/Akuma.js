import {
  AkumaError,
  predefinedFunction,
} from '../@types'
const errorCode = Symbol('ErrCode')
const predefines = new Map()

function createError(ErrorType: ErrorConstructor | TypeErrorConstructor): AkumaError {
  return class AkumaError extends ErrorType {
    constructor(key: string, ...args: Array<string>) {
      super(createMessage(key, args))
      this[errorCode] = key
      Error.captureStackTrace(this, AkumaError)
    }
    public get code(): string {
      return this[errorCode]
    }
    public get name(): string {
      return `${super.name} [${this[errorCode]}]`
    }
  }
}
function createMessage(key: string, args: Array<string>): string {
  if (typeof key !== 'string') throw new TypeError(`Err: Message key must be typeof string`)
  const predefined: string | typeof predefinedFunction = predefines.get(key)
  if (!predefined) throw new Error(`${key} is not a valid predefined error`)
  if (typeof predefined === 'function') return predefined(...args)
  if (args === undefined || args.length < 1) return predefined
  args.unshift(predefined)

  return String(...args)
}
function registerNewPredefines(key: string, val: string | typeof predefinedFunction): void {
  predefines.set(key, typeof val === 'function' ? val : String(val))
}

const AError: AkumaError = createError(Error)
const ATypeError: AkumaError = createError(TypeError)
export {
  registerNewPredefines,
  AError as Error,
  ATypeError as TypeError,
}
