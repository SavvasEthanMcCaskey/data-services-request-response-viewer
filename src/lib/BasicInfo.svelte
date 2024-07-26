<script>
    export let request;
  </script>
  
  <div class="grid grid-cols-2 gap-4">
    <div>
      <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
      <input type="text" id="subject" bind:value={request.subject} class="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
    </div>
    <div>
      <label for="targetDate" class="block text-sm font-medium text-gray-700">Target Date</label>
      <input type="date" id="targetDate" bind:value={request.targetDate} class="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
    </div>
  </div>