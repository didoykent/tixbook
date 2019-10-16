<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://marketplace.canva.com/MADGwJXLULk/5/screen_2x/canva-grilled-dish-with-vegetables-on-round-white-ceramic-plate-MADGwJXLULk.jpg">

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
        padding-bottom: 10px;">Our Health</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #c38b8b;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice</h3>
               <div style="padding : 10px;">


   <p>Health is wealth they say. That is why we really have to take good care of it. The way people treat their bodies though their lifestyle and food habits says otherwise.
   </p>
   <p>It is not an unusual excuse to make when your best friend would skip breakfast to catch the earliest bus. Your dad would keep on eating glucose­ enriched pastries when he is diabetic. Your sister will definitely skip her morning exercise because of the premier of the latest TV drama series.
   </p>
   <p>Salty, fatty and junk food is menacing entrées of a balanced diet. We are not machines that can be fixed easily when our engine is squeaking out of control. We have to do something about that weight reduction health program. Do you know any physical activities that are helpful for your health?
   </p>

 </div>


 <h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #c38b8b;">Key Expressions</h3>
 <div style="padding-top : 10px; padding-bottom : 10px;">

 <li style="list-style-type: none;"><i>Discuss each and explain</i></li>

 <p>
   glucose-enriched pastries
 </p>

 <p>
   menacing entrées of a balanced diet
 </p>



 </div>
 <h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #c38b8b;">Checkpoint</h3>
 <div style="padding-top : 10px; padding-bottom : 10px;">


 <p>Answer the following questions.
 </p>

 <ol style="margin: 12px;">
   <li>Can you consider yourself healthy?
   </li>

   <li>How often do you exercise?
   </li>

   <li>What do you think is the most effective way to burn excess fats?
   </li>

   <li>Do you have any vices such as smoking or drinking?
   </li>

   <li>How much do you drink/smoke?
   </li>

   <li>Do you go for regular medical check-ups?
   </li>

   <li>Do you engage in physical activities or exercise to remain healthy?
   </li>

   <li>Do you like eating vegetables?
   </li>

   <li>Is there a shortcut for diet and healthy lifestyle?
   </li>

   <li>Mention at least three reasons why exercise is crucial for a healthy lifestyle.
   </li>

 </ol>

 </div>

 <h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #c38b8b; ">Vocabulary Builder</h3>

 <div style="padding-top : 0px; padding-bottom : 10px;">

 <br>

 <li style="list-style-type: none;"><u>Health</u> - A healthy state of wellbeing free from disease
 </li>

 <li style="list-style-type: none;"><u>Glucose</u> - A monosaccharide sugar that has several forms; an important source of physiological energy
 </li>

 <li style="list-style-type: none;"><u>Diabetic</u> - Someone who has diabetes
 </li>

 <li style="list-style-type: none;"><u>Premier</u> - Be performed for the first time
 </li>

 <li style="list-style-type: none;"><u>Menacing</u> - Threatening or foreshadowing evil or tragic developments
 </li>

 </div>


<h3  style="padding-top: 7px; margin-left: -10px; margin-right: -10px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #c38b8b;">Quotable Quotes
</h3>

<div style="padding-top : 2px; padding-bottom : 10px;">

  <p>React to these statements given by people who have remarkably excelled in the field of languages.
  </p>

  <ol>

      <li><i> We should have a great fewer disputes in the world if words were taken for what they are, the signs of our ideas only, and not for things themselves.</i>  - John Locke
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i>He who takes medicine and neglects diet wastes the skill of his doctors.</i> - Chinese Proverb
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i> Be careful about reading health books. You may die of a misprint.</i> - Mark Twain
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i>Joy and Temperance and Repose, Slam the door on the doctor's nose.</i> - Henry Wadsworth Longfellow
      </li>
      <br />
      <p>Agree:
      </p>
      <p>Disagree:
      </p>
      <br>
      <li><i>Eat right, exercise regularly, die anyway.</i> - author unknown
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
