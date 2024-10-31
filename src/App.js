import './App.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.18.0/cdn/');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Start of my project
        </p>
      </header>
    </div>
  );
}

export default App;
