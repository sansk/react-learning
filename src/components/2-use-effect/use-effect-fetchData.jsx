import { useState, useEffect} from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetch = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <>
        <h3>useEffect Example - 4 - Fecth Data</h3>
        <h4>Fetch Data from github and display it</h4>
        <h2> Github Users</h2>
        <ul className="users">
            {
                users.map((user) => {
                    const {id, login, avatar_url, html_url} = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <a href={html_url}>{login}</a>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    </>
  )
};

export default UseEffectFetch;