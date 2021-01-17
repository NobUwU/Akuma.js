import { registerNewPredefines } from './AkumaError'
const Errors = {
  "Token_Invalid": `Token is invalid and has been rejected by Discord API`,
  "Malformed_Request": `An APIRequest object was detected as malformed when method create() was called`,
}
for (const [name, message] of Object.entries(Errors)) registerNewPredefines(name, message)
export {
  Errors,
}
