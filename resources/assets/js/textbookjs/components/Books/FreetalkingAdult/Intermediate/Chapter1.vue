<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://media-public.canva.com/MADGxltoF6Q/4/screen_2x.jpg">
        
        <v-layout
        align-end
        fill-height
        pa-0
        white--text
      >
        <h1 style="background-color: rgba(13, 13, 13, 0.7);
        width: 100%;
        padding-top : 10px;  
        padding-left : 10px; 
        padding-bottom: 10px;">The Information Fad</h1>
      </v-layout>
    </v-img>
         

          <h3 style="background-color: #c38b8b;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice</h3>
               <div style="padding : 10px;">

   <p>The Internet is one of the most powerful devices ever created when it comes to data gathering and information sharing. People these days are becoming more and more to their internet connected gadgets to keep in touch with their families. Creating online networking web page is the new fad. There's Facebook, Twitter, Cyworld, Tumblr, and Multiply to name a few.
   </p>
   <p>Some students prefer to learn their second language through home based and online tutorials. At their own convenience, their communication needs are met through downloaded books and materials.
   </p>
   <p>The internet is also the baseline of most communication satellites. Monitored activities of things for the weather the earth and its security measures are now enhanced with more speed and accuracy. Thanks to the power of the internet, all these things have been radically available Imagine a world with lesser work but with greater incentives due to swift pace of internet information and production. Imagine the world without it. Are you one of those machine-powered beings too?
   </p>




<h3 style="padding-top: 7px;  margin-left: -10px; margin-right: -10px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #c38b8b;">Key Expressions</h3>

<div style="padding-top : 10px; padding-bottom : 10px;">

<p>Discuss and Explain</p>

<ol style="margin: 12px;">
<li>one of the most powerful devices ever created
</li>

<li>creating online networking web page is the new fad
</li>

<li>the baseline of most communication satellites
</li>

<li>security measures are now enhanced with more speed and accuracy
</li>

<li>all these things have been radically available machine-powered beings
</li>
</ol>

</div>


<h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #c38b8b;">Checkpoint</h3>
<div style="padding-top : 10px; padding-bottom : 10px;">


<p>Answer the following questions.
</p>

<ol style="margin: 12px;">
  <li>What is the main function of the internet to most people?
  </li>
  
  <li>How important is the internet for you?
  </li>
  
  <li>How often do you use the internet?
  </li>
  
  <li>Have you ever bought something through the internet?
  </li>
  
  <li>What are the downsides of using it?
  </li>
  
  <li>How has the internet improved our lives?
  </li>
  
  <li>Who uses the internet more often? Men or women?
  </li>
  
  <li>How much do you spend on using the internet?
  </li>
  
  <li>Is it possible to go on with our daily life without this technology?
  </li>
  
  <li>Do you think that people spend too much time using the internet?
  </li>
  
</ol>

</div>

<h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #c38b8b; ">Vocabulary Builder</h3>

<div style="padding-top : 0px; padding-bottom : 10px;">

<br>

<li style="list-style-type: none;"><u>gadget</u> - a device or control that is very useful for a particular job
</li>

<li style="list-style-type: none;"><u>networking</u> - (computing) communicate with and within a group
</li>

</div>

<h3  style="padding-top: 7px; margin-left: -10px; margin-right: -10px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #c38b8b;">Quotable Quotes
</h3>

<div style="padding-top : 2px; padding-bottom : 10px;">

<p>React to the statements given by people who have remarkably excelled in the field of internet and information technology. Do you agree or disagree?</p>

<ol>

    <li><i>I'm very excited about having the internet in my den.</i> - Steve Jobs
    </li>
    <br>
    <li><i>The internet is becoming the town square for the global village of tomorrow.</i> - Bill Gates
    </li>
    <br>
    <li><i>The internet: transforming society and shaping the future through chat.</i> - Dave Barry
    </li>
    <br>
    <li><i>Right now, with social networks and other tools on the internet, all of these 500 million people have a way to say what they're thinking and have their voice be heard.</i> - Mark Zuckerberg
    </li>
    <br>
    <li><i>The internet is the Viagra of big business.</i> - Jack Welch
    </li>
    
</ol>

</div>


</div>


       </v-layout>
     </v-container>
  </v-layout>
  </v-container>
</div>



</template>



<script>
export default {

  props: ['fontSize'],

  data(){

    return{


    }

  },


  beforeMount(){


  },

  methods:{


  },

  watch:{

    fontSize(current, old){

      console.log(current, 'current')
      console.log(old, 'previous')


    }
  }
}
</script>

<style lang="css">

p{

  margin-top: 10px;
}

h3{
  padding-top: 7px;

}

li{


}

body{

  font-size: 16px;
}

</style>
