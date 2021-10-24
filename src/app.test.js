import { render, screen,waitFor } from '@testing-library/react';
import { LoginContext } from './components/LoginContext';
import axiosMock from "axios";

import { MemoryRouter } from 'react-router-dom';


import App from './App'
// import { MemoryRouter } from 'react-router';
describe("App", () => {

    
      test('should match snapshot', async  () => {

        axiosMock.get.mockResolvedValueOnce({
          data: [{
            "id": 1,
            "userId": 1,
            "title": "hello there",
            "body": "test"
    
          }]
        });


        const setUser = jest.fn()

        render(
            <LoginContext.Provider value={{ user: { id: 1, email: "a@a.com" } , setUser}}>
                  <MemoryRouter>
                    <App />
                );
                </MemoryRouter>
            </LoginContext.Provider>
        );
          await waitFor(()=>{

            expect(screen).toMatchSnapshot();
          })

      });
})