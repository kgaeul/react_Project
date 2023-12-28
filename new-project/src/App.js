import logo from './logo.svg';
import './App.css';
import { Link } from '@mui/material';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>List</Link>
          </li>
          <li>
            <Link to='/create'>Create</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
