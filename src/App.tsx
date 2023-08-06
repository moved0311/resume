import Education from 'components/Education/Education';
import Information from 'components/Information/Information';
import Portfolio from 'components/Portfolio/Portfolio';
import WorkExperience from 'components/WorkExperience/WorkExperience';
import './App.css';

function App() {
  return (
    <main className="p-4">
      <Information />
      <WorkExperience />
      <Education />
      <Portfolio />
    </main>
  );
}

export default App;
