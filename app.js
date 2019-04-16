var app = new Vue({
    el: '#app',
    data: {
        currentCat: {},
        cats: [{
                id: 1,
                name: 'Tarçın',
                clickCount: 0,
                img: 'http://66.media.tumblr.com/tumblr_lh0n94UllA1qeuja2.jpg'
            },
            {
                id: 2,
                name: 'Duman',
                clickCount: 0,
                img: 'https://i.pinimg.com/originals/65/d2/3a/65d23a17432286e1eb14d35d33c1e026.jpg'
            },
            {
                id: 3,
                name: 'Bulut',
                clickCount: 0,
                img: 'https://i.ytimg.com/vi/-HaBaebJvcE/hqdefault.jpg'
            },
            {
                id: 4,
                name: 'Miskin',
                clickCount: 0,
                img: 'http://alisoftware.github.io/assets/lazy-cat.jpg'
            },
            {
                id: 5,
                name: 'Dinamo',
                clickCount: 0,
                img: 'https://primcousa.com/wp-content/uploads/2017/10/energetic-singapura-cat-kohepets.com_.jpg'
            }
        ]
    },
    methods: {
        initCurrentCat: function() {
            this.currentCat = this.cats[0];
        },
        changeCurrentCat: function(cat) {
            this.currentCat = cat;
        },
        increaseCount: function() {
            this.currentCat.clickCount++;
        },
        isCurrentCat: function(cat) {
            if (cat === this.currentCat) return true;
        }
    }
});

app.initCurrentCat();