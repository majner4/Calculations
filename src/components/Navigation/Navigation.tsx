import { VFC } from 'react';
import { Link } from 'react-router-dom';

export const Navigation:VFC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculations">Calculations</Link>
        </li>
      </ul>
    </nav>
  );
}

