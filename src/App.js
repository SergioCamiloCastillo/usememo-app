import react, { useState, useEffect, useMemo, useCallback } from "react";
import List from "./List";

const initialData = [
  {
    id: 1,
    name: "sergio",
  },
  {
    id: 2,
    name: "angelica",
  },
  {
    id: 3,
    name: "Christian ch",
  },
];
function App() {
  useEffect(() => {
    //console.log("App Render");
  });
  const [users, setUsers] = useState(initialData);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, users]
  );
  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Añadir</button>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
