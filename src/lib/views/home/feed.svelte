<script>
import FeedPostitem from "./components/feed_postitem.svelte";

</script>
<div class="feed-ctn">
    <FeedPostitem/>
</div>

<style>
    .feed-ctn {
        height: calc(100vh - 4.5em);
        width: 100%;
        margin: 0;
        justify-content: center;
        align-self: center;
        text-align: center;
        overflow: scroll;
        display: flex;
    }
</style>