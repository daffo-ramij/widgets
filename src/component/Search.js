import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('Love');
  const [result, setResult] = useState([]);

  // console.log(result);

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResult(data.query.search);
    };

    if (term && !result.length) {
      searchWiki();
    } else {
      const timeOut = setTimeout(() => {
        if (term) {
          searchWiki();
        }
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }

    //todo  defines a function and imidiately invoked it
    // (async () => {
    //   await axios.get('');
    // })();
    //Todo Use of Promises
    // axios.get('ffff').then((response) => {
    //   console.log(response.data);
    // });
  }, [term]);

  const renderdList = result.map((result) => {
    return (
      <div key={result.pageid} className=" item">
        <div className="content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Value</label>
          <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
        </div>
      </div>
      <div className="ui celled list"> {renderdList}</div>
    </div>
  );
};

export default Search;
