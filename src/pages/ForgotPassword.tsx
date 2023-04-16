import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
	return (
		<>
			<div className='grid  place-items-center content-center h-screen'>
				<div className='flex flex-col items-center justify-center bg-gray-950 rounded-lg shadow-lg p-5 max-w-sm shadow-xl'>
					<h1 className='text-4xl font-bold text-white text-center'>
						Forgot Password
					</h1>
					<form className='flex flex-col items-center justify-center w-full text-left m-4'>
						<div className='flex flex-col w-full'>
							<label className='text-white mt-2 font-bold' htmlFor='email'>
								Email
							</label>
							<input
								className='bg-gray-900 rounded-lg p-2'
								placeholder='Enter your email'
								type='email'
								name='email'
								id='email'
							/>

							<button
								className='bg-cyan-500 rounded-lg p-2 text-white mt-4 font-bold hover:bg-cyan-700  transition-all duration-2'
								type='submit'
							>
								Reset Password
							</button>
						</div>
					</form>
					<div className='flex items-center justify-between w-full text-left text-xs '>
						<Link to='/login' className='text-gray-500 hover:text-cyan-400'>
							Back to Login
						</Link>

						<Link to='/register' className='text-gray-500 hover:text-cyan-400'>
							Don't have an account? Register
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
