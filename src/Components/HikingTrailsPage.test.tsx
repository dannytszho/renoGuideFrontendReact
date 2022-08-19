import { screen, render } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import HikingTrailsPage from './HikingTrailsPage'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          id: 1,
          name: 'Angels Landing Trail',
          length: '6.4 mi',
          elevation: '1,240 ft',
          duration: 'Est. 3h 9m',
          difficulty: 'Moderate',
          rating: '4.5',
          url: 'https://www.alltrails.com/explore/trail/us/nevada/hunter-creek-trail--2',
          imageUrl:
            'https://photos.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2OTUzMjcvNTMxNjIwMGIxODJmNjkzMzRkYmJiNTA2YzliNTE4OGQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==',
          created_at: '2022-07-12T04:14:18.071221Z',
        },
      }),
  }),
) as jest.Mock

test('it should have the correct trails, Angels Landing Trail', async () => {
  render(<HikingTrailsPage />, { wrapper: HashRouter })
  expect(fetch).toHaveBeenCalledTimes(1)
  const trail = await screen.findByText('Angels Landing Trail')
  expect(trail).toBeVisible()
})
