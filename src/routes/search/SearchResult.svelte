<script lang="ts">
    let {
        thumbnail, 
        title,
        description,
        raised,
        goal,
        tags,
        start
    } = $props();
    
    function formatValue(val: number): string {
        if (val === -1) {
            return "???";
        }
        return "$" + val.toLocaleString();
    }

    function formatDate(millis: number): string {
        const date = new Date(millis);
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    }

    let progressPercentage = raised / goal * 100;
    // progress unknown
    if (progressPercentage < 0) {
        progressPercentage = 0;
    }
</script>

<div class="search-result">
    <!-- left side -->
    <div style="padding: 10px;">
        <!-- image -->
        <div class="search-result-image-container">
            <img src="/src/routes/search/{thumbnail}" alt="thumbnail">
        </div>
        
        <!-- tags -->
        <div style="margin-bottom: 5px; margin-top: 10px;">Tags</div>
        <div style="display: flex;">
            {#each tags as tag}
                <div class="results-tag">{tag}</div>
            {/each}
        </div>
    </div>
    
    <!-- right side -->
    <div style="text-align: center; padding: 1em; position: relative;">
        <!-- title & description -->
        <h2 style="margin-top: 0px;">{title}</h2>
        <p>{description}</p>
        
        <!-- progress bar -->
        <div style="font-size: 0.9em;">{formatValue(raised)} of {formatValue(goal)} raised</div>
        <div class="progress-bar">
            <div class="progress-amt" style="width: {progressPercentage}%;"></div>
        </div>

        <!-- minor info -->
        <div class="result-minor-info">
            Fundraiser start date - {formatDate(start)}
        </div>
    </div>
</div>

<style>
    .search-result {
        background-color: rgb(225, 220, 220);
        border-radius: 14px;
        margin-bottom: 1.2em;
        margin-right: 2em;
        font-family: sans-serif;
        font-size: 1.15em;
        display: flex;
    }

    .search-result-image-container {
        background-color: black;
        width: 30vw;
        min-width: 250px;
        height: 20vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }
    .search-result-image-container img {
        height: 100%; 
    }

    .results-tag {
        background-color: rgb(190, 190, 190);
        padding: 0.3em;
        padding-left: 0.5em;
        padding-right: 0.5em;
        border-radius: 50px;
        text-align: center;
        font-size: 1.0em;
        margin-right: 7px;
    }

    .progress-bar {
        background-color: white;
        width: 50%;
        height: 20px;
        margin-top: 5px;
        border-radius: 100px;
        margin-left: auto;
        margin-right: auto;
    }

    .progress-amt {
        background-color: rgb(95, 215, 55);
        height: 100%;
        border-radius: 100px;
    }

    .result-minor-info {
        font-size: 0.85em;
        text-align: right;
        position: absolute;
        right: 15px;
        bottom: 10px;
    }
</style>