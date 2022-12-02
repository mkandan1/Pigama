import './assets/css/App.css';
import Footer from './components/essentials/Footer';
import Header from './components/essentials/Header'
import Home from './components/Home/Home';
function App() {
  return (
    <div className="HomePage">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
