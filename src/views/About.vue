<template>
  <div class="about">
    <body>
      <h1>
        About the Motivator
      </h1>
      <container>
        <p1 id="text">
          This side project started as a joke to help bring some joy to students at Tech
          Elevator. The Motivator v1 was a
          simple command line interface written using Java in Eclipse. The
          Motivator v2 was an attempt to us SpringMVC to integrate a
          seperate SQL database with the intent to make it publicly accessable
          online. This is now the third attempt to write The Motivator. This
          time everything was done using Vue with the intention of making hosting it
          as simple as possible. <br /><br />
        </p1>
        <h4>Welcome to The Motivator 3.1 <br /><br /></h4>
        <p4>
          (3.1 update introduced the navigation feature to include this About
          page... but the router linking was sloppy so I started the whole thing from scratch)
        </p4>
      </container>
    </body>
  </div>
</template>

<style>
#text {
  margin-right: 20px;
  max-width: 80%;
}
@media screen and (min-width: 700px) {
    body {
      margin-left: 40px;
      margin-right: 40px;
    }
}

</style>
