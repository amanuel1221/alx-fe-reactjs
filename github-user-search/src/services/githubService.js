import axios from "axios";

const BASE_URL = "https://api.github.com";

// ✅ Basic lookup (for single username)
export async function fetchUserData(username) {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
}

// ✅ Advanced search (must contain "https://api.github.com/search/users?q")
export async function fetchAdvancedUserData(username, location, minRepos) {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query.trim()}`
  );
  return response.data;
}
