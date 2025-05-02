# LG WebOS TV app with Enact and Moonstone
Learning and experimenting on creating an LG WebOS TV app with Enact framework and Moonstone theming.
Since the TV is older model of LG's OLED line of devices (OLED65C8), I'm trying to create the app using specific versions of Enact and Moonstone (which in turn have requirements and dependencies on node & react versions), so managing the versions and sticking to components and functionality of those older versions is going to be a thing.
Version dependencies identified:
- **Node.js**: v16.20.2 (managed with Volta, potentially v18 supported)
- **Enact**: v1.13.4 (core, moonstone, ui, spotlight, i18n)
- **React**: v15.5 (best guess for era-correct version and ChatGPT research)
- **other**: Babel, eslint, etc. dependent and compatible versions above
