import type { ComponentProps } from 'react';

import { cn } from '../../app/utils/cn';

import { Spinner } from './Spinner';

interface IButtonProps extends ComponentProps<'button'> {
	// eslint-disable-next-line react/require-default-props
	isPending?: boolean;
}

export function Button({
	className,
	isPending,
	disabled,
	children,
	...props
}: IButtonProps) {
	return (
		<button
			{...props}
			disabled={isPending || disabled}
			className={cn(
				`bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
					px-6 h-12 rounded-2xl font-medium text-white transition-all flex justify-center items-center`,
				className,
			)}
		>
			{!isPending && children}
			{isPending && <Spinner className="w-6 h-6" />}
		</button>
	);
}
