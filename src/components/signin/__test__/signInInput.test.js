import { render, screen, fireEvent ,waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode } from "react-dom";

import axiosMock from "axios";
import SignIn from '../SignIn';

const mockedSetTodo = jest.fn();

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

    it('should render email  input element',async () => {
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





})

