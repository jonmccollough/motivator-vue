<template>
  <div class="home" id="main">
    <title>The Motivator</title>
    <img alt="Motivator logo" src="../assets/motivator logo.png" />
    <body>
      <h1>The Motivator</h1>
      <div id="quoteDisplay">
        <!--Quote go here -->
        {{ quote }}
      </div>
      <button v-on:click="newQuote">Get More Motivated</button>
    </body>
  </div>
</template>

<script>
import quotejs from "../components/quotes";
export default {
  data: () => ({
    url: "https://twitter.com/intent/tweet?text=",
    finalUrl: "",
    random: 0,
    quote: "Let me motivate you!",
    quotes: quotejs
  }),
  methods: {
    newQuote: function() {
      this.random = Math.floor(Math.random() * quotejs.length);

      this.quote = this.quotes[this.random];
      this.finalUrl = this.url + this.quote;
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 700px) {
  body {
    margin-left: 180px;
    margin-right: 180px;
  }
  img {
    max-width: 220px;
  }
}
</style>
