import { Modal } from '../../../../components/Modal';

interface IFiltersModalProps {
	open: boolean;
	onClose: () => void;
}

export function FiltersModal({ open, onClose }: IFiltersModalProps) {
	return (
		<Modal open={open} onClose={onClose} title="Filtros">
			conteudo
		</Modal>
	);
}
