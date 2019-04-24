import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              { 
                id: '1', 
                title: 'Are consoles dead ?', 
                previewText: 'Stadia, cloud gaming. Is this the consoles requiem ?',
                thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              },
              { 
                id: '2', 
                title: 'Smartphone or smartpeople, which to choose ?', 
                previewText: 'Do I really need my brain to think ?',
                thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              },
              { 
              id: '3', 
              title: 'GAFAM or BATX ?', 
              previewText: 'Global technological warfare, where is Europe and where is France ?',
              thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              },
              { 
              id: '4', 
              title: 'Artificial intelligence vs idiocracy, the Big Game ?', 
              previewText: 'whos gonna win, stupidity or greater stupidity ?',
              thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              },
              { 
              id: '5', 
              title: 'Dassault systemes, the new google or the new Apple ?', 
              previewText: 'which company gonna take it all ?',
              thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              },
              { 
              id: '6', 
              title: 'What a beautifull title we have, isnt it lovely !?', 
              previewText: 'And an absolutly pretty subtitle that we have !',
              thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
