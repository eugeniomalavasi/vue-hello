const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Ciao come va?',
            imgName: "./img/flw.jpg",
            altText: "lotr image",
            btn: ""
        }
    },
    methods: {
        off: function () {
            if(this.btn === "") {
                this.imgName = "";
                this.altText = "";
                this.btn = "off";
            } else {
                this.imgName = "./img/flw.jpg";
                this.altText = "lotr image";
                this.btn = "";
            }
        }
    }
}).mount('#app')