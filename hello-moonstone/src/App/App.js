import kind from '@enact/core/kind';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: function (props) {
		return (
			<div className={props.className}>
				Hello Moonstone!
			</div>
		);
	}
});

export default MoonstoneDecorator(App);
