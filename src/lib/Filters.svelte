<script>
    export let request;
  
    function addFilter(filterType) {
      request[filterType] = [...request[filterType], ''];
    }
  
    function removeFilter(filterType, index) {
      request[filterType] = request[filterType].filter((_, i) => i !== index);
    }
  </script>
  
  <div class="grid grid-cols-2 gap-4">
    {#each ['filterBySchool', 'filterByTeacher', 'filterByGrade', 'filterByGroup'] as filterType}
      <div>
        <label class="block text-sm font-medium text-gray-700">{filterType}</label>
        {#each request[filterType] as _, index}
          <div class="flex mt-1">
            <input type="text" bind:value={request[filterType][index]} class="block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <button type="button" on:click={() => removeFilter(filterType, index)} class="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">-</button>
          </div>
        {/each}
        <button type="button" on:click={() => addFilter(filterType)} class="mt-1 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">+ {filterType}</button>
      </div>
    {/each}
  </div>