import React from "react";

import { render, cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import Router from "react-router-dom";
import axiosMock from "axios";
import PostDetails from '../PostDetails'


afterEach(cleanup);

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
}));


describe("Render Single Post", () => {
    it("fetches and displays single post", async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{
                "id":1,
                "userId": 1,
                "title": "hello there",
                "body": "test",
                "email": "a@a.com"

            }]
        });
        axiosMock.get.mockResolvedValueOnce({
            data: [{
                "id":1,
                "userId": 1,
                "title": "hello there",
                "body": "test",
                "email": "a@a.com"

            }]
        });
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: 1 })
            /* fire events that update state */
            render(
                <PostDetails />
            );
          

          await waitFor(() => {
            const titleElement =  screen.getByTestId("title")
             expect(titleElement).toBeInTheDocument()
             });


        // const titleElement = await screen.findByTestId("title")
        // expect(titleElement).toBeInTheDocument();


    });

    test('should match snapshot', () => {

        axiosMock.get.mockResolvedValueOnce({
            data: [{
                "id":1,
                "userId": 1,
                "title": "hello there",
                "body": "test",
                "email": "a@a.com"

            }]
        });
        axiosMock.get.mockResolvedValueOnce({
            data: [{
                "id":1,
                "userId": 1,
                "title": "hello there",
                "body": "test",
                "email": "a@a.com"

            }]
        });
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: 1 })


        render(
            <PostDetails />
        );

         waitFor(() => {
            
             expect(screen).toMatchSnapshot();
             });

      });
})