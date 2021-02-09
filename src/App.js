import NextCompetitor from "./components/NextCompetitor";
import ProgressBar from "./components/ProgressBar"

const defaultProps = {
  competitor: {
          name: "Sarah French",
          squat: [100],
          bench: [],
          deadlift: [],
      },
      event : "squat",
      round : 2
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <ProgressBar/>
        <NextCompetitor {...defaultProps}/>
      </main>
    </div>
  );
}

export default App;
