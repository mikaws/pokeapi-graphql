import { MissingParamError, InvalidParamError } from '../errors'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class GetPokemonsController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const variables = JSON.parse(httpRequest.body).variables

    // Missim Param Validators
    if (!variables.limit) {
      return badRequest(new MissingParamError('limit'))
    }
    if (!variables.offset && variables.offset !== 0) {
      return badRequest(new MissingParamError('offset'))
    }

    // Invalid Param Validators
    if (variables.limit < 0) {
      return badRequest(new InvalidParamError('limit'))
    }
    if (variables.offset < 0) {
      return badRequest(new InvalidParamError('offset'))
    }
  }
}
