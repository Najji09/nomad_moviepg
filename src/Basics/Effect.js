import React from 'react';
import { useEffect, useState } from 'react';

const Effect = () => {
  console.log('Run all the time');
  const [keyword, setKeyword] = useState('');
  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };
  useEffect(() => {
    console.log('Call API...');
  }, []);
  useEffect(() => {
    if (keyword.length >= 5) {
      console.log('Search for', keyword);
    }
  }, [keyword]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <input
        onChange={onKeywordChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default Effect;
