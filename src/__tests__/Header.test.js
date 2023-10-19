import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
    screen.logTestingPlaygroundURL()
    const copyRight = screen.getByRole('link', {
    name: /logo welcome to the 69th hunger games/i
        })
    expect (copyRight).toBeInTheDocument()
         })
             })

   