
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { LoginContext } from '../../LoginContext'
import axiosMock from "axios";
import SignIn from '../SignIn';




describe("SignInInput", () => {

    it('should render Posts component ', async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }]
        });

        render(<SignIn />);

        await waitFor(() => {

            expect(screen).toMatchSnapshot();
        });

    });

    it('should render email input element', async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }]
        });
        render(<SignIn />);

        await waitFor(() => {

            const inputElement = screen.getByLabelText(/Email Address/i);
            expect(inputElement).toBeInTheDocument();
        });
    });

    it('should be able to type into input', async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }]
        });
        render(
            <SignIn />
        );

        await waitFor(() => {

            const inputElement = screen.getByLabelText(/Email Address/i);
            fireEvent.change(inputElement, { target: { value: "a@a.com" } })
            expect(inputElement.value).toBe("a@a.com");

        });

    });




    it('should not be able to sign in if the email was wrong', async () => {

        const alertMock = jest.spyOn(window,'alert').mockImplementation(); 

        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }]
        });
        render(
            <SignIn />
        );

        await waitFor(() => {

            const buttonElement = screen.getByTestId(/loginButton/i);
            fireEvent.click(buttonElement, { target: { value: "a@aa.com" } })
            expect(alertMock).toHaveBeenCalledTimes(1)
            // expect(buttonElement).toBeInTheDocument();

        });

    });

    it('should not be able to sign in if the email was wrong', async () => {

        render(
            <SignIn />
        );

        await waitFor(() => {

            const buttonElement = screen.getByTestId(/loginButton/i);
            fireEvent.click(buttonElement, { target: { value: "a@aa.com" } })
            // expect(buttonElement).toBeInTheDocument();

        });

    });

    it('should be able to sign in if the email was correct ', async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "a@a.com",

            }]
        });

        // const history = createMemoryHistory()
        // const pushSpy = jest.spyOn(history, 'push')

        // const myInitialState = 'My Initial State'
        // const mockHistoryPush = jest.fn();

        // jest.mock('react-router-dom', () => ({
        // ...jest.requireActual('react-router-dom'),
        // useHistory: () => ({
        // push: mockHistoryPush,
        // }),
        // }));

        const setUser = jest.fn()

        render(
            <LoginContext.Provider value={{ user: { id: 1, email: "a@a.com" }, setUser }}>
                <MemoryRouter>
                    <SignIn />
                </MemoryRouter>,
                );
            </LoginContext.Provider>
        );

        await waitFor(() => {
            const inputElement = screen.getByLabelText(/Email Address/i);
            fireEvent.change(inputElement, { target: { value: "a@a.com" } })
            expect(inputElement.value).toBe("a@a.com")

        });
        const buttonElement = screen.getByTestId(/loginButton/i);
        fireEvent.click(buttonElement)
        expect(buttonElement).toBeInTheDocument();

    });


})

