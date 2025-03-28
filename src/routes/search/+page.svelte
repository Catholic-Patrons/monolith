<script lang="ts">
    import NavBar from '../NavBar.svelte';
    import Footer from '../Footer.svelte';
    import SearchResult from './SearchResult.svelte';

    const causeTags = ["Addition", "Renovation", "Building"];

    let causes = [
        {
            "id": "321654",
            "title": "St. Benedict's - Expanding the church parking lot",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            "donation_link": "https://pushpay.com/g/stbenedictatchison",
            "images": ["placeholder1.jpeg"],
            "start": 1743040680885,
            "end": 0,
            "goal": 15000,
            "raised": 8500,
            "tags": ["Addition"]
        },
        {
            "id": "321654",
            "title": "St. Joseph's - Installing new flooring",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            "donation_link": "https://pushpay.com/g/stbenedictatchison",
            "images": ["placeholder2.jpeg"],
            "start": 1743040680885,
            "end": 0,
            "goal": 15000,
            "raised": -1,
            "tags": ["Addition", "Renovation"]
        },
    ];

    function toggleFilter(filterName: string) {
        let filterEls = document.getElementsByClassName("filter-tag");
        for (let i = 0; i < filterEls.length; i++) {
            let el = filterEls[i] as HTMLElement;
            if (el.innerText === filterName) {
                if (el.classList.contains("selected-filter")) {
                    el.classList.remove("selected-filter");
                } else {
                    el.classList.add("selected-filter");
                }
                break;
            }
        }
    }
</script>

<div style="display: flex; flex-flow: column; min-height: 100vh;">
    <NavBar/>

    <div class="page-contents" style="min-height: calc(100vh - 7em);">
        <!-- search bar + sort by container -->
        <div id="top-container">
            <input id="search-bar" type="text" placeholder="Search for causes">

            <select id="sort-filter">
                <option value="sort-alpha-az">Alphabetical (A-Z)</option>
                <option value="sort-alpha-az">Alphabetical (Z-A)</option>
                <option value="sort-start-az">Start Date (Newest First)</option>
                <option value="sort-start-az">Start Date (Oldest First)</option>
                <option value="sort-fund-az">Funding Goal (Lowest First)</option>
                <option value="sort-fund-az">Funding Goal (Highest First)</option>
            </select>

            <button id="search-btn" class="btn">Search</button>
        </div>
        <div style="display: flex;">
            <!-- filters container -->
            <div id="search-left-container">
                
                <strong class="filter-label">Filter by:</strong>
                {#each causeTags as tagName}
                    <button class="filter-tag{tagName == "Addition" ? " selected-filter" : ""}" on:click={()=>toggleFilter(tagName)}>{tagName}</button>
                {/each}

                <!-- divider -->
                <div style="width: 100%; height: 2px; background-color: gray; margin-top: 16px; margin-bottom: 12px;"></div>

                <strong class="filter-label">Location:</strong>
                <input type="text" placeholder="Search">
            </div>
            <!-- results container -->
            <div>
                {#each causes as cause}
                    <SearchResult
                        thumbnail={cause.images[0]} 
                        title={cause.title}
                        description={cause.description}
                        raised={cause.raised}
                        goal={cause.goal}
                        tags={cause.tags}
                        start={cause.start} />
                {/each}
            </div>
        </div>
    </div>

    <Footer/>
</div>

<style>
    :root {
        --h2-font-size-value: 3;
        --p-font-size-value: 1.4;
    }

    #top-container {
        padding: 20px;
        text-align: center;
    }

    #search-bar {
        width: 50%;
        margin-right: 15px;
        padding: 1em;
        border: 1px solid rgb(100, 100, 100);
        border-radius: 100px;
    }

    #sort-filter {
        background-color: rgb(225, 220, 220);
        border: none;
        outline: none;
        border-radius: 10px;
        padding: 1em;
        margin-right: 15px;
        cursor: pointer;

        /* remove default arrow */  
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-appearance: none;
        -moz-appearance: none;

        /* arrow */
        background-image:
            linear-gradient(45deg, transparent 50%, rgb(130, 130, 130) 50%),
            linear-gradient(135deg, rgb(130, 130, 130) 50%, transparent 50%);
        background-position:
            calc(100% - 20.5px) calc(1em + 4px),
            calc(100% - 14px) calc(1em + 4px);
        background-size:
            7px 7px,
            7px 7px;
        background-repeat: no-repeat;
    }
    #sort-filter:focus {
        /* arrow */
        background-image:
            linear-gradient(135deg, transparent 50%, rgb(130, 130, 130) 50%),
            linear-gradient(45deg, rgb(130, 130, 130) 50%, transparent 50%);
        background-position:
            calc(100% - 20.5px) calc(1em + 3px),
            calc(100% - 14px) calc(1em + 3px);
        background-size:
            7px 7px,
            7px 7px;
        background-repeat: no-repeat;
    }

    .btn {
        padding: 0.736em 2.2em;
        background-color: rgb(144, 208, 244);
        border-radius: 300px;
        color: white;
        text-decoration: none;
        border: none;
        cursor: pointer;
        font-size: 1.1em;
    }
    .btn:hover {
        background-color: rgb(103, 166, 202);
    }

    #search-left-container {
        padding: 20px;
        font-family: sans-serif;
    }

    #search-left-container input {
        padding: 0.5em;
        border: 1px solid rgb(100, 100, 100);
        border-radius: 100px;
    }

    .filter-tag {
        display: block;
        background-color: rgb(225, 220, 220);
        padding: 0.5em;
        width: 7em;
        border: none;
        border-radius: 50px;
        text-align: center;
        font-size: 1.1em;
        margin-bottom: 6px;
        user-select: none;
        cursor: pointer;
    }
    .selected-filter {
        background-color: rgb(115, 200, 250);
    }

    .filter-label {
        font-size: 1.2em;
        display: block;
        margin-bottom: 7px;
    }

</style>
