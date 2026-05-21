import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import AtsLayout from '@/pages/ats/AtsLayout';
import Dashboard from '@/pages/ats/Dashboard';
import Jobs from '@/pages/ats/Jobs';
import Candidates from '@/pages/ats/Candidates';
import Pipeline from '@/pages/ats/Pipeline';
import Interviews from '@/pages/ats/Interviews';
import Settings from '@/pages/ats/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ats" element={<AtsLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="pipeline" element={<Pipeline />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
