<script>
    export let request;
  </script>
  
  <div class="grid grid-cols-4 gap-2">
    {#each Array(13) as _, i}
      <div>
        <label for="targetLevel{i === 0 ? 'K' : i}" class="block text-xs font-medium text-gray-700">Level {i === 0 ? 'K' : i}</label>
        <input type="number" id="targetLevel{i === 0 ? 'K' : i}" bind:value={request[`targetLevel${i === 0 ? 'K' : i}`]} step="0.01" min="0" max="1" class="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </div>
    {/each}
  </div>