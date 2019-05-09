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
        greeting: '',
        characters: ['Precious','TCharlon','Micha','Joanna'],
        asd:[
            {name: 'Ced', age:'20'},
            {name: 'Joanna', age:'19'},
            {name: 'Marco', age:'20'}
        ]
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
        }
        /* addToA: function(){
            console.log('Age is added in A.');
            return this.a + this.age;
        },
        addToB: function(){
            console.log('Age is added in B.');
            return this.b + this.age;    
        }*/
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