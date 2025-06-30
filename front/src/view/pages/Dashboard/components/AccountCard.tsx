import { CategoryIcon } from '../../../components/icons/categories/CategoryIcon';

export function AccountsCard() {
	return (
		<div className="p-4 bg-white rounded-2xl">
			<div>
				<CategoryIcon type="income" />
				<span className="text-gray-8 font-medium tracking-[-0.5px] mt-4 block">
					Nubank
				</span>
			</div>

			<div>
				<span className="text-gray-8 font-medium tracking-[-0.5px] block">
					R$ 123,00
				</span>
			</div>
		</div>
	);
}
