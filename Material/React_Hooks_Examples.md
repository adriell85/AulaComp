
# React Hooks Examples

## **1. `useState`**
- Permite adicionar e gerenciar o estado em um componente funcional.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## **2. `useEffect`**
- Substitui métodos de ciclo de vida como `componentDidMount`, `componentDidUpdate`, e `componentWillUnmount`.

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Limpeza quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  return <p>Tempo: {seconds}s</p>;
}
```

---

## **3. `useContext`**
- Facilita o uso do **Context API** para compartilhar dados entre componentes sem passar props manualmente.

```jsx
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext();

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return <button style={{ background: theme }}>Clique aqui</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="blue">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
```

---

## **4. `useReducer`**
- Alternativa ao `useState` para gerenciar estados complexos ou múltiplos valores.

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

---

## **5. `useRef`**
- Cria uma referência mutável que persiste entre renderizações, útil para acessar diretamente o DOM.

```jsx
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focar no input</button>
    </div>
  );
}
```

---

## **6. `useMemo`**
- Memoriza o resultado de cálculos pesados para evitar re-calcular em cada renderização.

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ number }) {
  const result = useMemo(() => {
    console.log('Calculando...');
    return number * 2; // Simula cálculo pesado
  }, [number]);

  return <p>Resultado: {result}</p>;
}
```

---

## **7. `useCallback`**
- Memoriza funções para evitar re-criação em re-renderizações.

```jsx
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  return <button onClick={onClick}>Clique</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return <Button onClick={handleClick} />;
}
```

---

## **8. `useImperativeHandle`**
- Permite customizar a instância de um componente filho ao usá-lo com `React.forwardRef`.

---

## **9. `useLayoutEffect`**
- Semelhante ao `useEffect`, mas executado de forma síncrona **antes da pintura no DOM**.

---

## **10. `useDebugValue`**
- Usado para exibir informações úteis sobre Hooks personalizados no React DevTools.

---

## **Hooks Personalizados**
- Encapsule lógica reutilizável em um hook personalizado.

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}

export default useFetch;
```
