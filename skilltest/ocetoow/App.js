import Grids from './components/Grids.js';
import { fetcher } from './utils/fetcher.js';

export default function App($app) {
  this.state = {
    searchInput: '',
    grids: [],
  };

  const grids = new Grids({ $app, initialState: [1, 2, 3] });
}
