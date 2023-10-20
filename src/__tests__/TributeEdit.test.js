import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TributeEdit from "../pages/TributeEdit"
describe("<TributeEdit />", () => {

  it("renders a heading on the TributeEdit page", () => {

    render(
      <BrowserRouter>
        <TributeEdit />
      </BrowserRouter>
    )
  
    const editHeading = screen.getByRole("heading", {
      name: /add a tribute/i
    })

    expect(editHeading).toHaveTextContent("Add a Tribute")
  })

  it("renders a form with an input field", () => {

    render(
      <BrowserRouter>
        <TributeEdit />
      </BrowserRouter>
    )
    const EditForm = screen.getByRole("textbox", {
      name: /name/i
    })
    expect(editForm).toHaveAttribute("id")
    expect(editForm).toHaveAttribute("name")
    expect(editForm).toHaveAttribute("placeholder")
    expect(editForm).toHaveAttribute("value")
  })
})