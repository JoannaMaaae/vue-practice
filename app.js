var data ={
    name: 'Joanna Mae Odoño'
}

Vue.component('greeting', {
    template: '<p> Hello there! My name is {{ name }}. <button v-on:click="changeName" v-model="name"> Change Name </button> </p>',
    data: function(){
        return data;
    },
    methods: {
        changeName: function(){
            this.name = 'Joanna Mae Sestoso';
        }
    }
});

/* 1st instance */
new Vue ({
    el: '#joanna',
    data: {
        name: 'Joanna',
        age: 19,
        name1: '',
        age1: '',
        job: 'Manager',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        website: 'http://www.spotty.com',
        websiteTag: '<a href="http://www.milo.com"> Milo </a>',
        available: true,
        nearby: false,
        error: false,
        success: false,
        greetings: '',
        characters: ['Precious','Charlon','Micha','Joanna'],
        asd:[
            {name: 'Ced', age:'20'},
            {name: 'Joanna', age:'19'},
            {name: 'Marco', age:'20'}
        ],
        health: 100,
        ended: false
    },
    methods: {
        greet: function(time){
            return 'Good' + time + ' ' + this.name;
        }, 
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age-= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('Why did  you clicked me?');
        },
        logName: function(){
            console.log('You entered your name.');
        },
        logAge: function(){
            console.log('You entered your age.');
        },
        /* addToA: function(){
            console.log('Age is added in A.');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('Age is added in B.');
            return this.b + this.age;    
        }*/
        punch: function(){
            this.health -= 10;
            if (this.health <=0){
                this.ended=true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended=false;
        }
    },
    computed: {
        addToA: function(){
            console.log('Age is added in A.');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('Age is added in B.');
            return this.b + this.age;    
        },
        compClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});
/* 2nd instance */
var one = new Vue({
    el: "#joanna1",
    data: {
        title: 'Vue App One'
    },
    methods: {

    },
    computed: {
        greet: function(){
            return 'Greetings from Vue app 1! :)';
        }
    }
});
/* 3rd instance */
var two = new Vue({
    el: "#joanna2",
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function(){
            one.title ="Title changed";
        }

    },
    computed: {
        greet: function(){
            return 'Greetings from vue app 2! :)';
        }
    }
});

/* this one is two.title = "Changed from outside"; */