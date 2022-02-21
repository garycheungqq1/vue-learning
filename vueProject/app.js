/*
 * @Author: your name
 * @Date: 2022-02-21 10:59:38
 * @LastEditTime: 2022-02-21 13:47:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vueProject/app.js
 */
// console.log("hello vue")
const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "Name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.jpeg",
          isFav: true
        },
        {
          title: "The way of kings",
          author: "brandon sanderson",
          img: "assets/2.png",
          isFav: false

        },
        {
          title: "The final empire",
          author: "brandon sanderson",
          img: "assets/3.png",
          isFav: true
        },
      ],
      age: 45,
      x: 0,
      y: 0,
      url: "http://www.google.com",
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      // console.log(x,y)
    },
    clickToToggle(book){
        book.isFav  = !book.isFav
    },
    
},computed:{
    filterdBooks(){
        return this.books.filter((book)=> book.isFav)    
    }
}
});

app.mount("#app");
