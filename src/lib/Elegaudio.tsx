import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles/Elegaudio.css";

function Elegauido({
  src,
  width,
  height,
  barGap = 1,
  barWidth = 3,
  color = "#FFF587",
  playColor = "#FF665A",
  hoverColor = "#FF8C64",
  origin = "bottom",
  side = "side",
  audioRef,
}: {
  src: string | ArrayBuffer;
  width: number;
  height: number;
  barGap?: number;
  barWidth?: number;
  color?: string | CanvasGradient | CanvasPattern;
  playColor?: string | CanvasGradient | CanvasPattern;
  hoverColor?: string | CanvasGradient | CanvasPattern;
  origin?: "bottom" | "top" | "left" | "right";
  side?: "side" | "center";
  audioRef?: React.MutableRefObject<any>;
}) {
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const progressElement = useRef<HTMLCanvasElement>(null);
  const hoverElement = useRef<HTMLCanvasElement>(null);
  const audio = useRef(new Audio());
  const region = useRef(new Path2D());
  const [onLoaded, setOnLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const drawProgress = useCallback(
    (
      canvas: HTMLCanvasElement,
      per: number,
      style: string | CanvasGradient | CanvasPattern
    ) => {
      const ctx = canvas.getContext("2d");
      if (ctx !== null) {
        ctx.fillStyle = style;
        switch (origin) {
          case "top":
          case "bottom":
            ctx.fillRect(0, 0, width * per, height);
            break;
          case "left":
          case "right":
            ctx.fillRect(0, 0, width, height * per);
            break;

          default:
            break;
        }
      }
    },
    [origin, width, height]
  );

  useEffect(() => {
    if (audioRef !== undefined) {
      if (audio.current instanceof Audio) {
        audio.current = audioRef.current;
      } else {
        audioRef.current = audio.current;
      }
    }
  }, [audioRef]);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", () => {
      if (progressElement.current !== null) {
        const per = audio.current.currentTime / audio.current.duration;
        clearCanvas(progressElement.current);
        drawProgress(progressElement.current, per, playColor);
        if (per >= 1) {
          setIsPlaying(false);
        }
      }
    });
  }, [drawProgress, playColor]);

  const initArrayBuffer = useCallback(
    (_buffer: ArrayBuffer) => {
      try {
        const buffer = _buffer.slice(0);
        const [canvas, canvasCtx] = canvasRef(canvasElement);
        const [progressCanvas, progressCanvasCtx] = canvasRef(progressElement);
        const [hoverCanvas, hoverCanvasCtx] = canvasRef(hoverElement);
        const canBarCount =
          origin === "bottom" || origin === "top"
            ? width / (barWidth + barGap)
            : height / (barWidth + barGap);
        clearCanvasComp(canvas, progressCanvas, hoverCanvas);
        const blob = new Blob([buffer], { type: "audio/wav" });
        const url = URL.createObjectURL(blob);
        audio.current.src = url;
        const ctx = new AudioContext();
        ctx.decodeAudioData(buffer).then((audioBuffer) => {
          const channelData = audioBuffer.getChannelData(0);
          let res: number[] = [];
          const perRate = Math.ceil(audioBuffer.length / canBarCount);
          for (let i = 0; i < audioBuffer.length; i += perRate) {
            const nowData = channelData.slice(i, i + perRate - 1);
            res.push(
              nowData.reduce((a, b) => Math.abs(a) + Math.abs(b)) /
                nowData.length
            );
          }
          const max = Math.max(...res);
          region.current = new Path2D();
          for (let i = 0, n = res.length; i < n; i++) {
            const e = res[i];
            const wei = e / max;
            switch (origin) {
              case "bottom":
                region.current.rect(
                  (barWidth + barGap) * i,
                  side === "side"
                    ? height * (1 - wei)
                    : (height * (1 - wei)) / 2,
                  barWidth,
                  height * wei
                );
                break;

              case "top":
                region.current.rect(
                  (barWidth + barGap) * i,
                  side === "side" ? 0 : (height * (1 - wei)) / 2,
                  barWidth,
                  height * wei
                );
                break;

              case "left":
                region.current.rect(
                  side === "side" ? 0 : (width * (1 - wei)) / 2,
                  (barWidth + barGap) * i,
                  width * wei,
                  barWidth
                );
                break;

              case "right":
                region.current.rect(
                  side === "side" ? width * (1 - wei) : (width * (1 - wei)) / 2,
                  (barWidth + barGap) * i,
                  width * wei,
                  barWidth
                );
                break;

              default:
                break;
            }
          }
          hoverCanvasCtx.clip(region.current, "evenodd");
          progressCanvasCtx.clip(region.current, "evenodd");
          canvasCtx.clip(region.current, "evenodd");
          // resetCtxs(canvas, progressCanvas, hoverCanvas);
          drawProgress(canvas, 1, color);
          setOnLoaded(true);
        });
      } catch (error) {}
    },
    [barGap, barWidth, origin, drawProgress, side, color, width, height]
  );

  const init = useCallback(
    (url: string) => {
      if (url.startsWith("./")) {
        url = new URL(url, document.baseURI).href;
      }
      fetch(url)
        .then((r) => r.arrayBuffer())
        .then((buffer) => {
          initArrayBuffer(buffer);
        });
    },
    [initArrayBuffer]
  );

  useEffect(() => {
    setOnLoaded(false);
    setIsPlaying(false);
    audio.current.currentTime = 0;
    switch (typeof src) {
      case "string":
        init(src);
        break;

      case "object":
        if (src instanceof ArrayBuffer) {
          initArrayBuffer(src);
        }
        break;

      default:
        break;
    }
  }, [init, initArrayBuffer, src]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    let pos =
      origin === "bottom" || origin === "top"
        ? e.clientX - rect.x
        : e.clientY - rect.y;
    pos = pos < 0 ? 0 : pos;
    if (hoverElement.current !== null) {
      const canvas = hoverElement.current;
      const per =
        origin === "bottom" || origin === "top" ? pos / width : pos / height;
      clearCanvas(canvas);
      drawProgress(canvas, per, hoverColor);
    }
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (hoverElement.current !== null) {
      clearCanvas(hoverElement.current);
    }
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    let pos =
      origin === "bottom" || origin === "top"
        ? e.clientX - rect.x
        : e.clientY - rect.y;
    pos = pos < 0 ? 0 : pos;
    if (progressElement.current !== null && hoverElement.current !== null) {
      const canvas = hoverElement.current;
      const per =
        origin === "bottom" || origin === "top" ? pos / width : pos / height;
      audio.current.currentTime = audio.current.duration * per;
      clearCanvas(progressElement.current);
      // clearCanvasComp(progressElement.current);
      // resetCtxs(canvas);
    }
  };

  const canvasRef = (
    ref: React.RefObject<HTMLCanvasElement>
  ): [HTMLCanvasElement, CanvasRenderingContext2D] => {
    const canvas = ref.current;
    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx !== null) {
        return [canvas, ctx];
      } else throw new Error("2dctxnull");
    } else throw new Error("canvasnull");
  };

  const clearCanvas = (...canvas: HTMLCanvasElement[]) => {
    for (let i = 0, n = canvas.length; i < n; i++) {
      const e = canvas[i];
      const ctx = e.getContext("2d");
      for (let i = 0; i < 10; i++) {
        ctx?.clearRect(0, 0, e.width, e.height);
      }
    }
  };

  const clearCanvasComp = (...canvas: HTMLCanvasElement[]) => {
    for (let i = 0, n = canvas.length; i < n; i++) {
      const e = canvas[i];
      const width = e.width;
      e.width = width;
    }
  };

  // const resetCtxs = (...canvas: HTMLCanvasElement[]) => {
  //   for (let i = 0; i < canvas.length; i++) {
  //     const e = canvas[i];
  //     const ctx = e.getContext("2d");
  //     console.log(ctx, region.current);
  //     ctx?.clip(region.current, "evenodd");
  //   }
  // };

  return (
    <div className="elegaudio_main">
      {onLoaded ? <></> : <div className="elegaudio_loading"></div>}
      <div className={onLoaded ? "" : "eleagudio_disabled"}>
        <div
          style={{ width, height, margin: "auto" }}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <canvas
            width={width}
            height={height}
            className="elegaudio_overlayCanvas elegaudio_hoverCanvas"
            ref={hoverElement}
          />
          <canvas
            width={width}
            height={height}
            className="elegaudio_overlayCanvas"
            ref={progressElement}
          />
          <canvas
            width={width}
            height={height}
            className="elegaudio_backgroundCanvas"
            ref={canvasElement}
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default Elegauido;
