import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


import LogOut from '../LogOut';
import { LoginContext } from '../../LoginContext'

describe("LogOut", () => {


    it('should render LogOut component ', () => {
        render(
            <LogOut />
        );
        expect(screen).toMatchSnapshot();
    });

    it('should run handlesubmit function ', async () => {
        const setUser = jest.fn()

        render(
            <LoginContext.Provider value={{ user: { id: 1, email: "a@a.com" }, setUser }}>
                <MemoryRouter>
                    <LogOut />
                </MemoryRouter>,
                );
            </LoginContext.Provider>
        );

    //    await  waitFor(() => {

            const buttonElement = screen.getByText(/LogOut/i);
            fireEvent.click(buttonElement)
            expect(buttonElement).toBeInTheDocument();
        // })
    });


});