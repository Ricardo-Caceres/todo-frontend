import axiosService from './AxiosServices';

// add each type of method like get, post, put, delete, etc. using axios and typescript with interfaces or types:
const GET = async <T,>(url: string): Promise<T> => {
	try {
		const { data } = await axiosService.get<T>(url);
		return data;
	} catch (error) {
		throw error;
	}
};

const POST = async <T,>(url: string, body: any): Promise<T> => {
	try {
		const { data } = await axiosService.post<T>(url, body);
		return data;
	} catch (error) {
		throw error;
	}
};

const PUT = async <T,>(url: string, body: any): Promise<T> => {
	try {
		const { data } = await axiosService.put<T>(url, body);
		return data;
	} catch (error) {
		throw error;
	}
};

const REMOVE = async <T,>(url: string): Promise<T> => {
	try {
		const { data } = await axiosService.delete<T>(url);
		return data;
	} catch (error) {
		throw error;
	}
};

const PATCH = async <T,>(url: string, body: any): Promise<T> => {
	try {
		const { data } = await axiosService.patch<T>(url, body);
		return data;
	} catch (error) {
		throw error;
	}
};

export { GET, POST, PUT, REMOVE, PATCH };

// import axios, { AxiosResponse } from "axios";

// const BASE_URL = "http://example.com/api/";

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// type RequestMethod = "get" | "post" | "put" | "delete";

// const request = async <T>(
//   method: RequestMethod,
//   url: string,
//   data?: any
// ): Promise<AxiosResponse<T>> => {
//   try {
//     switch (method) {
//       case "get":
//         return await axiosInstance.get<T>(url);
//       case "post":
//         return await axiosInstance.post<T>(url, data);
//       case "put":
//         return await axiosInstance.put<T>(url, data);
//       case "delete":
//         return await axiosInstance.delete<T>(url);
//       default:
//         throw new Error(`Invalid request method ${method}`);
//     }
//   } catch (error) {
//     throw error;
//   }
// };
// ```
// Note: This code assumes that you have a `BASE_URL` constant which represents the base URL of your API. You can replace it with your actual base URL. Also, you can add more headers or modify the existing headers as per your API requirements.
