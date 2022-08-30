import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PartsList from './components/partsList';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PartsList />
    </QueryClientProvider>
  );
}

export default App;
