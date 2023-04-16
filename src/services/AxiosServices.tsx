import axios from 'axios';
import { toast } from 'sonner';

const axiosService = axios.create({
	baseURL: 'http://localhost:4000/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosService.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const { data, status } = error.response;
		if (status === 400) {
			toast.error(data.error);
		}
		if (status === 401) {
			toast.error(data.error);
		}
		if (status === 404) {
			toast.error(data.error);
		}
		if (status === 500) {
			toast.error(data.error);
		}
		return Promise.reject(error);
	}
);

export default axiosService;
