import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
    // Read the request body
    const body = await request.json();

    // Log the request body (for debugging)
    console.log('Received request:', body);

    // Read the sample response from the JSON file
    const filePath = path.join(process.cwd(), 'static', 'sample_response.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Return the response
    return json(data);
}