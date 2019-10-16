<template>
<v-app>




    <div v-if="$route.name === 'freetalking_beginner'">
        <v-layout>

            <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#5C8D89; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>

                <v-list class="pa-1">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Free Talking Step 1</v-list-tile-title>
                        </v-list-tile-content>


                    </v-list-tile>
                </v-list>

                <v-divider></v-divider>
                <v-list>

                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>book</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>Table of Contents</v-list-tile-title>
                        </v-list-tile>
                    </template>

                    <v-list class="custom-list">
                        <v-list-tile>
                            <h2>Table of Contents</h2>
                        </v-list-tile>
                        <v-list-tile @click="$router.push('/freetalking/beginner/chapter' + n)" v-for="n in 40" :key="n">Chapter {{n}}</v-list-tile>

                    </v-list>
                    </v-list>
            </v-navigation-drawer>

            <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #5C8D89;">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Step 1</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-menu min-width="100%" offset-y>
                    <template v-slot:activator="{ on }" style="min-width:100%;">
                        <v-toolbar-title v-on="on">
                            <span>ᴀA</span>

                        </v-toolbar-title>
                    </template>

                    <v-list style="overflow-y: hidden;">
                        <v-list-tile>
                            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
                        </v-list-tile>
                    </v-list>

                </v-menu>

            </v-toolbar>
        </v-layout>

    </div>




    <div v-if="$route.name === 'freetalking_intermediate'">
        <v-layout>


            <v-navigation-drawer v-model="drawer" :mini-variant="mini" absolute style="background-color:#c38b8b; position:fixed; top:0; left:0; overflow-y:scroll;" temporary>


                <v-list class="pa-1">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_97686.png">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Free Talking Step 1</v-list-tile-title>
                        </v-list-tile-content>

                    </v-list-tile>
                </v-list>

                <v-divider></v-divider>
                <v-list>

                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon>book</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title>Table of Contents</v-list-tile-title>
                        </v-list-tile>
                    </template>

                    <v-list class="custom-list">
                        <v-list-tile>
                            <h2>Table of Contents</h2>
                        </v-list-tile>
                        <v-list-tile @click="$router.push('/freetalking/intermediate/chapter' + n)" v-for="n in 50" :key="n">Chapter {{n}}</v-list-tile>

                    </v-list>

                </v-list>
            </v-navigation-drawer>

            <v-toolbar app :fixed="toolbar.fixed" :clipped-left="toolbar.clippedLeft" style="background-color: #c38b8b;">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title style="margin-left: 0px; margin-right: 5px;">Free Talking Step 1</v-toolbar-title>
                <v-spacer></v-spacer>


                <v-menu min-width="100%" offset-y>
                    <template v-slot:activator="{ on }" style="min-width:100%;">
                        <v-toolbar-title v-on="on">
                            <span>ᴀA</span>

                        </v-toolbar-title>
                    </template>



                    <v-list style="overflow-y: hidden;">
                        <v-list-tile>
                            <v-slider v-model="fontSize" :min="15" :max="30" :step="1"></v-slider>
                        </v-list-tile>
                    </v-list>

                </v-menu>




            </v-toolbar>
        </v-layout>



    </div>







    <router-view :fontSize="fontSize"></router-view>


</v-app>
</template>

<script>
export default {


    data() {
        return {
            drawer: null,
            pathname: window.location.pathname,
            items: [{
                    title: 'Home',
                    icon: 'dashboard'
                },
                {
                    title: 'About',
                    icon: 'question_answer'
                }
            ],
            mini: false,
            right: null,

            toolbar: {
                //
                fixed: true,
                // sets if the toolbar contents is leaving space for drawer (false) or not (true)
                clippedLeft: false,

            },


            fontSize: 15


        }
    },

    watch: {

        fontSize(current, old) {





        }
    },
    mounted() {
        console.log(this.pathname)
    }

}
</script>

<style>
.custom-list {
    max-height: 100vh;
    overflow-y: scroll;
}
</style>
