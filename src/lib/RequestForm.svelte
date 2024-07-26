<script>
  import { createEventDispatcher } from 'svelte';
  import BasicInfo from './BasicInfo.svelte';
  import TargetLevels from './TargetLevels.svelte';
  import AdditionalInfo from './AdditionalInfo.svelte';
  import Filters from './Filters.svelte';

  const dispatch = createEventDispatcher();

  let request = {
    subject: 'math',
    courseList: [],
    targetDate: new Date('02/02/2023'),
    targetLevelK: 0.10,
    targetLevel1: 0.10,
    targetLevel2: 0.10,
    targetLevel3: 0.10,
    targetLevel4: 0.10,
    targetLevel5: 0.10,
    targetLevel6: 0.10,
    targetLevel7: 0.10,
    targetLevel8: 0.10,
    targetLevel9: 0.10,
    targetLevel10: 0.10,
    targetLevel11: 0.10,
    targetLevel12: 0.10,
    additionalGrouping: 4,
    filterBySchool: [''],
    filterByTeacher: [],
    filterByGrade: [],
    filterByGroup: [],
    filterByDemographics: {
      disabilityStatus: [],
      englishLanguageProficiency: [],
      gender: [],
      migrantStatus: [],
      ethnicity: [],
      race: [],
      socioeconomicStatus: [],
      specialServices: []
    },
    nyrDate: '',
    tenantId: '19d9b7ca-d3d8-42d6-85ef-e4195f681eae',
    version: 'v23'
  };

  let loading = false;

  function handleSubmit() {
    loading = true;
    dispatch('submit', request);
    loading = false;
  }

  export function setLoading(state) {
    loading = state;
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-4 bg-white shadow  p-6 rounded-lg shadow-md">
  <BasicInfo bind:request />
  <TargetLevels bind:request />
  <AdditionalInfo bind:request />
  <Filters bind:request />

  {#key loading}
  <button type="submit" class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    {loading ? 'Loading...' : 'Send Request'}
  </button>
  {/key}
</form>