import { useState } from 'react';

import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
	const { areValuesVisible, toggleValuesVisibility } = useDashboard();
	const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

	function handleOpenFiltersModal() {
		setIsFiltersModalOpen(true);
	}

	function handleCloseFiltersModal() {
		setIsFiltersModalOpen(false);
	}

	return {
		areValuesVisible,
		toggleValuesVisibility,
		isInitialLoading: false,
		isLoading: false,
		transactions: [],
		isFiltersModalOpen,
		openFiltersModal: handleOpenFiltersModal,
		closeFiltersModal: handleCloseFiltersModal,
	};
}
