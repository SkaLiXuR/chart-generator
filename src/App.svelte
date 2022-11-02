<script>
  let chartTitle = '';
  let chartContent2D = []
  let rowLeft;
  let rowRight;

  function addRow() {
    chartContent2D.push([rowLeft, rowRight])
    chartContent2D = chartContent2D
    console.log(rowLeft, rowRight, chartContent2D);
  }

  
</script>

<main>
  <form on:submit|preventDefault={addRow}>
    <div class="chart-controls">

      <label for="chart-title-input">Chart title:</label>

      <input autocomplete="off" 
      placeholder="Chart Title" 
      name="chart-title-input"
      type="text" bind:value={chartTitle}>

      <br>
      
      <label for="row-left-input">Add a row:</label>

      <input autocomplete="off" 
      placeholder="Left side" 
      name="row-left-input" 
      type="text" bind:value={rowLeft}>

      <input autocomplete="off" 
      placeholder="Right side" 
      type="text" bind:value={rowRight}>

      <input type="submit" value="Add Row" on:submit={addRow}>
    </div>
  </form>
    <div class="chart-container">
      <div class="chart-title chart-item">{chartTitle}</div>
      {#each chartContent2D as elem}
      <div class="chart-item">{elem[0]}</div>
      <div class="chart-item">{elem[1]}</div>
      {/each}
    </div>
</main>