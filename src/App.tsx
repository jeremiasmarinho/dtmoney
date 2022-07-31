import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
