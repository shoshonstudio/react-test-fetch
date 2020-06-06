import React, {useState} from 'react'

const Fetcher = () => {

    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/1');
    const [method, setMethod] = useState('GET');
    const [loaded, setLoaded] = useState(false);
    const [message, setMessage] = useState('Click fetch to fetch');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Loading ...');

        var headers = {  
            method: method,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': '',
            },
            // body: JSON.stringify({
            //   'client_id': '(API KEY)',
            //   'client_secret': '(API SECRET)',
            //   'grant_type': 'client_credentials'
            // })
        }

        fetch(url,headers)
            .then(res => res.json())
            .then(data => {
                setLoaded(true);
                console.log(data);
                setMessage('Loaded (check in the console)');
            })
            .catch(err => {
                setMessage('Something went wrong - check the console');
                console.error("-------------------",err)
            });
    }


    return (
        <form onSubmit={handleSubmit}>
        <div className="two-columns">
        <div>METHOD:</div><select name="nethod" value={method} onChange={e => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
        </select>
        </div>
            <input placeholder="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
            <input type="submit" value="FETCH" />
            <p>{message}</p>
        </form>
    )
}

export default Fetcher;