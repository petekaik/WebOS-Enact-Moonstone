# LG WebOS TV app with Enact and Moonstone
Learning and experimenting on creating an LG WebOS TV app with Enact framework and Moonstone theming.
Since the TV is older model of LG's OLED line of devices (OLED65C8), I'm either:
a) Trying to create the app using specific versions of Enact and Moonstone (which in turn have requirements and dependencies on node & react versions).
b) Using the latest of everything and trying to Babel my way out of it so that the final app is functional in target environment.

Target platform:
- **TV model**: LG OLED65C8
- **WebOS**: 4.4.3-20 (goldilocks-gorongosa)
- **web engine**: Chromium 53

## Plan A:
Managing the versions and sticking to components and functionality of those older versions is going to be a thing.
Version dependencies identified:
- **Node.js**: v16.20.2 (managed with Volta, potentially v18 supported)
- **Enact**: v1.13.4 (core, moonstone, ui, spotlight, i18n)
- **React**: v15.5 (best guess for era-correct version and ChatGPT research)
- **other**: Babel, eslint, etc. dependent and compatible versions above

## Plan B:
After a lot of trial and error with Enact component support from v1.13.4 a basic "Hello Moonstone!" has been achieved. Continuing experiments with more modern versions of Enact & Moonstone (and React) and trying to Babel it backwards compatible with Chromium 53 web engine.