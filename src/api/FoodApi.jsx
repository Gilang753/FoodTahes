const API_URL = 'https://683a76a543bb370a8672c4e3.mockapi.io/api/foods';

export const getFoods = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getFoodById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const addFood = async (data) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const updateFood = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const deleteFood = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};

