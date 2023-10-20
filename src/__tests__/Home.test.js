import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

describe("<Home />", () => {
    it("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
        
        const homeHeading = screen.getByRole('heading', {
            name: /may the odds be ever in your favor!/i
          })
          expect(homeHeading).toBeInTheDocument()
    })
      })