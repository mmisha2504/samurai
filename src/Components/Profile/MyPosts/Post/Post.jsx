import React from 'react';
import s from './Post.module.css'


const Post = (props)=> {

    return (  
          <div className='{s.item}'>
            <img src="https://s3.eu-central-1.wasabisys.com/topiztop/posts/original/televidenie-ob-etom-ne-skazhet-avatary-eto-uzhe-realnost-kontrol-nad-chelovechestvom-post-img-1591651950877.jpg?v=2828" alt="" />
            {props.message}
            <div>
            <div>Like {props.likesCount}</div>
            <div>Dislike</div>
            </div>
          </div>
             )
}

export default Post;