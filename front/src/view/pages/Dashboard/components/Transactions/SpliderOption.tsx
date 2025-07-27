import { useSwiper } from 'swiper/react';

import { cn } from '../../../../../app/utils/cn';

interface ISpliderOptionProps {
	month: string;
	isActive: boolean;
	index: number;
}

export function SpliderOption({ month, isActive, index }: ISpliderOptionProps) {
	const swipper = useSwiper();

	return (
		<button
			onClick={() => swipper.slideTo(index)}
			className={cn(
				'w-full h-12 rounded-full text-sm text-gray-900 tracking-[-0.5px] font-medium',
				isActive && 'bg-white',
			)}
		>
			{month}
		</button>
	);
}
