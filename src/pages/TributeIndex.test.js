import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import TributeIndex from "./TributeIndex"
import MockTribute from '../MockTribute'


describe("<TributeIndex />", () => {
    it("renders tribute cards", () => {
        render(
          <BrowserRouter>
            <TributeIndex tributes={MockTribute} />
          </BrowserRouter>
        )
        MockTribute.forEach((tribute) => {
          const tributeName = screen.getByText(tribute.name)
          expect(tributeName).toBeInTheDocument()
        })
      })
  })