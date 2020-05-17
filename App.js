import React, { useState } from 'react';
import { AppLoading } from 'expo';

import { RootDrawer } from './navigation';
import { loadFonsts } from './styles/fonts';
import { Provider } from 'react-redux';
import store from './redux';

// loadFonsts;
export default function App() {
	const [ ready, setReady ] = useState(false);
	if (!ready) {
		return (
			<AppLoading
				startAsync={loadFonsts}
				onFinish={() => setReady(true)}
				onError={() => console.log('Ooop something went wrong try again')}
			/>
		);
	}
	return (
		<Provider store={store}>
			<RootDrawer />
		</Provider>
	);
}
