import React, { useState, useEffect, useRef } from 'react';

function extractIfFunction(initialState) {
  return initialState instanceof Function ? initialState() : initialState;
}

export default function useStateWithLocaleStorage(
  key,
  initialState,
  callbacks
) {
  const [value, setValue] = useState(() => {
    const rawItem = localStorage.getItem(key);

    if (rawItem !== 'undefined' && rawItem) {
      const item = JSON.parse(rawItem);
      callbacks?.present && callbacks.present(item);
      return item;
    } else {
      callbacks?.missing && callbacks.missing();
      return extractIfFunction(initialState);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export function useInterval(callback, ms) {
  useEffect(() => {
    function tick() {
      callback();
    }

    if (ms !== null && ms !== undefined) {
      const id = window.setInterval(tick, ms);
      return () => clearInterval(id);
    }
  }, [ms, callback]);
}

export function useIntervalWhitWrappedCallback(callback, ms) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }

    if (ms !== null && ms !== undefined) {
      const id = window.setInterval(tick, ms);
      return () => clearInterval(id);
    }
  }, [ms]);
}

export const RenderLogger = (Component) => (props) => {
  console.log(
    'Render logger HOC of ' +
      Component.name +
      ' with props: ' +
      JSON.stringify(props)
  );
  return <Component {...props} />;
};
