import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from "../components/Footer"

describe("<Footer />", () => {
    it("renders a greeting to the browser", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      
      const copyRight = screen.getByText(/© 2023 dre money, xeman, anabellahella/i)
      expect (copyRight).toBeInTheDocument()
    })
      })
