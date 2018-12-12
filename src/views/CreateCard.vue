    <template>
        <div   class="main" >
            <div class="createcard-area">
                <h2>Card Creator</h2>
                <div class="form-horizontal">
                    <div class="row">
                        <div class="form-group" v-if="errormessage">
                            <label class="col-sm-4 control-label"></label>
                            <div class="col-sm-4 alert alert-danger" role="alert">
                            {{errormessage}}

                            </div>


                        </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Card ID</label>
                                <div class="col-sm-4">
                                    <input type="text"  class="form-control" v-model="cardid">
                                </div>

                        </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Name</label>
                                <div class="col-sm-4">
                                    <input type="text"  class="form-control" v-model="name">
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-sm-4 control-label">Font awesome</label>
                                <div class="col-sm-4">
                                    <input type="text"  class="form-control" v-model="fontawesome">
                                </div>
                            </div>


                             <div class="form-group">
                                <label class="col-sm-4 control-label">Image url</label>
                                <div class="col-sm-4">
                                    <input type="text"  class="form-control" v-model="imageurl">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">Decriptive Text</label>
                                <div class="col-sm-4">
                                    <textarea type="text"  class="form-control" v-model="description"></textarea>
                                </div>
                            </div>

                        <div class="form-group">
                            <label class="col-sm-4 control-label">Font color</label>
                            <div class="col-sm-2">
                                <input type="color" v-model="defaultColor" >
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-4 control-label"></label>
                            <div class="col-sm-4">
                                <button @click="save()">Save</button>
                            </div>
                        </div>

                    </div>
                </div>





            </div>
            <div class="cardpreview-area">
                <h2>Card Preview</h2>
                <div class="card">
                    <div > <i v-if="fontawesome" :class="fontawesome"></i>{{name}}</div>

                   <div v-if="imageurl"><img :src="imageurl" width="90%" height="90%"/></div>

                    <div v-bind:style="{ color: defaultColor}" > {{description}}</div>
                </div>
            </div>

        </div>
    </template>

    <script>

        import firebase from '../Firebase'

        export default {
            name: 'createcard',

            data() {
                return {
                    cardid: "",
                    fontawesome:"",
                    description:"",
                    imageurl:"",
                    name:"",
                    errormessage:"",
                    defaultColor: '#FF0000',
                    ref: firebase.firestore().collection('cards'),
                }
            },
            methods: {

                save:function(){

                    this.errormessage="";
                    if(!this.cardid){
                        this.errormessage="Please enter the card id"
                        return;
                    }
                    if(!this.name){
                        this.errormessage="Please enter the name"
                        return;
                    }
                    if(!this.fontawesome){
                        this.errormessage="Please enter the font awesome class"
                        return;
                    }
                    if(!this.imageurl){
                        this.errormessage="Please enter the Image Url"
                        return;
                    }
                    this.errormessage="";

                     var card={
                         cardid:this.cardid,
                         fontawesome:this.fontawesome,
                         description:this.description,
                         imageurl:this.imageurl,
                         name:this.name,
                         defaultColor:this.defaultColor,
                         createdDate: this.$moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")
                     };


                    this.ref.add(card).then(response => {
                        console.log(response)
                        this.cardid="";
                        this.fontawesome=""
                        this.description=""
                        this.imageurl=""
                        this.name=""
                        this.errormessage=""
                        this.defaultColor= '#FF0000'
                    })
                        .catch((error) => {
                            this.errormessage="Error adding document: "+ error;
                        });


                }
            }
        }
    </script>

