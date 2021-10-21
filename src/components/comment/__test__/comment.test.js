import React from "react";

import { render, cleanup, screen } from '@testing-library/react';
import Comment from "../Comment";

afterEach(cleanup);

describe("Comment", () => {

    it('should render Comment component ', () => {
        const comments = {
            "email": "a@a.com",
            "name": "abdullah",
            "body": "test"

        }
        render(
            <Comment comments={comments} />
        );
        expect(screen).toMatchSnapshot();
    });
    it("fetches and displays data", async () => {
        const comments = {
            "email": "a@a.com",
            "name": "abdullah",
            "body": "test"

        }
        render(

            <Comment comments={comments} />
        );

        const titleElement = await screen.findByTestId("email")
        expect(titleElement).toHaveTextContent("a@a.com");
        const bodyElement = await screen.findByTestId("body")
        expect(bodyElement).toHaveTextContent("test");
        const imgElement =  screen.getByTestId("img")
        expect(imgElement).toBeInTheDocument();



    });
})