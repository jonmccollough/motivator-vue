<template>
  <div class="home">
    <title>The Motivator</title>
    <img alt="Vue logo" src="../assets/logo.png" />
    <body>
      <h1>The Motivator!</h1>
      <div id="quoteDisplay">
        <!--Quote go here -->
        {{ quote }}
      </div>
      <button onclick="newQuote">Get More Motivated</button>

      <script type="application/javascript" src="quotes.js"></script>
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
    quote: "Pick a quote",
    quotes: [
      "A man paints with his brains and not with his hands.",
      "You must submit to supreme suffering in order to discover the completion of joy.",
      "I have held many things in my hands, and I have lost them all; but whatever I have placed in God's hands, that I still possess.",
      "A man with God is always in the majority.",
      "I love Taco Bell. Whenever I go there, I could get anything on the menu and be totally happy."
    ],
  }),
  methods: {
    newQuote: function() {
      this.random = Math.floor(Math.random() * 5) + 0;

      this.quote = this.quotes[this.random];
      this.person = this.persons[this.random];
      this.finalUrl = this.url + this.quote;
    }
  }
};
// // @ is an alias to /src
// //import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     //HelloWorld
//   }
// };
</script>
