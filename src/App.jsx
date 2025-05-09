
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import DashboardPage from '@/pages/DashboardPage';
import ContractsPage from '@/pages/ContractsPage';
import ContractDetailsPage from '@/pages/ContractDetailsPage';
import UploadPage from '@/pages/UploadPage';
import SearchPage from '@/pages/SearchPage';
import AlertsPage from '@/pages/AlertsPage';
import AnalysisPage from '@/pages/AnalysisPage';
import CalendarPage from '@/pages/CalendarPage';
import SettingsPage from '@/pages/SettingsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { Toaster } from '@/components/ui/toaster';
import TextAnalyzer from '@/components/TextAnalyzer.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="contracts" element={<ContractsPage />} />
          <Route path="contracts/:id" element={<ContractDetailsPage />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="analysis" element={<AnalysisPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="text-analyzer" element={<TextAnalyzer />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
  