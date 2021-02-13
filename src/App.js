import NextCompetitor from "./components/NextCompetitor";
import ProgressBar from "./components/ProgressBar"
import {Competitor} from "./classes/Competitor"

const sarah = new Competitor("Sarah French", 63);
const event = "squat";
const round = 0;

sarah.setNextAttempt(event, round); //setFirstAttempt

const defaultProps = {
  competitor: sarah,
      event : event,
      round : round
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
