import React, { memo, useEffect, useRef, useState } from "react";
import "./style.css";
const noteBaseUrl = "/blog/piano/";
import midiJson from "../../../static/mariage_d'amour.json";

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const keys = [
  {
    id: 1,
    name: "C2",
    keyCode: "49",
    key: "1",
    url: noteBaseUrl + "a49.mp3",
    type: "white",
  },
  {
    id: 2,
    name: "C#2",
    keyCode: "b49",
    key: "!",
    url: noteBaseUrl + "b49.mp3",
    type: "black",
  },
  {
    id: 3,
    name: "D2",
    keyCode: "50",
    key: "2",
    url: noteBaseUrl + "a50.mp3",
    type: "white",
  },
  {
    id: 4,
    name: "D#2",
    keyCode: "b50",
    key: "@",
    url: noteBaseUrl + "b50.mp3",
    type: "black",
  },
  {
    id: 5,
    name: "E2",
    keyCode: "51",
    key: "3",
    url: noteBaseUrl + "a51.mp3",
    type: "white",
  },
  {
    id: 6,
    name: "F2",
    keyCode: "52",
    key: "4",
    url: noteBaseUrl + "a52.mp3",
    type: "white",
  },
  {
    id: 7,
    name: "F#2",
    keyCode: "b52",
    key: "$",
    url: noteBaseUrl + "b52.mp3",
    type: "black",
  },
  {
    id: 8,
    name: "G2",
    keyCode: "53",
    key: "5",
    url: noteBaseUrl + "a53.mp3",
    type: "white",
  },
  {
    id: 9,
    name: "G#2",
    keyCode: "b53",
    key: "%",
    url: noteBaseUrl + "b53.mp3",
    type: "black",
  },
  {
    id: 10,
    name: "A2",
    keyCode: "54",
    key: "6",
    url: noteBaseUrl + "a54.mp3",
    type: "white",
  },
  {
    id: 11,
    name: "A#2",
    keyCode: "b54",
    key: "^",
    url: noteBaseUrl + "b54.mp3",
    type: "black",
  },
  {
    id: 12,
    name: "B2",
    keyCode: "55",
    key: "7",
    url: noteBaseUrl + "a55.mp3",
    type: "white",
  },
  {
    id: 13,
    name: "C3",
    keyCode: "56",
    key: "8",
    url: noteBaseUrl + "a56.mp3",
    type: "white",
  },
  {
    id: 14,
    name: "C#3",
    keyCode: "b56",
    key: "*",
    url: noteBaseUrl + "b56.mp3",
    type: "black",
  },
  {
    id: 15,
    name: "D3",
    keyCode: "57",
    key: "9",
    url: noteBaseUrl + "a57.mp3",
    type: "white",
  },
  {
    id: 16,
    name: "D#3",
    keyCode: "b57",
    key: "(",
    url: noteBaseUrl + "b57.mp3",
    type: "black",
  },
  {
    id: 17,
    name: "E3",
    keyCode: "48",
    key: "0",
    url: noteBaseUrl + "a48.mp3",
    type: "white",
  },
  {
    id: 18,
    name: "F3",
    keyCode: "81",
    key: "q",
    url: noteBaseUrl + "a81.mp3",
    type: "white",
  },
  {
    id: 19,
    name: "F#3",
    keyCode: "b81",
    key: "Q",
    url: noteBaseUrl + "b81.mp3",
    type: "black",
  },
  {
    id: 20,
    name: "G3",
    keyCode: "87",
    key: "w",
    url: noteBaseUrl + "a87.mp3",
    type: "white",
  },
  {
    id: 21,
    name: "G#3",
    keyCode: "b87",
    key: "W",
    url: noteBaseUrl + "b87.mp3",
    type: "black",
  },
  {
    id: 22,
    name: "A3",
    keyCode: "69",
    key: "e",
    url: noteBaseUrl + "a69.mp3",
    type: "white",
  },
  {
    id: 23,
    name: "A#3",
    keyCode: "b69",
    key: "E",
    url: noteBaseUrl + "b69.mp3",
    type: "black",
  },
  {
    id: 24,
    name: "B3",
    keyCode: "82",
    key: "r",
    url: noteBaseUrl + "a82.mp3",
    type: "white",
  },
  {
    id: 25,
    name: "C4",
    keyCode: "84",
    key: "t",
    url: noteBaseUrl + "a84.mp3",
    type: "white",
  },
  {
    id: 26,
    name: "C#4",
    keyCode: "b84",
    key: "T",
    url: noteBaseUrl + "b84.mp3",
    type: "black",
  },
  {
    id: 27,
    name: "D4",
    keyCode: "89",
    key: "y",
    url: noteBaseUrl + "a89.mp3",
    type: "white",
  },
  {
    id: 28,
    name: "D#4",
    keyCode: "b89",
    key: "Y",
    url: noteBaseUrl + "b89.mp3",
    type: "black",
  },
  {
    id: 29,
    name: "E4",
    keyCode: "85",
    key: "u",
    url: noteBaseUrl + "a85.mp3",
    type: "white",
  },
  {
    id: 30,
    name: "F4",
    keyCode: "73",
    key: "i",
    url: noteBaseUrl + "a73.mp3",
    type: "white",
  },
  {
    id: 31,
    name: "F#4",
    keyCode: "b73",
    key: "I",
    url: noteBaseUrl + "b73.mp3",
    type: "black",
  },
  {
    id: 32,
    name: "G4",
    keyCode: "79",
    key: "o",
    url: noteBaseUrl + "a79.mp3",
    type: "white",
  },
  {
    id: 33,
    name: "G#4",
    keyCode: "b79",
    key: "O",
    url: noteBaseUrl + "b79.mp3",
    type: "black",
  },
  {
    id: 34,
    name: "A4",
    keyCode: "80",
    key: "p",
    url: noteBaseUrl + "a80.mp3",
    type: "white",
  },
  {
    id: 35,
    name: "A#4",
    keyCode: "b80",
    key: "P",
    url: noteBaseUrl + "b80.mp3",
    type: "black",
  },
  {
    id: 36,
    name: "B4",
    keyCode: "65",
    key: "a",
    url: noteBaseUrl + "a65.mp3",
    type: "white",
  },
  {
    id: 37,
    name: "C5",
    keyCode: "83",
    key: "s",
    url: noteBaseUrl + "a83.mp3",
    type: "white",
  },
  {
    id: 38,
    name: "C#5",
    keyCode: "b83",
    key: "S",
    url: noteBaseUrl + "b83.mp3",
    type: "black",
  },
  {
    id: 39,
    name: "D5",
    keyCode: "68",
    key: "d",
    url: noteBaseUrl + "a68.mp3",
    type: "white",
  },
  {
    id: 40,
    name: "D#5",
    keyCode: "b68",
    key: "D",
    url: noteBaseUrl + "b68.mp3",
    type: "black",
  },
  {
    id: 41,
    name: "E5",
    keyCode: "70",
    key: "f",
    url: noteBaseUrl + "a70.mp3",
    type: "white",
  },
  {
    id: 42,
    name: "F5",
    keyCode: "71",
    key: "g",
    url: noteBaseUrl + "a71.mp3",
    type: "white",
  },
  {
    id: 43,
    name: "F#5",
    keyCode: "b71",
    key: "G",
    url: noteBaseUrl + "b71.mp3",
    type: "black",
  },
  {
    id: 44,
    name: "G5",
    keyCode: "72",
    key: "h",
    url: noteBaseUrl + "a72.mp3",
    type: "white",
  },
  {
    id: 45,
    name: "G#5",
    keyCode: "b72",
    key: "H",
    url: noteBaseUrl + "b72.mp3",
    type: "black",
  },
  {
    id: 46,
    name: "A5",
    keyCode: "74",
    key: "j",
    url: noteBaseUrl + "a74.mp3",
    type: "white",
  },
  {
    id: 47,
    name: "A#5",
    keyCode: "b74",
    key: "J",
    url: noteBaseUrl + "b74.mp3",
    type: "black",
  },
  {
    id: 48,
    name: "B5",
    keyCode: "75",
    key: "k",
    url: noteBaseUrl + "a75.mp3",
    type: "white",
  },
  {
    id: 49,
    name: "C6",
    keyCode: "76",
    key: "l",
    url: noteBaseUrl + "a76.mp3",
    type: "white",
  },
  {
    id: 50,
    name: "C#6",
    keyCode: "b76",
    key: "L",
    url: noteBaseUrl + "b76.mp3",
    type: "black",
  },
  {
    id: 51,
    name: "D6",
    keyCode: "90",
    key: "z",
    url: noteBaseUrl + "a90.mp3",
    type: "white",
  },
  {
    id: 52,
    name: "D#6",
    keyCode: "b90",
    key: "Z",
    url: noteBaseUrl + "b90.mp3",
    type: "black",
  },
  {
    id: 53,
    name: "E6",
    keyCode: "88",
    key: "x",
    url: noteBaseUrl + "a88.mp3",
    type: "white",
  },
  {
    id: 54,
    name: "F6",
    keyCode: "67",
    key: "c",
    url: noteBaseUrl + "a67.mp3",
    type: "white",
  },
  {
    id: 55,
    name: "F#6",
    keyCode: "b67",
    key: "C",
    url: noteBaseUrl + "b67.mp3",
    type: "black",
  },
  {
    id: 56,
    name: "G6",
    keyCode: "86",
    key: "v",
    url: noteBaseUrl + "a86.mp3",
    type: "white",
  },
  {
    id: 57,
    name: "G#6",
    keyCode: "b86",
    key: "V",
    url: noteBaseUrl + "b86.mp3",
    type: "black",
  },
  {
    id: 58,
    name: "A6",
    keyCode: "66",
    key: "b",
    url: noteBaseUrl + "a66.mp3",
    type: "white",
  },
  {
    id: 59,
    name: "A#6",
    keyCode: "b66",
    key: "B",
    url: noteBaseUrl + "b66.mp3",
    type: "black",
  },
  {
    id: 60,
    name: "B6",
    keyCode: "78",
    key: "n",
    url: noteBaseUrl + "a78.mp3",
    type: "white",
  },
  // {id: 61, name: 'C7', keyCode: '77', key: 'm', url: noteBaseUrl + 'a77.mp3', type: 'white'},
];

