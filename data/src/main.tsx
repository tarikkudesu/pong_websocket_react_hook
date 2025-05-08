import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';
import './index.css';

import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Toaster position="bottom-center" />
		<Theme appearance="dark" accentColor="iris" grayColor="sand" radius="medium" scaling="100%">
			<App />
		</Theme>
	</StrictMode>
);
