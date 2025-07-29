import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
	const { areValuesVisible, toggleValuesVisibility } = useDashboard();

	return {
		areValuesVisible,
		toggleValuesVisibility,
		isInti: false,
		transactions: [],
	};
}
