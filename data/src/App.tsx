import { useState } from 'react';
import { useWebsocket } from './useWebsocket';
import { Button, Flex, Text, TextField } from '@radix-ui/themes';

function App() {
	const { open, error, send, data } = useWebsocket({ url: 'ws://localhost:3000/api/game/' });
	const [value, setValue] = useState<string>('');
	const array: string[] = JSON.parse(data === '' ? '[]' : data);

	return (
		<>
			<div className="w-100 mx-auto py-12">
				<Flex direction="column" gap="4">
					{open ? <Text align="center">Connected</Text> : ''}
					{error ? <Text align="center">Error: Could not connect</Text> : ''}
					{array.map((e, i) => (
						<Text key={i}>{e}</Text>
					))}
					<TextField.Root
						value={value}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
						placeholder="type a message"
					/>
					<Button
						disabled={!open}
						onClick={() => {
							send(value);
							setValue('');
						}}
					>
						Send
					</Button>
				</Flex>
			</div>
		</>
	);
}

export default App;
