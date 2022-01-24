import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError } from '../errors/invalid-param-error'
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
    expect(httpResponse.body).toEqual(new MissingParamError('limit'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('offset'))
  })
  test('Should return 400 if no limit is less than 0', () => {
    const httpRequest = {
      body: JSON.stringify({
        query: 'any-query',
        variables: { limit: -1, offset: 0 }
      })
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('limit'))
  })
  test('Should return 400 if offset is less than 0', () => {
    const httpRequest = {
      body: JSON.stringify({
        query: 'any-query',
        variables: { limit: 1, offset: -1 }
      })
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('offset'))
  })
})
