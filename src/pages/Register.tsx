import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

export const Register = () => {
	// add state for email, password, and password-1
	// add onChange handlers for email, password, and password-1
	// add onSubmit handler
	// add validation for email, password, and password-1
	// add error handling for email, password, and password-1

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password1, setPassword1] = useState('');
	const [error, setError] = useState('');

	// add onChange handlers for email, password, and password-1
	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};
	const handlePassword1Change = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword1(e.target.value);
	};

	/**
	 * @description This function handles the form submission
	 * @param {FormEvent<HTMLFormElement>} e - The form event object
	 * @returns {void} - Returns nothing
	 * @example handleSubmit(e) // returns void
	 * @todo Add more validation for the form fields and handle the error messages
	 */

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if ([email, username, password, password1].includes('')) {
			setError('Please fill in all fields');
			toast.error('Please fill in all fields');
			return;
		}

		if (password !== password1) {
			toast.error('Passwords do not match');
			return;
		}

		try {
			const { data } = await axios.post('http://localhost:4000/api/users', {
				email,
				username,
				password,
			});
			if (data.error) {
				toast.error(data.error);
			} else {
				toast.success('Account created successfully');
				throw new Error(data.error);
			}
		} catch (err: any) {
			toast.error(err.message);
		}

		setEmail('');
		setUsername('');
		setPassword('');
		setPassword1('');
		setError('');
	};

	return (
		<>
			<div className='grid  place-items-center content-center h-screen'>
				<div className='flex flex-col items-center justify-center bg-gray-950 rounded-lg shadow-lg p-5 max-w-sm'>
					<h1 className='text-4xl font-bold text-white text-center'>
						Register & Manage {''}{' '}
						<span className='text-cyan-500'>Your Projects</span>
					</h1>
					<form
						className='flex flex-col items-center justify-center w-full text-left m-4'
						onSubmit={handleSubmit}
					>
						{error && (
							<p className='w-full text-red-500 text-center font-bold uppercase'>
								{error}
							</p>
						)}
						<div className='flex flex-col w-full'>
							<label className='text-white mt-2 font-bold' htmlFor='email'>
								Email
							</label>
							<input
								className='bg-gray-900 rounded-lg p-2'
								placeholder='Enter your email'
								type='email'
								name='email'
								value={email}
								onChange={handleEmailChange}
								id='email'
							/>

							<label className='text-white mt-2 font-bold' htmlFor='Name'>
								Name
							</label>
							<input
								className='bg-gray-900 rounded-lg p-2'
								placeholder='Enter your name'
								type='text'
								name='username'
								value={username}
								onChange={handleNameChange}
								id='username'
							/>

							<label className='text-white mt-2 font-bold' htmlFor='password'>
								Password
							</label>
							<input
								className='bg-gray-900 rounded-lg p-2'
								placeholder='Enter your password'
								type='password'
								name='password'
								value={password}
								onChange={handlePasswordChange}
								id='password'
							/>

							<label className='text-white mt-2 font-bold' htmlFor='password'>
								Confirm Password
							</label>
							<input
								className='bg-gray-900 rounded-lg p-2'
								placeholder='Confirm your password'
								type='password'
								name='password-1'
								value={password1}
								onChange={handlePassword1Change}
								id='password-1'
							/>

							<button
								className='bg-cyan-500 rounded-lg p-2 text-white mt-4 font-bold hover:bg-cyan-700  transition-all duration-2'
								type='submit'
							>
								Register Account
							</button>
						</div>
					</form>
					<div className='flex items-center justify-between w-full text-left text-xs '>
						<Link to='/' className='text-gray-500 hover:text-cyan-400'>
							Already have an account? Login
						</Link>

						<Link
							to='/forgot-password'
							className='text-gray-500 hover:text-cyan-400'
						>
							Forgot Password?
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
