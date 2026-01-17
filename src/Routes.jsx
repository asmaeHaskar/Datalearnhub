import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CourseContent from './pages/course-content';
import HomeLanding from './pages/home-landing';
import LearningPaths from './pages/learning-paths';
import MiniProjects from './pages/mini-projects';
import UserDashboard from './pages/user-dashboard';
import SQLNoSQLPlayground from './pages/sql-no-sql-playground';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<HomeLanding />} />
          <Route path="/course-content" element={<CourseContent />} />
          <Route path="/home-landing" element={<HomeLanding />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/mini-projects" element={<MiniProjects />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/sql-no-sql-playground" element={<SQLNoSQLPlayground />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
