import React from 'react';

import { render, screen, fireEvent,waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


import Header from '../Header'
import { LoginContext } from '../../LoginContext'

describe("Header", () => {


it('should render Header component ', () => {
render(
<Header />
);
expect(screen).toMatchSnapshot();
});
it('should render the title ', () => {
render(
<Header />
);
const h1Element = screen.getByText(/React Project/i);
expect(h1Element).toBeInTheDocument();
});

it('should render the LOGIN if the user not loggedin ', () => {
render(
<Header />
);
const h1Element = screen.getByText(/Login/i);
expect(h1Element).toBeInTheDocument();
});

it('should render the header', () => {
render(
<Header />
);
const headerElement = screen.getByTestId("header");
expect(headerElement).toBeInTheDocument();
});

it('should render the logout button when user loged in ', () => {
const history = createMemoryHistory()
const pushSpy = jest.spyOn(history, 'push')
render(
<LoginContext.Provider value={{ user: { id: 1, email: "a@a.com" } }}>
<Router history={history}>
<Header />
</Router>
);
</LoginContext.Provider>
);

const buttonElement = screen.getByText("Post");
fireEvent.click(buttonElement, { target: { value: "/post" } })
expect(buttonElement).toBeInTheDocument();
const logoutElement = screen.getByText(/LogOut/i);
expect(logoutElement).toBeInTheDocument();
});

it('should render the login component when the user press login ', () => {
const history = createMemoryHistory()
const pushSpy = jest.spyOn(history, 'push')
render(
<Router history={history}>
<Header />
</Router>
);

const buttonElement = screen.getByText(/Login/i);
fireEvent.click(buttonElement, { target: { value: "/" } })
expect(buttonElement).toBeInTheDocument();
});
})
