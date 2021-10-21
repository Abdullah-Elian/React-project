import { render, screen } from '@testing-library/react';
import Header from '../Header'
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
})