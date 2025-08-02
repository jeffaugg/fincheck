import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import type React from 'react';

import { cn } from '../../app/utils/cn';

interface IModalProps {
	open: boolean;
	onClose?: () => void;
	children: React.ReactNode;
	title: string;
	rightsAction?: React.ReactNode;
}

export function Modal({
	open,
	title,
	children,
	rightsAction,
	onClose,
}: IModalProps) {
	return (
		<Dialog.Root open={open} onOpenChange={onClose}>
			<Dialog.Portal>
				<Dialog.Overlay
					className={cn(
						'fixed inset-0 bg-black/80 backdrop-blur-sm z-50',
						'data-[state=open]:animate-overlayShow',
					)}
				/>
				<Dialog.Content
					className={cn(
						'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-51 shadow-[8px_11px_20px_0px_rgba(0,0,0,0.1)] w-full max-w-[400px] outline-none',
						'data-[state=open]:animate-contentShow',
					)}
				>
					<header className="h-12 flex items-center justify-between text-gray-800">
						<button
							onClick={onClose}
							className="h-12 w-12 flex items-center justify-center outline-none1"
						>
							<Cross2Icon className="h-6 w-6" />
						</button>
						<span className="text-lg tracking-[-1px] font-bold">{title}</span>
						<div className="h-12 w-12 flex items-center justify-center">
							{rightsAction}
						</div>
					</header>

					<div>{children}</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
