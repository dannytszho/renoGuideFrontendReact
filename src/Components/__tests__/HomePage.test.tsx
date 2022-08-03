import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage'

test('render homepage', () => {
  render(<HomePage />, { wrapper: BrowserRouter })
  const homepageElement = screen.getByText('· Reno · Lake Tahoe ·')
  expect(homepageElement).toBeTruthy()
})
