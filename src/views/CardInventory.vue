<template>
   <div>
      <h2>Card Inventory</h2>
     <div class="card-area">
     <div v-for="(card,index) in cardList" :key="index">
     <div class="card-item">
       <div > <i v-if="card.fontawesome" :class="card.fontawesome"></i>{{card.name}}</div>

       <div v-if="card.imageurl"><img :src="card.imageurl" width="90%" height="90%"/></div>

       <div v-bind:style="{ color: card.defaultColor}" > {{card.description}}</div>
         <span>{{ card.createdDate | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
       <button @click="deletecard(card.id)">Delete</button>
     </div>
     </div>
     </div>
  </div>
</template>

<script>


    import firebase from '../Firebase'

    export default {
        name: 'cardinventory',

        data() {
            return {
                cardList: [],
                ref:firebase.firestore().collection ('cards'),
            }
        },
        created(){
this.loaddata()
            /*
            this.ref.onSnapshot((querySnapshot) => {

                querySnapshot.forEach((doc) => {

                    var card=doc.data();
                    card.id=doc.id;
                    this.cardList.push(card)
                });
            });
            */
                         },
        methods: {

            loaddata(){
                this.cardList=[];
                firebase.firestore().collection ('cards').get().then(docs => {
                    docs.forEach(doc => {
                        var card=doc.data();
                        card.id=doc.id;
                       // console.log(card)
                        this.cardList.push(card)
                    })
                }).catch(err => {
                    console.log(err)
                })
            },
            deletecard (id) {
                firebase.firestore().collection('cards').doc(id).delete().then(() => {
                    this.loaddata();
                }).catch((error) => {
                    alert("Error removing card: ", error);
                });
            }

        }
    }
</script>

