const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/data`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
