import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import type React from 'react';

import { cn } from '../../app/utils/cn';

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
	return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

export function DropdownMenuTrigger({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<RdxDropdownMenu.Trigger className="outline-none">
			{children}
		</RdxDropdownMenu.Trigger>
	);
}

interface IDropdownMenuContentProps {
	children: React.ReactNode;
	className?: string;
}

export function DropdownMenuContent({
	children,
	className,
}: IDropdownMenuContentProps) {
	return (
		<RdxDropdownMenu.Portal>
			<RdxDropdownMenu.Content
				className={cn(
					'p-2 rounded-2xl bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] z-50',
					'data-[position=bottom]:animate-slideUpAndFade',
					'data-[position=top]:animate-slideDownAndFade',
					className,
				)}
			>
				{children}
			</RdxDropdownMenu.Content>
		</RdxDropdownMenu.Portal>
	);
}

interface IDropdownMenuItemProps {
	children: React.ReactNode;
	className?: string;
	onSelect?: () => void;
}

export function DropdownMenuItem({
	children,
	className,
	onSelect,
}: IDropdownMenuItemProps) {
	return (
		<RdxDropdownMenu.Item
			onSelect={onSelect}
			className={cn(
				'min-h-10 outline-none flex items-center px-4 py-2 text-gray-800 text-sm data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
				className,
			)}
		>
			{children}
		</RdxDropdownMenu.Item>
	);
}

export const DropdownMenu = {
	Root: DropdownMenuRoot,
	Trigger: DropdownMenuTrigger,
	Content: DropdownMenuContent,
	Item: DropdownMenuItem,
};
