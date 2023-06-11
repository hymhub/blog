import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const codeSnippet = `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  return [...merged, ...left.slice(i), ...right.slice(j)];
}`

const codeSnippetList = codeSnippet.split('\n').map(v => v.replace(/^\s*$/, '\n'))

const cards = [7, 6, 5, 4, 3, 2, 1, 0]

function CodeContent() {
  const [codeSnippetArr, setCodeSnippetArr] = useState([])
  const cardAnimId = useRef(null)
  const startTimeRef = useRef<number>(0)
  useEffect(() => {
    let idx = 0;
    (function run() {
      cardAnimId.current = window.requestAnimationFrame(() => {
        if (Date.now() - startTimeRef.current >= 250) {
          startTimeRef.current = Date.now()
          if (++idx + 10 > codeSnippetList.length) {
            idx = 0
          }
          setCodeSnippetArr(codeSnippetList.slice(idx, idx + 10))
        }
        run()
      })
    })()
    return () => {
      window.cancelAnimationFrame(cardAnimId.current)
    }
  }, [])
  return (
    <div>
      {
        codeSnippetArr.map((it, idx) => (
          <div key={idx} className={styles.item}>{it}</div>
        ))
      }
    </div>
  )
}

export default function CodeLife(): JSX.Element {
  const cardAnimId = useRef(null)
  const startTimeRef = useRef<number>(0)
  useEffect(() => {
    let num = 0;
    (function run() {
      cardAnimId.current = window.requestAnimationFrame(() => {
        if (Date.now() - startTimeRef.current >= 500) {
          startTimeRef.current = Date.now()
          if (++num > 255) {
            num = 0
          }
          const formatNum = Number(num).toString(2).split("").reverse().join("")
          cards.forEach(it => {
            const el = document.getElementById(`cardItem${it}`)
            if (el) {
              el.style.transform = `rotateX(${Number(formatNum[it] ?? 0) * 180}deg)`
            }
          })
        }
        run()
      })
    })()
    return () => {
      window.cancelAnimationFrame(cardAnimId.current)
    }
  }, [])
  return (
    <div className={styles.codeLife}>
      <div className={styles.codeBg}>
        <CodeContent />
      </div>
      <div className={styles.cardBox}>
        {
          cards.map(it => (
            <div id={`cardItem${it}`} key={it} className={styles.cardItem}>
              <div className={styles.front}>0</div>
              <div className={styles.opposite}>1</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
