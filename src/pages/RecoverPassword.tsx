export const RecoverPassword = () => {
	return (
		<>
			<div className='grid place-items-center content-center h-screen'>
				<div className='flex flex-col items-center justify-center bg-gray-950 rounded-lg shadow-lg p-5 max-w-sm shadow-xl'>
					<h1 className='text-4xl font-bold text-white text-center'>
						Recover Password
					</h1>
					<form className='flex flex-col items-center justify-center w-full text-left m-4'>
						<div className='flex flex-col w-full'>
							<label className='text-white mt-2 font-bold' htmlFor='password'>
								Password
							</label>
							<input
								className='bg-gray-900 rounded-lg p-2'
								placeholder='Enter your password'
								type='password'
								name='password'
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
								id='password-1'
							/>

							<button
								className='bg-cyan-500 rounded-lg p-2 text-white mt-4 font-bold hover:bg-cyan-700  transition-all duration-2'
								type='submit'
							>
								Recover Password
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
