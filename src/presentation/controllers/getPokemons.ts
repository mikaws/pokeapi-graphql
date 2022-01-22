import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class GetPokemonsController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const { limit, offset } = JSON.parse(httpRequest.body).variables
    if (!limit) {
      return badRequest(new MissingParamError('limit'))
    }
    if (!offset) {
      return badRequest(new MissingParamError('offset'))
    }
  }
}
