import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import HomePage from '../HomePage'

describe('render Homepage', () => {
  it('contains the string "Reno & Lake Tahoe"', () => {
    render(<HomePage />, { wrapper: HashRouter })
    const locationElement = screen.getByTestId('homepage-1')
    expect(locationElement.textContent).toMatch(/· Reno · Lake Tahoe ·/)
  })

  it('contains all 3 restaurants "The Depot", "Louis Basque Corner", "Genoa Bar and Saloon"', () => {
    render(<HomePage />, { wrapper: HashRouter })
    const foodElement = screen.getByTestId('homepage-2')
    expect(foodElement.textContent).toMatch(
      'The Depot' && 'Louis Basque Corner' && 'Genoa Bar and Saloon',
    )
  })

  it('click and direct to Reno downtown page', () => {
    render(<HomePage />, { wrapper: HashRouter })
    const clickElement = screen.getByRole('link', { current: true })
    expect(clickElement).toHaveAttribute('href', 'https://downtownreno.org/')
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
