// views/MainPanel.js
import kind from '@enact/core/kind';
import Button from '@enact/moonstone/Button';

const MainPanel = kind({
    name: 'MainPanel',
    render: () => (
        <Button>Click Me!</Button>
    )
});

export default MainPanel;