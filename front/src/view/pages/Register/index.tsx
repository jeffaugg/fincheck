import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Input } from '../../components/input';

import { useRegisterController } from './useRegisterController';

export function Register() {
	const { errors, handleSubmit, register, isPending } = useRegisterController();
	return (
		<>
			<header className="flex flex-col items-center gap-4 text-center">
				<h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
					Crie sua conta
				</h1>
				<p className="space-x-2">
					<span className="text-gray-700 tracking-[-0.5px]">
						Já possui uma conta?
					</span>
					<Link
						to="/login"
						className="tracking-[-0.5px] font-medium text-teal-900"
					>
						Fazer login
					</Link>
				</p>
			</header>

			<form className="mt-15 flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input
					placeholder="Nome"
					{...register('name')}
					error={errors.name?.message}
				/>

				<Input
					type="email"
					placeholder="Email"
					{...register('email')}
					error={errors.email?.message}
				/>

				<Input
					type="password"
					placeholder="Senha"
					{...register('password')}
					error={errors.password?.message}
				/>

				<Button type="submit" className="mt-2" isPending={isPending}>
					Criar conta
				</Button>
			</form>
		</>
	);
}
