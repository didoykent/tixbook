<template>

<div :style = "{fontSize: fontSize + 'px'}">

<v-container fluid ma-0 pa-0>

  <v-layout column>
    <v-img
           src="https://image.freepik.com/free-photo/little-girl-sitting-with-funny-adults-table_23-2147810820.jpg">

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
        padding-bottom: 10px;">The Generation Gap</h1>
      </v-layout>
    </v-img>


          <h3 style="background-color: #c38b8b;   padding-top : 10px;  padding-left : 10px; padding-bottom: 10px;">Reading Practice</h3>
               <div style="padding : 10px;">

   <p>We engage ourselves with different people of different attitudes and personalities. We thrive in a world where there is plenty of cultural and communication barriers. It is not unusual there­fore if generation gap is still evident among us. Generation gap can exist in various forms. It could be your parents giving you snide comments about those new pair of tight or skinny pants you are sporting on. It can come in handy when you hear your grandpa talk about how olden times were much better in expressing their laidback music - unlike those rough and noisy tunes he could hear every day from the radio playlist. Or it could be your senior colleagues sneering at your abstract paintings that your boss has preferred to display in his office lobby.
   </p>
   <p>Is generation gap visible in your community? What are manifestations in your home, school or workplace?
   </p>




<h3 style="padding-top: 7px;  margin-left: -10px; margin-right: -10px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px;margin-top: 10px; background-color: #c38b8b;">Checkpoint</h3>

<div style="padding-top : 10px; padding-bottom : 10px;">



<ol style="margin: 12px;">
<li>What is generation gap?
</li>

<li>Give situations when generation gap is clearly evident in:
</li>

<ol type="a">
  <li>Music</li>
  <li>Movies</li>
  <li>Fashion</li>
  <li>Relationships</li>
  <li>Style and Values</li>
</ol>


<li>What could be some problems in a relationship or marriage of different generations?
</li>

<li>Can you talk to your parents about everything? What about your friends?
</li>

<li>How can you overcome generation gap?
</li>
</ol>

</div>


<h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px;  padding-bottom: 10px;  padding-top: 10px; padding-left: 10px; background-color: #c38b8b; ">Vocabulary Builder</h3>

<div style="padding-top : 0px; padding-bottom : 10px;">

<br>

<li style="list-style-type: none;"><u>Generation gap</u> - a difference between the views of young people and their parents
</li>

<li style="list-style-type: none;"><u>Snide </u> - expressive of contempt
</li>

<li style="list-style-type: none;"><u>Sneer  </u> - smile contemptuously
</li>

<li style="list-style-type: none;"><u>Sport on </u> - wear or display in an ostentatious or proud manner
</li>

<li style="list-style-type: none;"><u>Thrive  </u> - make steady progress; be at the high point in one's career or reach a high point in historical significance or importance
</li>

</div>


<h3  style="padding-top: 7px; margin-left: -10px; margin-right: -10px; padding-left: 10px; margin-top: 10px; padding-bottom: 10px; margin-bottom: 12px;  padding-top: 10px; background-color: #c38b8b;">Quotable Quotes
</h3>

<div style="padding-top : 2px; padding-bottom : 10px;">

<p>Study and react to people's point of view about generation gap. What is your idea about it?
</p>

<ol>

    <li><i>Country radio went through a time where they were trying to pigeonhole everybody, and trying to make the gap really narrow, and I think that they've opened that up a bit</i> - Tim McGraw
    </li>
    <br />
    <li style="list-style-type: none;">Agree:
    </li>
    <li style="list-style-type: none;">Disagree:
    </li>
    <br>
    <li><i>There was no respect for youth when I was young, and now that I am old, there is no respect for age - I missed it coming and going.</i> - J.B. Priestly
    </li>
    <br />
    <li style="list-style-type: none;">Agree:
    </li>
    <li style="list-style-type: none;">Disagree:
    </li>
    <br>
    <li><i>People who don't cherish their elderly have forgotten whence they came and whither they go.</i> - Ramsey Clark
    </li>
    <br />
    <li style="list-style-type: none;">Agree:
    </li>
    <li style="list-style-type: none;">Disagree:
    </li>
    <br>
    <li><i>A father lives after death in his son.</i> - Sanskrit
    </li>
    <br />
    <li style="list-style-type: none;">Agree:
    </li>
    <li style="list-style-type: none;">Disagree:
    </li>
    <br>
    <li><i>They say that genes skip generations. Maybe that's why grandparents find their grandchildren so likeable.</i> - Joan Mcintosh
    </li>
    <br />
    <li style="list-style-type: none;">Agree:
    </li>
    <li style="list-style-type: none;">Disagree:
    </li>

</ol>

</div>




<h3  style="padding-top: 7px;  margin-left: -10px; margin-right: -10px; padding-left: 10px; padding-bottom: 10px;  padding-top: 10px; margin-top: 10px; background-color: #c38b8b;">Enhance!</h3>
<div style="padding-top : 10px; padding-bottom : 10px;">


<p>Tell me something about the picture.
</p>

<v-container>
 <v-layout wrap align-content-center>

                       <v-flex xs12 md12 >
                           <v-card hover>

                               <v-img src="images/gen_gap_img.jpg" />


                           </v-card>
                       </v-flex>

 </v-layout>
</v-container>

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
