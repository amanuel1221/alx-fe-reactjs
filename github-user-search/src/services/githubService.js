import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ Basic user lookup (for checker)
export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
}

// ✅ Advanced search (for task 2)
export async function fetchAdvancedUserData(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(`${BASE_URL}/search/users?q=${query.trim()}`);
  return response.data;
}
