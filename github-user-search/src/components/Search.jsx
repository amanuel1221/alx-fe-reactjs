import { useState } from "react";
import { fetchUserData, fetchAdvancedUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      // ✅ Basic user fetch if only username provided
      if (username && !location && !minRepos) {
        const data = await fetchUserData(username);
        setUsers([data]);
      } else {
        // ✅ Advanced search
        const data = await fetchAdvancedUserData(username, location, minRepos);
        setUsers(data.items);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && users.length > 0 && (
          <div>
            <p className="mb-4 font-medium">
              Showing {users.length} result{users.length > 1 ? "s" : ""}
            </p>
            <ul className="space-y-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="p-4 border rounded flex items-center space-x-4"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{user.login}</p>
                    {user.location && (
                      <p className="text-sm text-gray-600">
                        📍 {user.location}
                      </p>
                    )}
                    {user.public_repos !== undefined && (
                      <p className="text-sm text-gray-600">
                        📦 {user.public_repos} repos
                      </p>
                    )}
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
