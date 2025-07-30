import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
	const { areValuesVisible, toggleValuesVisibility } = useDashboard();

	return {
		areValuesVisible,
		toggleValuesVisibility,
		isInitialLoading: false,
		isLoading: false,
		transactions: [],
	};
}
