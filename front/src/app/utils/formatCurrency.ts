export function formatCurrency(value: number): string {
	return Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(value);
}
