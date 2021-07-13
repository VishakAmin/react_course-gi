import Greeting from './Greeting'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting Component', () => {

  test('renders hello world as text', () => {
    //Arrange
    render(<Greeting />);
  
    //Act

    //Assert
    const helloWorldElement = screen.getByText('Hello World',);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders text if button not clicked",() => {
      render(<Greeting/>)

      const textNotChanged = screen.getByText('Its not changed');
      expect(textNotChanged).toBeInTheDocument();
  });

  test("render text if button clicked",() => {
    render(<Greeting/>);
    
    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    
    const textChanged = screen.getByText("Its changed");
    expect(textChanged).toBeInTheDocument();
  })
    test("doesnt render para if button is clicked",() => {
    render(<Greeting/>)

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    
    const textChanged = screen.queryByText("Good to see");
    expect(textChanged).toBeNull();

  })
})

