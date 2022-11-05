async function getRandomUsers() {
  const res = await fetch("https://random-data-api.com/api/v2/users?size=5", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page() {
  const users = await getRandomUsers();

  return (
    <div>
      <div>Server side rendering (SSR)</div>
      <div>
        {users &&
          users.map((user: any) => (
            <div key={user.id}>
              <div>{user.username}</div>
              <div>{user.email}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
