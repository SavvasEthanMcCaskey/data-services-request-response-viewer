<script>
	import RequestForm from '$lib/RequestForm.svelte';
	import ResponseDisplays from '$lib/ResponseDisplays.svelte';
	import { mockData } from '$lib/mockData';  


	let response = null;
	let loading = false;

	async function handleSubmit(event) {
	const request = event.detail;
	loading = true;
	try {
		// Simulate network delay
		await new Promise(resolve => setTimeout(resolve, 500));

		// Check if we're in development or SSR mode
		if (import.meta.env.DEV || import.meta.env.SSR) {
		// Use mock data
		response = mockData || { error: 'No mock data available for this endpoint' };
		console.log(mockData)
		} else {
		// In production, make the actual API call
		const result = await fetch('/api/report', {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json',
			},
			body: JSON.stringify(request)
		});
		response = await result.json();
		}
	} catch (error) {
		console.error('Error fetching data:', error);
		response = { error: 'An error occurred while fetching data' };
	} finally {
		loading = false;
	}
	}

  </script>
  
  <main class="container mx-auto p-4">
	<h1 class="text-3xl font-bold mb-8 text-center text-gray-700">Report Generator</h1>
	<div class="flex flex-col md:flex-row gap-8">
	  <div class="w-full md:w-1/2">
		<RequestForm on:submit={handleSubmit} />
	  </div>
	  <div class="w-full md:w-1/2">
		<ResponseDisplays {response} {loading} />
	  </div>
	</div>
  </main>