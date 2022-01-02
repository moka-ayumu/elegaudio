import React, { useEffect, useRef, useState } from "react";
import { Prism } from "react-syntax-highlighter";
import "./App.css";
import Elegaudio from "./lib/Elegaudio";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import Range from "./components/Range";
import Radio from "./components/Radio";
import Color from "./components/Color";

function App() {
  const [inputFile, setInputFile] = useState<ArrayBuffer>();
  const [played, setPlayed] = useState(false);
  const ref = useRef(new Audio());
  const width = useState(1000);
  const height = useState(80);
  const barWidth = useState(4);
  const barGap = useState(5);
  const origin = useState<"bottom" | "top" | "left" | "right">("bottom");
  const side = useState<"side" | "center">("center");
  const color = useState("#FFF587");
  const playColor = useState("#FF665A");
  const hoverColor = useState("#FF8C64");

  useEffect(
    () => setPlayed(false),
    [inputFile, width[0], height[0], barWidth[0], barGap[0], origin[0]]
  );

  useEffect(() => {
    ref.current.addEventListener("play", () => {
      setPlayed(true);
    });
    ref.current.addEventListener("pause", () => {
      setPlayed(false);
    });
  }, []);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const item = e.target.files.item(0);
      if (item !== null && item.type.startsWith("audio/")) {
        item.arrayBuffer().then((buffer) => setInputFile(buffer));
      }
    }
  };

  return (
    <div className="App">
      <img src="/logo.png" className="logo" />
      <h1 className="center">
        Elegaudio{" "}
        <a
          href="https://github.com/moka-ayumu/elegaudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </h1>

      <h2>Audio file for examples</h2>
      <input type="file" accept="audio/*" onChange={onFileChange} />

      <h2>Playground</h2>
      <div className="center flex">
        <Range i={["width", "1000", "1000"]} set={width} />
        <Range i={["height", "80", "1000"]} set={height} />
        <Range i={["barWidth", "3", "20"]} set={barWidth} />
        <Range i={["barGap", "1", "20"]} set={barGap} />
        <Color i="color" set={color} />
        <Color i="playColor" set={playColor} />
        <Color i="hoverColor" set={hoverColor} />
        <Radio i={["bottom", "top", "left", "right"]} set={origin} />
        <Radio i={["side", "center"]} set={side} />
      </div>
      <Prism language="jsx" style={tomorrow} showLineNumbers={true}>
        {`<Elegaudio src="./sample.mp3" width={${width[0]}} height={${height[0]}} barWidth={${barWidth[0]}} barGap={${barGap[0]}} origin="${origin[0]}" side="${side[0]}" color="${color[0]}" hoverColor="${hoverColor[0]}" playColor="${playColor[0]}"/>`}
      </Prism>
      <Elegaudio
        src={inputFile === undefined ? "./sample.mp3" : inputFile}
        width={width[0]}
        height={height[0]}
        barWidth={barWidth[0]}
        barGap={barGap[0]}
        origin={origin[0]}
        side={side[0]}
        color={color[0]}
        hoverColor={hoverColor[0]}
        playColor={playColor[0]}
        audioRef={ref}
      />

      <h2>src</h2>
      <p>src allowed string as url or ArrayBuffer</p>
      <p>
        Don't try ArrayBuffer.slice in direct. Because it creates a new object
        for each re-render, it throws an unexpected error.
      </p>
      <Prism
        language="jsx"
        style={tomorrow}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={(i) => {
          return {
            style: { textDecoration: i === 1 ? "line-through" : "" },
          };
        }}
      >
        {`<Elegaudio src={arrayBuffer.slice(0)} .../>
//This can't`}
      </Prism>

      <h2>width</h2>
      <p>type: number</p>
      <h2>height</h2>
      <p>type: number</p>
      <h2>barWidth</h2>
      <p>type: number</p>
      <h2>barGap</h2>
      <p>type: number</p>
      <h2>origin</h2>
      <p>type: "bottom" | "top" | "left" | "right"</p>
      <h2>audioRef</h2>
      <p>type: React.MutableRefObject{"<any>"}</p>
      <p>
        This uses the ref of Audio type when inputted. However, if there is no
        other type of ref or input, it creates its own Audio and returns the
        corresponding ref.
      </p>
      <h2>side</h2>
      <p>type: "side" | "center"</p>

      <div
        onClick={() => {
          !played ? ref.current.play() : ref.current.pause();
        }}
        className="playbtn"
      >
        <svg width="50" height="50" viewBox="0 0 500 500" fill="#9fc0fc">
          {!played ? (
            <path d="M449.644,224.019a30,30,0,0,1,0,51.962l-316.88,182.95a30,30,0,0,1-45-25.98V67.049a30,30,0,0,1,45-25.981Z" />
          ) : (
            <g>
              <rect x="120" y="45" width="70" height="426" rx="20" ry="20" />
              <rect x="320" y="45" width="70" height="426" rx="20" ry="20" />
            </g>
          )}
        </svg>
      </div>

      <Prism language="jsx" style={tomorrow} showLineNumbers={true}>
        {`<Elegaudio src="./sample.mp3" width={80} height={500} barWidth={3} barGap={1} origin="left"/>`}
      </Prism>
      <div className="vertical">
        <Elegaudio
          src={inputFile === undefined ? "./sample.mp3" : inputFile}
          width={80}
          height={500}
          barWidth={3}
          barGap={1}
          origin="left"
          side="side"
          audioRef={ref}
        />
        <Elegaudio
          src={inputFile === undefined ? "./sample.mp3" : inputFile}
          width={80}
          height={500}
          barWidth={3}
          barGap={1}
          origin="left"
          side="center"
          audioRef={ref}
        />
      </div>
      <Prism language="jsx" style={tomorrow} showLineNumbers={true}>
        {`<Elegaudio src="./sample.mp3" width={1000} height={80} barWidth={3} barGap={1} origin="bottom" side="side"/>`}
      </Prism>
      <Elegaudio
        src={inputFile === undefined ? "./sample.mp3" : inputFile}
        width={1000}
        height={80}
        barWidth={3}
        barGap={1}
        origin="bottom"
        side="side"
        audioRef={ref}
      />
      <Prism language="jsx" style={tomorrow} showLineNumbers={true}>
        {`<Elegaudio src="./sample.mp3" width={1000} height={80} barWidth={3} barGap={1} origin="bottom" side="center"/>`}
      </Prism>
      <Elegaudio
        src={inputFile === undefined ? "./sample.mp3" : inputFile}
        width={1000}
        height={80}
        barWidth={3}
        barGap={1}
        origin="bottom"
        side="center"
        audioRef={ref}
      />
      <h1>color, playColor, hoverColor</h1>
      <p>type: string | CanvasGradient | CanvasPattern</p>
      <Prism language="jsx" style={tomorrow} showLineNumbers={true}>
        {`<Elegaudio src="./sample.mp3" width={1000} height={80} barWidth={3} barGap={1} color="#B4BFBA" playColor="#545957" hoverColor="#98A6A0"/>`}
      </Prism>
      <Elegaudio
        src={inputFile === undefined ? "./sample.mp3" : inputFile}
        width={1000}
        height={80}
        barWidth={3}
        barGap={1}
        color="#B4BFBA"
        playColor="#545957"
        hoverColor="#98A6A0"
        audioRef={ref}
      />
    </div>
  );
}

export default App;
