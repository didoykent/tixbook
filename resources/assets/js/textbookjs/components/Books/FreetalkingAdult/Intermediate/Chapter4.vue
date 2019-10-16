<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwAMs1n8/5/screen/canva-man-and-woman-sitting-on-twigs-petting-beagle-on-grass-area-MADGwAMs1n8.jpg">

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
        padding-bottom: 10px;">Being Happy</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #c38b8b;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice</h3>
               <div style="padding : 10px;">

  <li style="list-style-type: none;"><i>I am glad to meet you ...</i></li>
  <li style="list-style-type: none;"><i>I'm over the moon. I'm on cloud nine.</i></li>
  <li style="list-style-type: none;"><i>He's a happy camper.</i></li>
  <li style="list-style-type: none;"><i>She's grinning from ear to ear.</i></li>


   <p>Just what is happiness?
   </p>
   <p>Is there a definite description to convey the elation of a merry person?
   </p>
   <p>The pursuit of happiness lingers as if it was one of the most elusive things to have when in reality it is the nearest thing to us next to our own selves.
   </p>
   <p>People become happy for random reasons: a power nap on a busy day, an unexpected message from your partner,watching the sunset at the beach, craving and having you favorite food or going for an afternoon walk at the park while shuffling your ipod.
   </p>
   <p>Although happiness is not measured by the tangible wealth we acquire, it won't be a bad idea to pamper the child in you from time to time and feel satisfied after.
   </p>
   <p>Some people hang on to people, others depend on a lifetime buddy such as pets or treasures but there are others who are glad with whatever life tosses to them. Simplicity and happiness is the perfect match for these chosen few who would always see the beauty of everything through hope-filled eyes.
   </p>

 </div>


 <h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #c38b8b;">Checkpoint</h3>
 <div style="padding-top : 10px; padding-bottom : 10px;">


 <p>Answer the following questions.
 </p>

 <ol style="margin: 12px;">
   <li>What is happiness to you?
   </li>

   <li>Is happiness just a state of mind?
   </li>

   <li>Would you be happier being married or single?
   </li>

   <li>When was the happiest time of your life?
   </li>

   <li>How happy are you when you are with your family? Friends?
   </li>

   <li>Can you be really happy without money?
   </li>

   <li>Are rich people always happy?
   </li>

   <li>Are you happy right now?
   </li>

   <li>What do you think will make you happy 10-15 years from now?
   </li>

   <li>Describe a world without happiness. How can you keep happiness in your heart?
   </li>

 </ol>

 </div>


 <h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #c38b8b; ">Vocabulary Builder</h3>

 <div style="padding-top : 0px; padding-bottom : 10px;">

 <br>

 <li style="list-style-type: none;"><u>Crave  </u> - Have a craving, appetite, or great desire for
 </li>

 <li style="list-style-type: none;"><u>Elation </u> -  An exhilarating psychological state of pride and optimism; an absence of depression
 </li>

 <li style="list-style-type: none;"><u>Elusive   </u> - Difficult to detect or grasp by the mind or analyze
 </li>

 <li style="list-style-type: none;"><u>Pursuit   </u> - The act of pursuing in an effort to overtake or capture
 </li>

 <li style="list-style-type: none;"><u>Shuffle  </u> - Mix so as to make a random order or arrangement
 </li>

 <li style="list-style-type: none;"><u>Toss   </u> - Throw or toss with a light motion
 </li>

 </div>


<h3  style="padding-top: 7px; margin-left: -10px; margin-right: -10px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #c38b8b;">Quotable Quotes
</h3>

<div style="padding-top : 2px; padding-bottom : 10px;">

  <p>Consider these people's points of view about happiness.
  </p>

  <ol>

      <li><i>Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.</i>  - Buddha
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i>Happiness is not something readymade. It comes from your own actions.</i>  - Dalai Lama
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i>God cannot give us happiness and peace apart from Himself, because it is not there. There is no such thing.</i>  - C.S. Lewis
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i>Happiness is not being pained or troubled in mind.</i>  - Thomas Jefferson
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i>I heard from a definition once. Happiness is health and a short memory! I wish I'd invented it, because it is very true.</i>  - Audrey Hepburn
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>

  </ol>


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
