
import CardGenerator from './components/CardGenerator';
import './styles/css/App.css';



function App() {
  return (
    <div className="App">
      <div className="Intro">
        <h1 className="title">Lista de Afazeres</h1>
        <h3 className="subtitle">Coloque aqui as suas tarefas do dia para ter um melhor controle</h3>
        <CardGenerator />
      </div>
    </div>
  );
}

export default App;
