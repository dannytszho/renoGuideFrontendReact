import { screen, render } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import HikingTrailsPage from '../HikingTrailsPage'
import { trailsAPI_URL } from '../HikingTrailsPage'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const trailResponse = rest.get(trailsAPI_URL, (req, res, ctx) => {
  return res(
    ctx.json([
      {
        id: 1,
        name: 'Angels Landing',
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
    ]),
  )
})

const server = setupServer(trailResponse)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('it should have the correct trails', async () => {
  render(<HikingTrailsPage />, { wrapper: HashRouter })
  const trail = await screen.findByText('Angels Landing')
  expect(trail).toBeVisible()
})
