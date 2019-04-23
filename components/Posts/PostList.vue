<template>
     <section class="post-list">
        <PostPreview 
        id="1"
        :is-admin="isAdmin"
        thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
        title="Which framework do you need ?"
        previewText="Angular 2+, React or Vue. Which to use in which case ?"/>
        <PostPreview 
        id="2"
        :is-admin="isAdmin"
        thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
        title="Consoles are dead ?"
        previewText="Stadia, cloud gaming. Is it the requiem of consoles ?"/>
        <PostPreview 
        id="3"
        :is-admin="isAdmin"
        thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
        title="GAFAM or BATX ?"
        previewText="Global technological warfare, where is Europe and where is France ?"/>
        <PostPreview 
        id="4"
        :is-admin="isAdmin"
        thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
        title="Smartphone or smartpeople ?"
        previewText="Do I really need my brain to think ?"/>
        <PostPreview 
        id="5"
        :is-admin="isAdmin"
        thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
        title="Artifcial intelligence vs idiocracy ?"
        previewText="who's gonna win ?"/>
           <PostPreview 
        id="6"
        :is-admin="isAdmin"
        thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
        title="Dassault systemes, the new google ?"
        previewText="who's gonna win ?"/>
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
    components: {
        PostPreview
    },
    props : {
        isAdmin: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

