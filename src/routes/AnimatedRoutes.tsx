/**
 * @file AnimatedRoutes.tsx
 * @description Handles the animated transitions between different routes using Framer Motion.
 */

import React, { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { LoginForm } from "../features/auth/LoginForm";
import { RegisterForm } from "../features/auth/RegisterForm";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { ElectionResults } from "../pages/public/ElectionResults/ElectionResults";
import { OngoingElections } from "../pages/user/OnGoingElections";
import { About } from "../pages/public/About/About";
import { Resources } from "pages/user/Resources/Resourses";
import { Home } from "../pages/public/Home/Home";
import { VotingPage } from "../pages/user/VotingPage/VotingPage";
import { FAQ } from "../pages/public/FAQ/FAQ";
import { ContactUs } from "../pages/public/ContactUs";
import { PrivacyPolicy } from "../pages/public/PrivacyPolicy";
import { TermsOfUse } from "../pages/public/TermsOfUse";
import { AdminFunc } from "../pages/admin/AdminFunc";
import { VotingGuide } from "../pages/guide/VotingGuide/VotingGuide";
import { ConnectWalletGuide } from "pages/guide/WalletGuide/ConnectWallet";
import { ResultsGuide } from "../pages/guide/ResultsGuide/ResultsGuide";
import { FinishedElections } from "pages/public/ElectionResults/FinishedElections";
import { PageWrapper } from "@theme/PageWrapper";
import { RegistrationFlow } from "features/registration/RegistrationFlow";

/**
 * Renders the animated route transitions for the application.
 *
 * @returns {JSX.Element} The routes wrapped in AnimatePresence for transitions.
 */
export const AnimatedRoutes: FC = (): JSX.Element => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/login"
          element={
            <PageWrapper>
              <LoginForm />
            </PageWrapper>
          }
        />
        <Route
          path="/register"
          element={
            <PageWrapper>
              <RegistrationFlow />
            </PageWrapper>
          }
        />
        <Route
          path="/connect"
          element={
            <PageWrapper>
              <RegisterForm />
            </PageWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <PageWrapper>
              <AdminDashboard />
            </PageWrapper>
          }
        />
        <Route
          path="/results"
          element={
            <PageWrapper>
              <FinishedElections />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/resources"
          element={
            <PageWrapper>
              <Resources />
            </PageWrapper>
          }
        />
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/voting"
          element={
            <PageWrapper>
              <OngoingElections />
            </PageWrapper>
          }
        />
        <Route
          path="/faq"
          element={
            <PageWrapper>
              <FAQ />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactUs />
            </PageWrapper>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageWrapper>
              <PrivacyPolicy />
            </PageWrapper>
          }
        />
        <Route
          path="/terms"
          element={
            <PageWrapper>
              <TermsOfUse />
            </PageWrapper>
          }
        />
        <Route
          path="/adminfunc"
          element={
            <PageWrapper>
              <AdminFunc />
            </PageWrapper>
          }
        />
        <Route
          path="/onGoingElections"
          element={
            <PageWrapper>
              <OngoingElections />
            </PageWrapper>
          }
        />
        <Route
          path="/guide/voting"
          element={
            <PageWrapper>
              <VotingGuide />
            </PageWrapper>
          }
        />
        <Route
          path="/guide/connect-wallet"
          element={
            <PageWrapper>
              <ConnectWalletGuide />
            </PageWrapper>
          }
        />
        <Route
          path="/guide/results"
          element={
            <PageWrapper>
              <ResultsGuide />
            </PageWrapper>
          }
        />
        <Route
          path="/finishedElections"
          element={
            <PageWrapper>
              <FinishedElections />
            </PageWrapper>
          }
        />
        <Route
          path="/voting/:id"
          element={
            <PageWrapper>
              <VotingPage />
            </PageWrapper>
          }
        />
        <Route
          path="/results/:id"
          element={
            <PageWrapper>
              <ElectionResults />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
