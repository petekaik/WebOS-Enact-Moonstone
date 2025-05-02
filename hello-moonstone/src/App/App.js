import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import { Panel, Header } from '@enact/moonstone/Panels';
import { Button } from '@enact/moonstone/Button';
//import MainPanel from '../views/MainPanel';

import css from './App.module.less';

const AppBase = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: function (props) {
		return (
			<Panel className={css['main-panel']} header={<Header title="Hello Moonstone!" />}>
                <div className={props.className}>
                    <Button>Click Me!</Button>
                </div>
            </Panel>
		);
	}
});

const App = MoonstoneDecorator(AppBase);
export default App;
export {App, AppBase};
