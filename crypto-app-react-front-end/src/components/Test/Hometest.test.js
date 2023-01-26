import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Homepage from '../Homepage';
import News from '../News';

test('test', ()=> {
    expect(true).toBe(true)
  })
  

test('find herounit in homepage', () => {
    // act(() => {
    render(
    <BrowserRouter>
        <Routes>   
            <Route path="*" element= {<Homepage />}/>
        </Routes>
    </BrowserRouter>
        );
    // });
    const todoElement = screen.getByTestId('appName');
    expect(todoElement).toBeInTheDocument()
});

test('find news in News', () => {
    // act(() => {
    render(
    <BrowserRouter>
        <Routes>   
            <Route path="*" element= {<News />}/>
        </Routes>
    </BrowserRouter>
        );
    // });
    const todoElement = screen.getByTestId('Newss');
    expect(todoElement).toBeInTheDocument()
});
