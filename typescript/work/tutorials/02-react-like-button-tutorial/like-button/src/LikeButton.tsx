import React, { useState } from 'react';
import './App.css';
import { setConstantValue } from 'typescript';
import { getValue } from '@testing-library/user-event/dist/utils';

function AppLikeButton() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}
/*
function LikeButton() {
  const [count, setCount] = useState(999); // このように書き換える
  const handleClick = () => {
    setCount(count + 1);
  };
  return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
}

function LikeButton() {
  let count = 0;
  return (
    <span className="likeButton" onClick={() => count = count + 1}>
      ♥ {count}
    </span>
  );
*/
function initCount() {
  // 重たい初期化処理は、関数化しておき初期値として呼び出す
  return 999;
}

function LikeButton() {
  const [count, setCount] = useState(initCount); // このように書き換える
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );

  /*
  
  // イメージこんな感じ
  class useState {
    state;
    constructor(props: any) {
      this.state = props;
    }
  
    public useState() {
      return [this.state, this.getValue];
    }
  
    public setValue(state: any) {
      this.state = state;
    }
  
    public getValue() {
      return this.state;
    }
  }
  
  function LikeButton() {
    const [count, setValue] = new useState(999).useState(); 
    const handleClick = () => {
      setValue(count + 1);
    };
    return (
      <span className="likeButton" onClick={handleClick}>
        ♥ {count}
      </span>
    );
    */
}

export default AppLikeButton;
