import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('should render "Skyf0l" in the homepage', async () => {
		render(Page);

		const content = page.getByText('Skyf0l');
		await expect.element(content).toBeInTheDocument();
	});
});
