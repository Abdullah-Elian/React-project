
import React from "react";

import { render, cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom'

import axiosMock from "axios";
import Posts from '../Posts'
import { createMemoryHistory } from 'history'

import { LoginContext } from '../../LoginContext'


afterEach(cleanup);

describe("Posts", () => {

it("fetches and displays data", async () => {
axiosMock.get.mockResolvedValueOnce({
data: [{
"id": 1,
"userId": 1,
"title": "hello there",
"body": "test"

}]
});


render(
<LoginContext.Provider value={{ user: { id: 1, email: "a@a.com" } }}>
<Posts />
);
</LoginContext.Provider>
);
await waitFor(() => {

expect(screen).toMatchSnapshot();
const titleElement = screen.getByTestId("title of the post")
expect(titleElement).toHaveTextContent("hello there");
});


});

it('should go to the single post page', async () => {

const history = createMemoryHistory()
const pushSpy = jest.spyOn(history, 'push')

axiosMock.get.mockResolvedValueOnce({
data: [{
"id": 1,
"userId": 1,
"title": "hello there",
"body": "test"

}]
});
render(
<LoginContext.Provider value={{ user: { id: 1, email: "a@a.com" } }}>
<Router history={history}>
<Posts />
</Router>
);
</LoginContext.Provider>
);
await waitFor(() => {
const buttonElement = screen.getByText("View");
fireEvent.click(buttonElement)
expect(screen).toMatchSnapshot();


});

});


it('should throw error if the api does not respond',  () => {

  const history = createMemoryHistory()
  const pushSpy = jest.spyOn(history, 'push')
  
  render(
  <LoginContext.Provider value={{ user: { id: 1, email: "a@a.com" } }}>
  <Router history={history}>
  <Posts />
  </Router>
  );
  </LoginContext.Provider>
  );
   
  
  });

})