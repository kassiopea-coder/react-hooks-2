import './App.css';
import { DataExample } from './components/DataExample';

function App() {
  return (
    <div>
      <DataExample endpoint="data" title="Get Data" />
      <DataExample endpoint="error" title="Error Data" />
      <DataExample endpoint="loading" title="Loading Data" />
    </div>
  );
}

export default App;
