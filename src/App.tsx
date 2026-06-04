import CoreSkill from 'components/CoreSkill/CoreSkill';
import Education from 'components/Education/Education';
import Information from 'components/Information/Information';
import Portfolio from 'components/Portfolio/Portfolio';
import WorkExperience from 'components/WorkExperience/WorkExperience';
import './App.css';

function App() {
  return (
    <main className="p-4 max-w-[1200px] m-auto">
      <Information />
      <CoreSkill />
      <WorkExperience />
      <Education />
      <Portfolio />
    </main>
  );
}

export default App;
