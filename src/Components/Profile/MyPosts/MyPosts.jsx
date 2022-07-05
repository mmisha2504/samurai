import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {Field, reduxForm } from "redux-form";
import {maxLengthCreator, required} from '../../../Utils/validators/validators';
import { Textarea } from '../../common/Forms Controls/FormsControls';

const maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit }>
          <div>
          <Field placeholder={"Enter your text"} 
          name={"newPostText"} 
          component={Textarea}
          validate={[required, maxLength10] }
          />
          </div>
          <button >Add post</button>
        </form>
  )
};




const  MyPosts = (props)=> {

   let postElements = props.posts.map (
     p => <Post message={p.post} id={p.id} likesCount={p.likesCount}/>
   );
   let onAddPost = (values)=>{
    props.addPost(values.newPostText);
      };
      

    return (
      <div>
          <h3>MyPosts</h3> 
        <AddPostFormRedux onSubmit={onAddPost}/>
        <div className="s.posts">
          {postElements}
        </div>
      </div>
    )
}

const AddPostFormRedux = reduxForm ({form: "profileAddPostForm"})(AddPostForm) ;

export default MyPosts;