type KeyItem = (typeof keys)[0];

interface KeysListItem extends KeyItem {
  load?: boolean;
}

const handleDocMouseUp = () => {
  keys.forEach((item, idx) => {
    document.getElementById(item.name).classList.remove(`key-${(idx % 12) + 1}-active`);
  })
}

const handleKeyDown = (event: KeyboardEvent) => {
  const t = keys.find(v => v.key === event.key)
  if (!t) {
    return
  }
  const mouseDownEvent = new MouseEvent(isMobileDevice() ? "touchstart" : "mousedown", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
  });
  document.getElementById(t.name).dispatchEvent(mouseDownEvent);
}

const handleKeyUp = (event: KeyboardEvent) => {
  const t = keys.find(v => v.key === event.key)
  if (!t) {
    return
  }
  const mouseUpEvent = new MouseEvent(isMobileDevice() ? "touchend" : "mouseup", {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
  });
  document.getElementById(t.name).dispatchEvent(mouseUpEvent);
}

export default memo(function Piano(props: {
  setPianoIsReady: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const audioContext = useRef<AudioContext>(null);
  const audioPool = useRef({});
  function playNote(noteName: string) {
    if (audioPool.current[noteName]) {
      const source = audioContext.current.createBufferSource();
      source.buffer = audioPool.current[noteName];
      source.connect(audioContext.current.destination);
      source.start();
    }
  }
  const handleMouseDown = (item: KeyItem, key: number) => {
    document.getElementById(item.name).classList.add(`key-${key}-active`);
    playNote(item.name);
  };
  const timeOutRef = useRef<NodeJS.Timeout>();
  const [isMobile, setIsMobile] = useState(false)
  const [keysList, setKeysList] = useState<KeysListItem[]>(
    keys.map((v) => ({ ...v, load: false }))
  );
  const midiPlay = (midiJson: {
    bpm: number;
    notes: {
      duration: number;
      durationTicks: number;
      midi: number;
      name: string;
      ticks: number;
      time: number;
      velocity: number;
    }[];
  }) => {
    const noteQueue = midiJson.notes;
    const startTime = Date.now();
    const isMobile = isMobileDevice();
    const play = () => {
      const fragment = noteQueue.slice(0, 20);
      fragment.forEach((note) => {
        if (Date.now() - startTime >= note.time * 1000) {
          const mouseDownEvent = new MouseEvent(isMobile ? "touchstart" : "mousedown", {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
          });
          const mouseUpEvent = new MouseEvent(isMobile ? "touchend" : "mouseup", {
            bubbles: true,
            cancelable: true,
            view: window,
            button: 0,
          });
          document.getElementById(note.name).dispatchEvent(mouseDownEvent);
          setTimeout(() => {
            document.getElementById(note.name).dispatchEvent(mouseUpEvent);
          }, 80);
          noteQueue.shift();
        }
      });
      timeOutRef.current = setTimeout(play, 28);
    };
    play();
  };
  useEffect(() => {
    setIsMobile(isMobileDevice())
    window.playPiano = () => {
      clearTimeout(timeOutRef.current);
      midiPlay(midiJson);
    }
    return () => {
      clearTimeout(timeOutRef.current);
    };
  }, []);
  useEffect(() => {
    // @ts-ignore
    audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
    function loadAudioSample(noteName, url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => response.arrayBuffer())
          .then((data) => audioContext.current.decodeAudioData(data))
          .then((buffer) => {
            audioPool.current[noteName] = buffer;
            setKeysList((v) =>
              v.map((t) => (t.name === noteName ? { ...t, load: true } : t))
            );
            resolve(true); // 音频样本加载成功
          })
          .catch((error) => {
            console.error("Failed to load audio sample:", error);
            reject(error); // 音频样本加载失败
          });
      });
    }
    Promise.all(keys.map((v) => loadAudioSample(v.name, v.url)))
      .then(() => {
        // 所有音频样本都已加载完成
        console.log("All audio samples loaded.");
        props.setPianoIsReady(true);
      })
      .catch((error) => {
        // 至少一个音频样本加载失败
        console.error("Failed to load audio samples:", error);
      });
    const isMobile = isMobileDevice();
    isMobile || document.addEventListener('mouseup', handleDocMouseUp);
    isMobile && document.addEventListener('touchend', handleDocMouseUp);
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      isMobile || document.removeEventListener('mouseup', handleDocMouseUp);
      isMobile && document.removeEventListener('touchend', handleDocMouseUp);
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, []);
  return (
    <div className="piano-box">
      <section className="piano" id="piano">
        {keysList.map((item, idx) => (
          <button
            id={item.name}
            style={item.load ? undefined : { display: "none" }}
            onMouseDown={isMobile ? undefined : () => handleMouseDown(item, (idx % 12) + 1)}
            onTouchStart={isMobile ? () => handleMouseDown(item, (idx % 12) + 1) : undefined}
            key={item.id}
            type="button"
            tabIndex={-1}
            className={`key-${(idx % 12) + 1}`}
            title={item.name}
          ></button>
        ))}
      </section>
    </div>
  );
});
