import { BrowserRouter } from 'react-router-dom';
import { Intro } from './components/Intro';

export const App = () => {

  return (
    <BrowserRouter>
      <Intro />
    </BrowserRouter>
  )
}
