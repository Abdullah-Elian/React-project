import React from "react";

import { render, cleanup, fireEvent,screen,waitFor } from '@testing-library/react';
import axiosMock from "axios";
import Posts from '../Posts'

import { LoginContext } from '../../LoginContext'

afterEach(cleanup);

describe("Posts", () => {

    it('should render Posts component ', () => {
        axiosMock.get.mockResolvedValueOnce({ data: [{ 
            "id":1,
            "userId":1,
            "title": "hello there",
            "body":  "test"
    
    }] });
        
        render(
            <LoginContext.Provider value={{user:{id:1 , email:"a@a.com"}}}>
              <Posts />
           );
            </LoginContext.Provider>
          );
          waitFor(() => {
            
            expect(screen).toMatchSnapshot();
            });

    });
    it("fetches and displays data", async () => {
        axiosMock.get.mockResolvedValueOnce({ data: [{ 
            "id":1,
            "userId":1,
            "title": "hello there",
            "body":  "test"
    
    }] });


        
        render(
          <LoginContext.Provider value={{user:{id:1 , email:"a@a.com"}}}>
            <Posts />
         );
          </LoginContext.Provider>
        );
        await waitFor(() => {
            
          expect(screen).toMatchSnapshot();
          const titleElement =  screen.getByTestId("title of the post")
           expect(titleElement).toHaveTextContent("hello there");
          });


        
      });
})