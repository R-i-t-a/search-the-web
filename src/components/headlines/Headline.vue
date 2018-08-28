<template>
    <li>
        <p>Title: {{headline.title}}</p>
        <p>Author: {{headline.author}}</p>
    </li>
</template>

<script>
export default {
  props: {
    headline: Object
  }
};
</script>

<style>

</style>
