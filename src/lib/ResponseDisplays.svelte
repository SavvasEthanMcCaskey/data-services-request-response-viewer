<script>
    export let response = null;
    export let loading = false;
  
    function formatDate(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid Date';
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }
  </script>
  
  {#if loading}
    <div class="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">
      Loading...
    </div>
  {:else if response}
    <div class="bg-white rounded-lg shadow-md overflow-y-auto max-h-[calc(100vh-2rem)]">
      {#each response as report, reportIndex}
        <div class="border-b last:border-b-0 p-6">
          <h3 class="text-2xl font-bold mb-4">{report.assignmentTitle} Report Run</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-6">
            <div><span class="font-medium">Report Run:</span> {report.reportRun}</div>
            <div><span class="font-medium">Assignment ID:</span> {report.assignmentID}</div>
            <div><span class="font-medium">Target Level:</span> {report.targetLevel}</div>
            <div><span class="font-medium">Target Date:</span> {formatDate(report.targetDate)}</div>
            <div><span class="font-medium">Days to Target:</span> {report.daysToTarget}</div>
            <div><span class="font-medium">Organization:</span> {report.organizationName}</div>
            <div><span class="font-medium">Teacher:</span> {report.teacherName}</div>
            <div><span class="font-medium">Grade:</span> {report.grade}</div>
            <div><span class="font-medium">Group:</span> {report.groupName}</div>
          </div>
          
          <details class="mb-4">
            <summary class="cursor-pointer text-blue-600 hover:text-blue-800 font-medium">
              Student Rows
            </summary>
            <div class="mt-4 overflow-x-auto">
              <table class="w-full text-sm">
                <thead class="bg-gray-100">
                  <tr>
                    {#each Object.keys(report.studentRows[0] || {}) as header}
                      <th class="px-4 py-2 text-left font-medium text-gray-700">{header}</th>
                    {/each}
                  </tr>
                </thead>
                <tbody class="bg-white">
                  {#each report.studentRows as row}
                    <tr class="border-t border-gray-200">
                      {#each Object.entries(row) as [key, cell]}
                        <td class="px-4 py-2">
                          {#if typeof cell === 'number'}
                            {cell.toFixed(2)}
                          {:else if cell === null}
                            <span class="text-gray-400">N/A</span>
                          {:else}
                            {cell}
                          {/if}
                        </td>
                      {/each}
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </details>
        </div>
      {/each}
    </div>
  {:else}
    <div class="bg-white p-4 rounded-lg shadow-md text-center text-gray-500">
      No response data available. Submit a request to see results.
    </div>
  {/if}