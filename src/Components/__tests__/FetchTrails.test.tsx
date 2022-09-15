import { getData } from '../Utils/FetchTrails'

export const trailsData = [
  {
    id: '1',
    name: 'Angels Landing Trail',
    length: '6.4 mi',
    elevation: '1,240 ft',
    duration: 'Est. 3h 9m',
    difficulty: 'Moderate',
    rating: '4.5',
    imageUrl:
      'https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2OTUzMjcvNTMxNjIwMGIxODJmNjkzMzRkYmJiNTA2YzliNTE4OGQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
    url: 'https://www.alltrails.com/explore/trail/us/nevada/hunter-creek-trail--2',
  },
]

describe('getData', () => {
  // afterEach(jest.clearAllMocks)
  let originalFetch: {
    (
      input: RequestInfo | URL,
      init?: RequestInit | undefined,
    ): Promise<Response>
    (
      input: RequestInfo | URL,
      init?: RequestInit | undefined,
    ): Promise<Response>
  }

  beforeEach(() => {
    originalFetch = global.fetch

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(trailsData),
      }),
    ) as jest.Mock
  })
  afterEach(() => {
    global.fetch = originalFetch
  })
  it('should return a trail', async () => {
    const trail = await getData()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(trail).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Angels Landing Trail' }),
      ]),
    )
  })
})
