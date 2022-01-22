import { HttpRequest, HttpResponse } from '../protocols/http'

export class GetPokemonsController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const limit = JSON.parse(httpRequest.body).variables.limit
    const offset = JSON.parse(httpRequest.body).variables.offset
    if (!limit) {
      return {
        statusCode: 400,
        body: new Error('Missing param: limit')
      }
    }
    if (!offset) {
      return {
        statusCode: 400,
        body: new Error('Missing param: offset')
      }
    }
  }
}
