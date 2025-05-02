import React from 'react';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import Button from '@enact/moonstone/Button';
import BodyText from '@enact/moonstone/BodyText';
import Scroller from '@enact/moonstone/Scroller';
import Divider from '@enact/moonstone/Divider';
import IconButton from '@enact/moonstone/IconButton';
import {Row, Column} from '@enact/ui/Layout';
import SpotlightContainerDecorator from '@enact/spotlight/SpotlightContainerDecorator';
import Changeable from '@enact/ui/Changeable';
import compose from 'ramda/src/compose';

// Decorate the container for proper spotlight behavior
const SpotlightContainer = SpotlightContainerDecorator({enterTo: 'default-element'}, 'div');

// Create a component for the content section
const ContentSection = kind({
	name: 'ContentSection',
	
	render: ({title, children, ...rest}) => (
		<div {...rest}>
			<Divider>{title}</Divider>
			{children}
		</div>
	)
});

const MainPanelBase = kind({
	name: 'MainPanel',

	handlers: {
		onButtonClick: (ev, {onButtonSelected}) => {
			if (onButtonSelected) {
				onButtonSelected({buttonName: ev.currentTarget.textContent});
			}
		}
	},

	render: ({onButtonClick, ...props}) => (
		<Panel {...props}>
			<Header title="Hello Moonstone!" titleBelow="Welcome to WebOS TV App Development" />
			
			<Scroller>
				<ContentSection title="About Moonstone">
					<BodyText>
						Moonstone is the official UI library for LG WebOS TV applications.
						This template demonstrates some of the key components available for building TV apps.
					</BodyText>
				</ContentSection>
				
				<SpotlightContainer style={{padding: '12px'}}>
					<ContentSection title="Basic Components">
						<Row style={{margin: '12px 0'}}>
							<Column>
								<Button icon="home" onTap={onButtonClick}>Home</Button>
							</Column>
							<Column>
								<Button icon="play" onTap={onButtonClick}>Play</Button>
							</Column>
							<Column>
								<Button icon="stop" onTap={onButtonClick}>Stop</Button>
							</Column>
						</Row>
					</ContentSection>
					
					<ContentSection title="Icon Examples">
						<Row style={{margin: '12px 0'}}>
							<Column>
								<IconButton backgroundOpacity="translucent">home</IconButton>
							</Column>
							<Column>
								<IconButton backgroundOpacity="translucent">search</IconButton>
							</Column>
							<Column>
								<IconButton backgroundOpacity="translucent">settings</IconButton>
							</Column>
							<Column>
								<IconButton backgroundOpacity="translucent">plus</IconButton>
							</Column>
						</Row>
					</ContentSection>
				</SpotlightContainer>
				
				<ContentSection title="Get Started">
					<BodyText>
						Navigate using the remote control arrows and press OK/Enter to select items.
						This demo showcases Spotlight navigation which is optimized for TV interfaces.
					</BodyText>
				</ContentSection>
			</Scroller>
		</Panel>
	)
});

// Compose the component with HOCs
const MainPanel = compose(
	Changeable({
		prop: 'selected',
		change: 'onButtonSelected'
	})
)(MainPanelBase);

export default MainPanel;
