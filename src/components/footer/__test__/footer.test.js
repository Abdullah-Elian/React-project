import { render, screen } from '@testing-library/react';
import Footer from '../Footer'
describe("Footer", () => {

    beforeEach(() => {
        render(<Footer />);
      });
      test('should match snapshot', () => {
        expect(screen).toMatchSnapshot();
      });
})