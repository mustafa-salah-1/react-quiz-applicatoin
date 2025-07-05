import './css/App.css';
import Main from './Main';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <p>This is the main content area.</p>
      </Main>
    </div>
  );
}

export default App;
