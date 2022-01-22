export class GetPokemonsController {
  handle (httpRequest: any): any {
    const limit = JSON.parse(httpRequest.body).variables.limit
    if (!limit) {
      return {
        statusCode: 400,
        body: new Error('Missing param: limit')
      }
    }
  }
}
