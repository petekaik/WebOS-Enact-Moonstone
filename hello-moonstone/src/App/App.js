import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/moonstone/Panels';
import { Button } from '@enact/moonstone/Button';
import { Spinner } from '@enact/moonstone/Spinner';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React from 'react';

import css from './App.module.less';
import buttonstyles from './Button.module.less';
import spinnerstyles from './Spinner.module.less';


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
                    <Button className={buttonstyles['button']}>Click Me!</Button>
					<Spinner className={spinnerstyles['spinner']} size="large" />
                </div>
            </Panel>
		);
	}
});

const App = MoonstoneDecorator(AppBase);
export default App;
export {App, AppBase};
