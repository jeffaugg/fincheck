import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from '../../../../components/icons/EyeIcon';

import { AccountsCard } from './AccountCard.tsx';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
	const { sliderState, setSliderState, windowWidth } = useAccountsController();

	return (
		<div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
			<div>
				<span className="tracking-[-0.5px] text-white block">Saldo total</span>
				<div className="flex items-center gap-2">
					<strong className="text-2xl tracking-[-1px] text-white">
						R$ 1000,00
					</strong>
					<button className="w-8 h-8 flex items-center justify-center">
						<EyeIcon open />
					</button>
				</div>
			</div>
			<div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
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
			</div>
		</div>
	);
}
