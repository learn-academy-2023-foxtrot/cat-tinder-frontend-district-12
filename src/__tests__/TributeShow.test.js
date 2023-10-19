import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import TributeShow from '../pages/TributeShow';
import mockTribute from "../MockTribute"

describe('<TributeShow />', () => {
  it('renders a name', () => {
    render(
      <MemoryRouter initialEntries={["/tributeshow/1"]}>
        <Routes>
          <Route path="/tributeshow/:id" element={<TributeShow tribute={mockTribute} />} />
        </Routes>
      </MemoryRouter>
    )
    screen.logTestingPlaygroundURL()
    const tributeName = screen.getByRole('heading', {
        name: /tribute show page/i
      })

    expect(tributeName).toHaveTextContent("Tribute Show Page")
  })
})