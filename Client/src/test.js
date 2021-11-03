import { render } from "@testing-library/react"
import React from "react"

import { LoginForm } from "./components/LoginForm"

test("That the app renders out the login button", () => {
    const { getByText } = render(<LoginForm />);
    const button = getByText("Logga in");
    expect(button).toBeTruthy()
})

