import React, { useEffect, useRef, useState } from "react";
import "./style.css"
const noteBaseUrl = '/blog/piano/'
import midiJson from "../../../static/mariage_d'amour.json"

const keys = [
  { id: 1, name: 'C2', keyCode: '49', key: '1', url: noteBaseUrl + 'a49.mp3', type: 'white' },
  { id: 2, name: 'C#2', keyCode: 'b49', key: '⇧<br>+<br>1', url: noteBaseUrl + 'b49.mp3', type: 'black' },
  { id: 3, name: 'D2', keyCode: '50', key: '2', url: noteBaseUrl + 'a50.mp3', type: 'white' },
  { id: 4, name: 'D#2', keyCode: 'b50', key: '⇧<br>+<br>2', url: noteBaseUrl + 'b50.mp3', type: 'black' },
  { id: 5, name: 'E2', keyCode: '51', key: '3', url: noteBaseUrl + 'a51.mp3', type: 'white' },
  { id: 6, name: 'F2', keyCode: '52', key: '4', url: noteBaseUrl + 'a52.mp3', type: 'white' },
  { id: 7, name: 'F#2', keyCode: 'b52', key: '⇧<br>+<br>4', url: noteBaseUrl + 'b52.mp3', type: 'black' },
  { id: 8, name: 'G2', keyCode: '53', key: '5', url: noteBaseUrl + 'a53.mp3', type: 'white' },
  { id: 9, name: 'G#2', keyCode: 'b53', key: '⇧<br>+<br>5', url: noteBaseUrl + 'b53.mp3', type: 'black' },
  { id: 10, name: 'A2', keyCode: '54', key: '6', url: noteBaseUrl + 'a54.mp3', type: 'white' },
  { id: 11, name: 'A#2', keyCode: 'b54', key: '⇧<br>+<br>6', url: noteBaseUrl + 'b54.mp3', type: 'black' },
  { id: 12, name: 'B2', keyCode: '55', key: '7', url: noteBaseUrl + 'a55.mp3', type: 'white' },
  { id: 13, name: 'C3', keyCode: '56', key: '8', url: noteBaseUrl + 'a56.mp3', type: 'white' },
  { id: 14, name: 'C#3', keyCode: 'b56', key: '⇧<br>+<br>8', url: noteBaseUrl + 'b56.mp3', type: 'black' },
  { id: 15, name: 'D3', keyCode: '57', key: '9', url: noteBaseUrl + 'a57.mp3', type: 'white' },
  { id: 16, name: 'D#3', keyCode: 'b57', key: '⇧<br>+<br>9', url: noteBaseUrl + 'b57.mp3', type: 'black' },
  { id: 17, name: 'E3', keyCode: '48', key: '0', url: noteBaseUrl + 'a48.mp3', type: 'white' },
  { id: 18, name: 'F3', keyCode: '81', key: 'Q', url: noteBaseUrl + 'a81.mp3', type: 'white' },
  { id: 19, name: 'F#3', keyCode: 'b81', key: '⇧<br>+<br>Q', url: noteBaseUrl + 'b81.mp3', type: 'black' },
  { id: 20, name: 'G3', keyCode: '87', key: 'W', url: noteBaseUrl + 'a87.mp3', type: 'white' },
  { id: 21, name: 'G#3', keyCode: 'b87', key: '⇧<br>+<br>W', url: noteBaseUrl + 'b87.mp3', type: 'black' },
  { id: 22, name: 'A3', keyCode: '69', key: 'E', url: noteBaseUrl + 'a69.mp3', type: 'white' },
  { id: 23, name: 'A#3', keyCode: 'b69', key: '⇧<br>+<br>E', url: noteBaseUrl + 'b69.mp3', type: 'black' },
  { id: 24, name: 'B3', keyCode: '82', key: 'R', url: noteBaseUrl + 'a82.mp3', type: 'white' },
  { id: 25, name: 'C4', keyCode: '84', key: 'T', url: noteBaseUrl + 'a84.mp3', type: 'white' },
  { id: 26, name: 'C#4', keyCode: 'b84', key: '⇧<br>+<br>T', url: noteBaseUrl + 'b84.mp3', type: 'black' },
  { id: 27, name: 'D4', keyCode: '89', key: 'Y', url: noteBaseUrl + 'a89.mp3', type: 'white' },
  { id: 28, name: 'D#4', keyCode: 'b89', key: '⇧<br>+<br>Y', url: noteBaseUrl + 'b89.mp3', type: 'black' },
  { id: 29, name: 'E4', keyCode: '85', key: 'U', url: noteBaseUrl + 'a85.mp3', type: 'white' },
  { id: 30, name: 'F4', keyCode: '73', key: 'I', url: noteBaseUrl + 'a73.mp3', type: 'white' },
  { id: 31, name: 'F#4', keyCode: 'b73', key: '⇧<br>+<br>I', url: noteBaseUrl + 'b73.mp3', type: 'black' },
  { id: 32, name: 'G4', keyCode: '79', key: 'O', url: noteBaseUrl + 'a79.mp3', type: 'white' },
  { id: 33, name: 'G#4', keyCode: 'b79', key: '⇧<br>+<br>O', url: noteBaseUrl + 'b79.mp3', type: 'black' },
  { id: 34, name: 'A4', keyCode: '80', key: 'P', url: noteBaseUrl + 'a80.mp3', type: 'white' },
  { id: 35, name: 'A#4', keyCode: 'b80', key: '⇧<br>+<br>P', url: noteBaseUrl + 'b80.mp3', type: 'black' },
  { id: 36, name: 'B4', keyCode: '65', key: 'A', url: noteBaseUrl + 'a65.mp3', type: 'white' },
  { id: 37, name: 'C5', keyCode: '83', key: 'S', url: noteBaseUrl + 'a83.mp3', type: 'white' },
  { id: 38, name: 'C#5', keyCode: 'b83', key: '⇧<br>+<br>S', url: noteBaseUrl + 'b83.mp3', type: 'black' },
  { id: 39, name: 'D5', keyCode: '68', key: 'D', url: noteBaseUrl + 'a68.mp3', type: 'white' },
  { id: 40, name: 'D#5', keyCode: 'b68', key: '⇧<br>+<br>D', url: noteBaseUrl + 'b68.mp3', type: 'black' },
  { id: 41, name: 'E5', keyCode: '70', key: 'F', url: noteBaseUrl + 'a70.mp3', type: 'white' },
  { id: 42, name: 'F5', keyCode: '71', key: 'G', url: noteBaseUrl + 'a71.mp3', type: 'white' },
  { id: 43, name: 'F#5', keyCode: 'b71', key: '⇧<br>+<br>G', url: noteBaseUrl + 'b71.mp3', type: 'black' },
  { id: 44, name: 'G5', keyCode: '72', key: 'H', url: noteBaseUrl + 'a72.mp3', type: 'white' },
  { id: 45, name: 'G#5', keyCode: 'b72', key: '⇧<br>+<br>H', url: noteBaseUrl + 'b72.mp3', type: 'black' },
  { id: 46, name: 'A5', keyCode: '74', key: 'J', url: noteBaseUrl + 'a74.mp3', type: 'white' },
  { id: 47, name: 'A#5', keyCode: 'b74', key: '⇧<br>+<br>J', url: noteBaseUrl + 'b74.mp3', type: 'black' },
  { id: 48, name: 'B5', keyCode: '75', key: 'K', url: noteBaseUrl + 'a75.mp3', type: 'white' },
  { id: 49, name: 'C6', keyCode: '76', key: 'L', url: noteBaseUrl + 'a76.mp3', type: 'white' },
  { id: 50, name: 'C#6', keyCode: 'b76', key: '⇧<br>+<br>L', url: noteBaseUrl + 'b76.mp3', type: 'black' },
  { id: 51, name: 'D6', keyCode: '90', key: 'Z', url: noteBaseUrl + 'a90.mp3', type: 'white' },
  { id: 52, name: 'D#6', keyCode: 'b90', key: '⇧<br>+<br>Z', url: noteBaseUrl + 'b90.mp3', type: 'black' },
  { id: 53, name: 'E6', keyCode: '88', key: 'X', url: noteBaseUrl + 'a88.mp3', type: 'white' },
  { id: 54, name: 'F6', keyCode: '67', key: 'C', url: noteBaseUrl + 'a67.mp3', type: 'white' },
  { id: 55, name: 'F#6', keyCode: 'b67', key: '⇧<br>+<br>C', url: noteBaseUrl + 'b67.mp3', type: 'black' },
  { id: 56, name: 'G6', keyCode: '86', key: 'V', url: noteBaseUrl + 'a86.mp3', type: 'white' },
  { id: 57, name: 'G#6', keyCode: 'b86', key: '⇧<br>+<br>V', url: noteBaseUrl + 'b86.mp3', type: 'black' },
  { id: 58, name: 'A6', keyCode: '66', key: 'B', url: noteBaseUrl + 'a66.mp3', type: 'white' },
  { id: 59, name: 'A#6', keyCode: 'b66', key: '⇧<br>+<br>B', url: noteBaseUrl + 'b66.mp3', type: 'black' },
  { id: 60, name: 'B6', keyCode: '78', key: 'N', url: noteBaseUrl + 'a78.mp3', type: 'white' },
  // {id: 61, name: 'C7', keyCode: '77', key: 'M', url: noteBaseUrl + 'a77.mp3', type: 'white'},
]

