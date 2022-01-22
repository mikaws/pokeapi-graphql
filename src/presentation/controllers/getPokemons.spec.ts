import { GetPokemonsController } from './getPokemons'

const sut = new GetPokemonsController()

describe('GetPokemons Controller', () => {
  test('Should return 400 if no limit is provided', () => {
    const httpRequest = {
      body: JSON.stringify({
        query: 'any-query',
        variables: { offset: 1 }
      })
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: limit'))
  })
  test('Should return 400 if no offset is provided', () => {
    const httpRequest = {
      body: JSON.stringify({
        query: 'any-query',
        variables: { limit: 151 }
      })
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: offset'))
  })
})
