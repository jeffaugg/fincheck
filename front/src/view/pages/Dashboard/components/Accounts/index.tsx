import 'swiper/css';
import { PlusIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { Spinner } from '../../../../components/Spinner';

import { AccountsCard } from './AccountCard';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
	const {
		sliderState,
		setSliderState,
		windowWidth,
		toggleValuesVisibility,
		areValuesVisible,
		isLoading,
		accounts,
	} = useAccountsController();

	return (
		<div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
			{isLoading && (
				<div className="w-full h-full flex items-center justify-center">
					<Spinner className="h-10 w-10" />
				</div>
			)}

			{!isLoading && (
				<>
					<div>
						<span className="tracking-[-0.5px] text-white block">
							Saldo total
						</span>
						<div className="flex items-center gap-2">
							<strong
								className={cn(
									'text-2xl tracking-[-1px] text-white',
									!areValuesVisible && 'blur-md',
								)}
							>
								{formatCurrency(1000)}
							</strong>
							<button
								className="w-8 h-8 flex items-center justify-center"
								onClick={() => toggleValuesVisibility()}
							>
								<EyeIcon open={!areValuesVisible} />
							</button>
						</div>
					</div>
					<div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
						{accounts.length === 0 && (
							<>
								<div className="mb-4">
									<strong className="text-white tracking-[-1px] text-lg font-bold">
										Minhas contas
									</strong>
								</div>
								<button className="mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center gap-4 text-white">
									<div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center">
										<PlusIcon className="w-6 h-6" />
									</div>
									<span className="tracking-[-0.5px] text-white font-medium w-32 text-center">
										Cadastre uma nova conta
									</span>
								</button>
							</>
						)}

						{accounts.length > 0 && (
							<div>
								<Swiper
									spaceBetween={16}
									slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
									onSlideChange={(swiper) => {
										setSliderState({
											isBeginning: swiper.isBeginning,
											isEnd: swiper.isEnd,
										});
									}}
								>
									<div
										className="flex justify-between items-center mb-4"
										slot="container-start"
									>
										<strong className="text-white tracking-[-1px] text-lg font-bold">
											Minhas contas
										</strong>
										<SliderNavigation
											isBeginning={sliderState.isBeginning}
											isEnd={sliderState.isEnd}
										/>
									</div>
									<SwiperSlide>
										<AccountsCard
											color="#FF6B6B"
											name="Nubank"
											balance={123.45}
											type="CASH"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<AccountsCard
											color="#4ECDC4"
											name="Banco do Brasil"
											balance={678.9}
											type="CHECKING"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<AccountsCard
											color="#FFE66D"
											name="XP Investimentos"
											balance={1000.0}
											type="INVESTMENT"
										/>
									</SwiperSlide>
								</Swiper>
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);
}
