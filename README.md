# Elegaudio

[![react build & deploy](https://github.com/moka-ayumu/elegaudio/actions/workflows/deploy.yml/badge.svg)](https://github.com/moka-ayumu/elegaudio/actions/workflows/deploy.yml)
[![pages-build-deployment](https://github.com/moka-ayumu/elegaudio/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/moka-ayumu/elegaudio/actions/workflows/pages/pages-build-deployment)
[![npm build & publish](https://github.com/moka-ayumu/elegaudio/actions/workflows/publish.yml/badge.svg)](https://github.com/moka-ayumu/elegaudio/actions/workflows/publish.yml)

A react component that shows an audio waveform
Please refer to the [**website**](https://moka-ayumu.github.io/elegaudio/) for detailed explanation.

## How to import the component

```
import { Elegaudio } from "elegaudio";
```

## Example

```
<Elegaudio src="./sample.mp3" width={1000} height={80} barWidth={4} barGap={5} origin="bottom" side="center" color="#FFF587" hoverColor="#FF8C64" playColor="#FF665A"/>
```
