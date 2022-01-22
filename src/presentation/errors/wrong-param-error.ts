export class WrongParamError extends Error {
  constructor (public paramName: string) {
    super(`Wrong param: ${paramName} is less than zero`)
    this.name = 'WrongParamError'
  }
}
