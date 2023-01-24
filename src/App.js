import "./App.css";
import { Testimony } from "./components/Testimony";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
          name="Emma"
          country="Sweden"
          work="Software Engineer at Spotify"
          testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
          image="Emma.png"
        />
        <Testimony
          name="Sarah"
          country="Nigeria"
          work="Software Engineer at ChatDesk"
          testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
          image="Sarah.png"
        />
        <Testimony
          name="Shawn Wang"
          country="Singapore"
          work="Software Engineer at Amazon"
          testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
          image="Shawn.png"
        />
      </div>
    </div>
  );
}

export default App;
