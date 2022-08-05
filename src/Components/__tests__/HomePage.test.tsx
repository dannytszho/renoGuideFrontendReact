import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('render Homepage', () => {
  render(<HomePage />, { wrapper: HashRouter })

  it('contains the string "Reno & Lake Tahoe"', () => {
    const locationElement = screen.getByTestId('homepage-1')
    expect(locationElement.textContent).toMatch(/· Reno · Lake Tahoe ·/)
  })
})

//   beforeEach(()=> {
//     view()

//   })
// })

// test('render homepage', () => {
//   view
//   //render(<HomePage />, { wrapper: BrowserRouter })
//   //const homepageElement = screen.getByText('· Reno · Lake Tahoe ·')
//   expect(homepageElement).toBeTruthy()
