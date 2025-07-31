import * as Dialog from '@radix-ui/react-dialog';
import type React from 'react';

import { cn } from '../../../app/utils/cn';

import { ModalContent } from './ModalContent';
import { ModalHeader } from './ModalHeader';

interface IModalProps {
	open: boolean;
	children: React.ReactNode;
}

export function Modal({ open, children }: IModalProps) {
	return (
		<Dialog.Root open={open}>
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
					{children}
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
