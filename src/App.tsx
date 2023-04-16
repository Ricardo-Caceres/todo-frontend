import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ForgotPassword } from './pages/ForgotPassword';
import { ConfirmAccount } from './pages/ConfirmAccount';
import { RecoverPassword } from './pages/RecoverPassword';
import { Toaster, toast } from 'sonner';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<AuthLayout />}>
						<Route index element={<Login />} />
						<Route path='register' element={<Register />} />
						<Route path='*' element={<div>404</div>} />
						<Route path='forgot-password' element={<ForgotPassword />} />
						<Route
							path='forgot-password/:token'
							element={<RecoverPassword />}
						/>
						<Route path='confirm-account/:id' element={<ConfirmAccount />} />
					</Route>
					<Route path='/about' element={<div>About</div>} />
				</Routes>
			</BrowserRouter>
			<Toaster richColors closeButton />
		</>
	);
}

export default App;
