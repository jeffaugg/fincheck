import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '../../../../../app/config/constants';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import emptyStateImage from '../../../../../assets/empty-state.svg';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { Spinner } from '../../../../components/Spinner';

import { SliderNavigation } from './SliderNavigation';
import { SpliderOption } from './SpliderOption';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { useTransactionsController } from './useTransactionsController';

export function Transactions() {
	const { areValuesVisible, isInitialLoading, transactions, isLoading } =
		useTransactionsController();

	const hasTransactions = transactions.length > 0;
	return (
		<div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
			{isInitialLoading && (
				<div className="w-full h-full flex items-center justify-center">
					<Spinner className="h-10 w-10" />
				</div>
			)}

			{!isInitialLoading && (
				<>
					<header>
						<div className="flex items-center justify-between">
							<TransactionTypeDropdown />
							<button>
								<FilterIcon />
							</button>
						</div>
						<div className="mt-6 relative">
							<Swiper slidesPerView={3} spaceBetween={16} centeredSlides>
								<SliderNavigation />
								{MONTHS.map((month, index) => (
									<SwiperSlide key={month}>
										{({ isActive }) => (
											<SpliderOption
												month={month}
												isActive={isActive}
												index={index}
											/>
										)}
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</header>
					<div className="mt-4 space-y-2 flex-1 overflow-y-auto">
						{isLoading && (
							<div className="flex flex-col items-center justify-center h-full">
								<Spinner className="h-10 w-10" />
							</div>
						)}
						{(!hasTransactions || !isLoading) && (
							<div className="flex flex-col items-center justify-center h-full">
								<img src={emptyStateImage} alt="Empty State" />
								<p className="text-gray-700">
									Não encontramos nenhuma transação
								</p>
							</div>
						)}

						{hasTransactions && !isLoading && (
							<>
								<div className="bg-white rounded-2xl p-4 flex items-center gap-4">
									<div className="flex-1 flex items-center gap-3">
										<CategoryIcon type="expense" />
										<div>
											<strong className="font-bold tracking-[-0.5px]">
												Almoco
											</strong>
											<span className="text-sm text-gray-600 block">
												04/06/2023
											</span>
										</div>
									</div>

									<span
										className={cn(
											'tracking-[-0.5.px] text-red-800 font-medium',
											!areValuesVisible && 'blur-sm',
										)}
									>
										-{formatCurrency(1000)}
									</span>
								</div>

								<div className="bg-white rounded-2xl p-4 flex items-center gap-4">
									<div className="flex-1 flex items-center gap-3">
										<CategoryIcon type="income" />
										<div>
											<strong className="font-bold tracking-[-0.5px]">
												Almoco
											</strong>
											<span className="text-sm text-gray-600 block">
												04/06/2023
											</span>
										</div>
									</div>

									<span
										className={cn(
											'tracking-[-0.5.px] text-green-800 font-medium',
											!areValuesVisible && 'blur-sm',
										)}
									>
										-{formatCurrency(1000)}
									</span>
								</div>
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
}
