<script>
    export let request;
  </script>
  
  <div class="grid grid-cols-2 gap-4">
    <div>
      <label for="additionalGrouping" class="block text-sm font-medium text-gray-700">Additional Grouping</label>
      <input type="number" id="additionalGrouping" bind:value={request.additionalGrouping} class="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
    </div>
    <div>
      <label for="nyrDate" class="block text-sm font-medium text-gray-700">NYR Date</label>
      <input type="date" id="nyrDate" bind:value={request.nyrDate} class="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
    </div>
  </div>