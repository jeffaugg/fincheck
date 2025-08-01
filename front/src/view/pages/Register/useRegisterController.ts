import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import z from 'zod';

import { useAuth } from '../../../app/hooks/useAuth';
import { authService } from '../../../app/services/authService';
import type { ISignupParams } from '../../../app/services/authService/signup';

const schema = z.object({
	name: z.string().nonempty('Nome é obrigatório'),
	email: z
		.string()
		.nonempty('E-mail é obrigatório')
		.email('Informe um e-mail válido'),
	password: z
		.string()
		.nonempty('Senha é obrigatória')
		.min(8, 'Senha deve conter pelo menos 8 dígitoss'),
});

type IRegisterSubmission = z.infer<typeof schema>;

export function useRegisterController() {
	const {
		handleSubmit: hookFormHandleSubmit,
		register,
		formState: { errors },
	} = useForm<IRegisterSubmission>({
		resolver: zodResolver(schema),
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: async (body: ISignupParams) => authService.signup(body),
	});

	const { signin } = useAuth();

	const handleSubmit = hookFormHandleSubmit(async (data) => {
		try {
			const { accessToken } = await mutateAsync(data);

			signin(accessToken);
		} catch {
			toast.error('Ocorreu um erro ao criar a sua conta');
		}
	});

	return { handleSubmit, register, errors, isPending };
}
