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
      <div>
       <button v-on:click="softQuote">Get Soft Motivation</button>
       <button id="TQ" v-on:click="toughQuote">Get Tough Motivation</button>
      </div>
      <div>
        <button id="DMQ" v-on:click="DMQuote">
          I got too Motivated. Demotivate me.
        </button>
      </div>
    </body>
  </div>
</template>

<script>
import quotejs from "../components/quotes";
import toughQuote from "../components/toughQuotes";
import DMquotes from "../components/DMQuotes";
export default {
  data: () => ({
    url: "https://twitter.com/intent/tweet?text=",
    finalUrl: "",
    random: 0,
    quote: "Let me motivate you!",
    quotes: quotejs,
    tQuotes: toughQuote,
    dmquotes: DMquotes,
    combinedQ: toughQuote.concat(quotejs)
  }),
  methods: {
    newQuote: function() {
      const combinedQL = toughQuote.concat(quotejs);

      this.random = Math.floor(Math.random() * combinedQL.length);

      this.quote = this.combinedQ[this.random];
      this.finalUrl = this.url + this.quote;
    },
    softQuote: function() {
      this.random = Math.floor(Math.random() * quotejs.length);

      this.quote = this.quotes[this.random];
      this.finalUrl = this.url + this.quote;
    },
    toughQuote: function() {
      this.random = Math.floor(Math.random() * toughQuote.length);

      this.quote = this.tQuotes[this.random];
      this.finalUrl = this.url + this.quote;
    },
    DMQuote: function() {
      this.random = Math.floor(Math.random() * DMquotes.length);

      this.quote = this.dmquotes[this.random];
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
