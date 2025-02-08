<script lang="ts">
    import NavBar from '../NavBar.svelte';
    import Footer from '../Footer.svelte';
    import splash from '$lib/images/james-coleman-HozneSuPplM-unsplash.jpg';

</script>

<div style="display: flex; flex-flow: column; min-height: 100vh;">
    <NavBar/>

    <div class="page-contents">
        <div class="left-contents">
            <h1>Contact Us</h1>
            <p style="font-size: 1.5em;">
                If you'd like to know more about how you can support our mission, we'd love your help!
            </p>
        </div>
        <div class="right-contents">
            <h2 style="margin-bottom: -0.5em;">Name<span class="required">(required)</span></h2>
            <div style="display: flex; justify-contents: space-between;">
                <div style="margin-right: 50px;">
                    <h2>First Name</h2>
                    <input type="text">
                </div>
                <div>
                    <h2>Last Name</h2>
                    <input type="text">
                </div>
            </div>

            <h2>Email<span class="required">(required)</span></h2>
            <input type="text" style="width: 100%;">

            <h2>Message<span class="required">(required)</span></h2>
            <textarea></textarea>

            <span style="color: red; font-size: 30px;">TODO: Implement message sending</span>
        </div>
    </div>

    <Footer/>
</div>

<style>
    :root {
        --h2-font-size-value: 3;
        --p-font-size-value: 1.4;
    }

    /* Fix CSS on mobile devices */
    @media (max-width: 700px) {
        .page-contents {
            flex-direction: column;
        }
        
        .left-contents, .right-contents {
            padding: 0em !important;
        }

        input, textarea {
            width: 90% !important;
        }
    }

    .left-contents, .right-contents {
        padding: 2em;
    }
    
    .required {
        font-size: 0.8em;
        margin-left: 10px;
        color: gray;
    }

    .page-contents {
        display: flex;
        padding-top: 6.6vmax;
        padding-bottom: 6.6vmax;
        font-family: "Cormorant Garamond", serif;
        flex: 1;
        width: 90vw;
        margin: auto;
    }

    .page-contents h2 {
        margin-bottom: 4px;
    }

    input, textarea {
        background-color: transparent;
        padding: 1em;
        border: 1px solid black;
        border-radius: 100px;
        width: 100%;
    }

    /* counter curve illusion making it look right shifted */
    input {
        margin-left: -1px;
    }

    textarea {
        height: 4em;
        border-radius: 20px;
    }
</style>
