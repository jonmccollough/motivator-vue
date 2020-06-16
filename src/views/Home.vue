<template>
  <div class="home" id="app">
    <title>The Motivator</title>
    <img alt="Motivator logo" src="../assets/motivator logo.png" />
    <body>
      <h1>The Motivator</h1>
      <div id="quoteDisplay">
        <!--Quote go here -->
        {{ quote }}
      </div>
      <button v-on:click="newQuote">Get More Motivated</button>

      <!-- <script type="application/javascript" src="quotes.js"></script> -->
    </body>
  </div>
</template>

<script>
export default {
  el: "#app",
  data: () => ({
    url: "https://twitter.com/intent/tweet?text=",
    finalUrl: "",
    random: 0,
    quote: "Let me motivate you!",
    quotes: [
      "A man paints with his brains and not with his hands.",
      '"Be miserable. Or motivate yourself. Whatever has to be done, it\'s always your choice." - Wayne Dyer',
      '"The secret of getting ahead is getting started." - Mark Twain',
      "Never doubt yourself. Picture your success!",
      "WOW! you are so attractive!",
      "Looookin reeeeal gooood!",
      "You are going to do great today!",
      "YOU GOT THIS BRO!",
      '"Go to Taco Bell. Whenever I go there, I leave totally happy." - Jon McCollough',
      "The harder you work for something, the greater you'll feel when you achieve it!",
      "Push yourself, because no one else is going to do it for you!",
      "Your only limitation is your imagination!",
      '"It does not matter how slowly you go as long as you do not stop." - Confusius',
      '"Accept the challenges so that you can feel the exhilaration of victory." - George S. Patton',
      '"If you\'re going through hell, keep going." -Winston Churchill',
      '"A good plan violently executed now is better than a perfect plan executed next week." - George S.Patton',
      '"Failure will never overtake me if my determination to succeed is strong enough." - Og Mandino',
      '"It always seems impossible until it\'s done." - Nelson Mandela',
      '"Whenever I am having a not awesome day I tell myself to start having an awesome day." - Jon McCollough',
      '"How long are you going to wait before you demand the best for yourself?” – Epictetus',
      "“First say to yourself what you would be; and then do what you have to do.” – Epictetus",
      "“What man actually needs is not a tensionless state but rather the striving and struggling for some goal worthy of him.” – Viktor Frankl",
      "“Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?” – Marcus Aurelius"
    ]
  }),
  methods: {
    newQuote: function() {
      this.random = Math.floor(Math.random() * 23);

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
