<template>
    <div class="posts-page">
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
        setTimeout(() => {
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
                    title: 'Artificial intelligence vs idiocracy ?', 
                    previewText: 'whos gonna win, stupidity or greater stupidity ?',
                    thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
                    },
                    { id: '5', 
                    title: 'Dassault systemes, the new google ?', 
                    previewText: 'whos gonna win ?',
                    thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
                    },
                    { id: '6', 
                    title: 'What a beautifull title we have, isnt it lovely !?', 
                    previewText: 'And an absolutly pretty subtitle the we have !',
                    thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
                    }
      ]  
      });  
        }, 1000);
    }
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
