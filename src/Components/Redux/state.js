let dialogs = [
    {id: 1, name: 'Nick'},
    {id: 2, name: 'Lara'},
    {id: 3, name: 'Vikusik'},
    {id: 4, name: 'Tanyusha'},
    {id: 5, name: 'Sashka'}
  ];
  let messages = [
    {id: 1, message: 'Hi there'},
    {id: 2, message: 'Hui vam'},
    {id: 3, message: 'Yo banny'}
  ];
  
  let posts = [
    { id: 1, post: 'Hi, how are you?', likesCount: 10 },
    { id: 2, post: 'It is my first post!', likesCount: 12 }
   ];
    let state = {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nick'},
                {id: 2, name: 'Lara'},
                {id: 3, name: 'Vikusik'},
                {id: 4, name: 'Tanyusha'},
                {id: 5, name: 'Sashka'}
              ],
            messages: [
                {id: 1, message: 'Hi there'},
                {id: 2, message: 'Hui vam'},
                {id: 3, message: 'Yo banny'}
              ]
        },
        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', likesCount: 10 },
                { id: 2, post: 'It is my first post!', likesCount: 12 }
               ]
        }          
    }
   export let addPost = (postMessage)=>{
      let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0
      };
      state.profilePage.posts.push(newPost);
    }


    export default state;