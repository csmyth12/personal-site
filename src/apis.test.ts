import { getData } from "./apis"

const mockResponse = {
    json: () => Promise.resolve({ name: 'Hello World' })
}

const mockFetch = jest.fn()

global.fetch = mockFetch.mockImplementation(() => Promise.resolve(mockResponse))

describe('apis', () => {
    it('should fetch data', async () => {
        const { data } = await getData()
        expect(mockFetch).toHaveBeenCalled()
        expect(data.name).toEqual('Hello World')
    })
})
