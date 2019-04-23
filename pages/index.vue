<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news !</h1>
    </section>
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  asyncData(context, callback) {
    console.log(context)
      setTimeout( () => { 
        callback(null, {
        loadedPosts: [
        { id: '1', 
        title: 'Are consoles dead ?', 
        previewText: 'Stadia, cloud gaming. Is this the consoles requiem ?',
        thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
        },
        { id: '2', 
        title: 'Smartphone or smartpeople, which to choose ?', 
        previewText: 'Do I really need my brain to think ?',
        thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
        },
        { id: '3', 
        title: 'GAFAM or BATX ?', 
        previewText: 'Global technological warfare, where is Europe and where is France ?',
        thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
        },
        { id: '4', 
        title: 'Artificial intelligence vs idiocracy, the Big Game ?', 
        previewText: 'whos gonna win, stupidity or greater stupidity ?',
        thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
        },
        { id: '5', 
        title: 'Dassault systemes, the new google or the new Apple ?', 
        previewText: 'which company gonna take it all ?',
        thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
        },
        { id: '6', 
        title: 'What a beautifull title we have, isnt it lovely !?', 
        previewText: 'And an absolutly pretty subtitle the we have !',
        thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
        }
      ]  
      });     
   } , 1500);
  },
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
  created() {
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}
.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}
@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>


