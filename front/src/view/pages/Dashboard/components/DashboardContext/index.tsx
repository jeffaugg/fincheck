import React, { createContext, useCallback, useMemo, useState } from 'react';

interface IDashboardContext {
	areValuesVisible: boolean;
	toggleValuesVisibility: () => void;
}

export const DashboardContext = createContext({} as IDashboardContext);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
	const [areValuesVisible, setAreValuesVisible] = useState(true);

	const toggleValuesVisibility = useCallback(
		() => setAreValuesVisible((prev) => !prev),
		[],
	);

	const contextValue = useMemo(
		() => ({ areValuesVisible, toggleValuesVisibility }),
		[areValuesVisible, toggleValuesVisibility],
	);

	return (
		<DashboardContext.Provider value={contextValue}>
			{children}
		</DashboardContext.Provider>
	);
}
