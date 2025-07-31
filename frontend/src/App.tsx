import ClerkProviderWithRoute from "./auth/ClerkProviderWIthRoute";
import { Routes, Route } from "react-router-dom"
import { Layout } from "./layout/Layout";
import { ChallengeGenerator } from "./challenge/ChallengeGenerator";
import { HistoryPanel } from "./history/HistoryPanel";
import { AuthenticationPage } from "./auth/AuthenticationPage";
export default function App() {
  return (
    <>
    <ClerkProviderWithRoute>
      <Routes>
        <Route path='/signin/*' element={<AuthenticationPage/>} />
        <Route path='/signup/*' element={<AuthenticationPage/>} />
        <Route element={<Layout/>} >
            <Route path="/"   element={<ChallengeGenerator/>} />
            <Route path="/history" element={<HistoryPanel/>} />
        </Route>

      </Routes>
    </ClerkProviderWithRoute>
    </>
  );
}