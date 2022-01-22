import { MissingParamError } from '../errors/missing-param-error'
import { WrongParamError } from '../errors/wrong-param-error'
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

    // Wrong Param Validators
    if (variables.limit < 0) {
      return badRequest(new WrongParamError('limit'))
    }
    if (variables.offset < 0) {
      return badRequest(new WrongParamError('offset'))
    }
  }
}
