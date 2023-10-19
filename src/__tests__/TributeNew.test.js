import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TributeNew from "../pages/TributeNew"
describe("<TributeNew />", () => {

  it("renders a heading on the TributeNew page", () => {

    render(
      <BrowserRouter>
        <TributeNew />
      </BrowserRouter>
    )
  
    screen.debug() 
    screen.logTestingPlaygroundURL() 
    const newHeading = screen.getByRole("heading", {
      name: /add a tribute/i
    })
    screen.debug(newHeading)

    expect(newHeading).toHaveTextContent("Add a Tribute")
  })

  it("renders a form with an input field", () => {

    render(
      <BrowserRouter>
        <TributeNew />
      </BrowserRouter>
    )
    const newForm = screen.getByRole("textbox", {
      name: /name/i
    })
    expect(newForm).toHaveAttribute("id")
    expect(newForm).toHaveAttribute("name")
    expect(newForm).toHaveAttribute("placeholder")
    expect(newForm).toHaveAttribute("value")
  })
})