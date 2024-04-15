/**
 * Axios module.
 * @module axios
 */
import Axios from 'axios'

/**
 * Create an instance of Axios with predefined configuration.
 *
 * baseURL: The base URL for all the API requests.
 * headers: Additional headers to be sent along with the API requests.
 * withCredentials: Indicates whether or not cross-site Access-Control requests should be made using credentials.
 * withXSRFToken: Indicates whether or not to include CSRF token in the request.
 *
 * @type {AxiosInstance}
 */
const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
})

export default axios
