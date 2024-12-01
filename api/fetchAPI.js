import { apiList, commonApiList } from './apiList';
import { logout } from '@/utils/helper';
import showToast from '@/utils/showToast';
import { STATUS } from '@/constant/common/constant';
import { config } from '@/config/config';

async function fetchToken() {
  try {
    const response = await fetch('/api/getToken', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!data?.token) {
      await logout();
      showToast('Token Expired. Logging out.', STATUS.WARN);
      return undefined;
    }

    return data?.token;
  } catch (error) {
    console.error('Failed to fetch token:', error);
    showToast('Failed to fetch token.', STATUS.ERROR);
    return undefined;
  }
}

async function setHeaders({ contentType = 'application/json', authToken = true, userAgent, origin }) {
  const headers = {
    'Content-Type': contentType,
    Accept: 'application/json',
  };

  if (authToken) {
    const token = await fetchToken();
    if (token) {
      headers.Authorization = `JWT ${token}`;
    } else {
      console.warn('Token is missing. Skipping Authorization header.');
      showToast('Token is missing. Skipping Authorization header.', STATUS.WARN);
    }
  }

  if (userAgent) {
    headers['User-Agent'] = userAgent;
  }

  if (origin) {
    headers.origin = origin;
  }

  return headers;
}

async function handleError(response) {
  const UnauthorizedCodes = [401, 403];

  if (UnauthorizedCodes.includes(response.status)) {
    await logout();
    showToast('Session expired or unauthorized. Logging out.', STATUS.ERROR);
    return false;
  }

  const errorData = await response.json();
  const message = errorData?.message || 'An unexpected error occurred. Please try again later.';
  showToast(message, STATUS.ERROR);
  console.error('API Error:', message);
  return Promise.reject(new Error(message));
}

const fetchAPI = async ({ apiName, data = undefined, params, module = '', commonAPI = false, auth = true }) => {
  try {
    const baseUrl = config.ROOT_API;
    const apiConfig = commonAPI ? commonApiList[apiName] : apiList[apiName];

    if (!apiConfig) {
      showToast(`API name '${apiName}' not found.`, STATUS.ERROR);
      throw new Error(`API name '${apiName}' not found`);
    }

    const { url: urlFunction, method, baseurl } = apiConfig;
    const finalUrl = commonAPI ? urlFunction({ module, params }) : urlFunction({ params });

    const headers = await setHeaders({ authToken: auth });

    if (!headers) {
      return undefined;
    }

    const url = `${baseurl ?? baseUrl}${finalUrl}`;

    const response = await fetch(url, {
      method: method.toUpperCase(),
      headers,
      body: method.toUpperCase() !== 'GET' ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      return handleError(response);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      showToast('The server is currently unavailable. Please try again later.', STATUS.ERROR);
      throw error;
    }

    console.error('Error in fetchAPI:', error);
    showToast('An unexpected error occurred. Please try again later.', STATUS.ERROR);
    throw error;
  }
};

export default fetchAPI;
