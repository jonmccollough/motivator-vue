<template>
  <div class="home" id="main">
    <title>The Motivator</title>
    <img name="Motivator logo" id="logo" src="../assets/motivator logo.png" />
    <body>
      <h1>The Motivator</h1>
      <div id="quoteDisplay">
        <!--Quote go here -->
        {{ quote }}
      </div>
      <container>
      <div class="buttons">
      <button v-on:click="newQuote">More Motivation</button>
      </div>
      <div>
        <button v-on:click="softQuote">Soft Motivation</button>
      </div>
      <div>
        <button id="TQ" v-on:click="toughQuote">
          Tough Motivation
        </button>
      </div>
      <div>
        <button id="DMQ" v-on:click="DMQuote">
          Demotivation
        </button>
      </div>
      </container>
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
    combinedQ: toughQuote.concat(quotejs),
    bluelogo: "../assets/motivator logo.png",
    redlogo: "../assets/motivator red logo.png",
    blklogo: "../assets/motivator blk logo2.png"
  }),
  methods: {
    newQuote: function() {
      let combinedQL = toughQuote.concat(quotejs);

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

      //this.logo.src = this.redlogo;
    
    },
    DMQuote: function() {
      this.random = Math.floor(Math.random() * DMquotes.length);

      this.quote = this.dmquotes[this.random];
      this.finalUrl = this.url + this.quote;

      //this.logo.src = this.blklogo;
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 700px) {
  body {
    margin-left: 160px;
    margin-right: 160px;
  }
  img {
    max-width: 200px;
  }
}
</style>