type KeyItem = typeof keys[0]

const handleMouseDown = (item: KeyItem, key: number) => {
  document.getElementById(item.name).classList.add(`key-${key}-active`);
  new Audio(item.url).play()
}

const handleMouseUp = (item: KeyItem, key: number) => {
  document.getElementById(item.name).classList.remove(`key-${key}-active`)
}

interface KeysListItem extends KeyItem {
  load?: boolean
}

export default function Piano(props: {
  setPianoIsReady: React.Dispatch<React.SetStateAction<boolean>>
  play: boolean
}): JSX.Element {
  const animationFrameRef = useRef<number>()
  const [keysList, setKeysList] = useState<KeysListItem[]>(keys.map(v => ({ ...v, load: false })))
  const midiPlay = (midiJson: {
    bpm: number
    notes: {
      duration: number
      durationTicks: number
      midi: number
      name: string
      ticks: number
      time: number
      velocity: number
    }[]
  }) => {
    const noteQueue = midiJson.notes
    const startTime = Date.now()
    const play = () => {
      const fragment = noteQueue.slice(0, 20)
      fragment.forEach((note) => {
        if (Date.now() - startTime >= note.time * 1000) {
          const mouseDownEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
          });
          const mouseUpEvent = new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
          })
          document.getElementById(note.name).dispatchEvent(mouseDownEvent);
          setTimeout(() => {
            document.getElementById(note.name).dispatchEvent(mouseUpEvent);
          }, 80);
          noteQueue.shift()
        }
      })
      animationFrameRef.current = window.requestAnimationFrame(play)
    }
    play()
  }
  useEffect(() => {
    props.play && midiPlay(midiJson)
    return () => {
      window.cancelAnimationFrame(animationFrameRef.current)
    }
  }, [props.play])
  useEffect(() => {
    keysList.filter(v => !v.load).length === 0 && props.setPianoIsReady(true)
  }, [keysList])
  useEffect(() => {
    keys.forEach(item => {
      const audio = document.createElement('audio')
      document.body.appendChild(audio)
      audio.oncanplaythrough = () => {
        audio.remove()
        setKeysList(v => v.map(t => t.id === item.id ? { ...t, load: true } : t))
      }
      audio.src = item.url
    })
  }, [])
  return (
    <div className="piano-box">
      <section className="piano" id="piano">
        {
          keysList.map((item, idx) => (
            <button id={item.name} style={item.load ? undefined : { display: 'none' }} onMouseDown={() => handleMouseDown(item, idx % 12 + 1)} onMouseUp={() => handleMouseUp(item, idx % 12 + 1)} key={item.id} type="button" tabIndex={-1} className={`key-${idx % 12 + 1}`} title={item.name}></button>
          ))
        }
      </section>
    </div>
  );
}
