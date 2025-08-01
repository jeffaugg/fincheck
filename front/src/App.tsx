import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './app/contexts/AuthContext';
import { Router } from './Router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
});

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
				<Toaster />
			</AuthProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
