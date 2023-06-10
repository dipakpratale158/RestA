exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post!' }]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};




///first go throgh postman
//put link http://localhost:8080/feed/post
// select post request
//select body
//select json
//click send 

//all data show  this format 
// res.status(201).json({
//   message: 'Post created successfully!',
//   post: { id: new Date().toISOString(), title: title, content: content }
// });
// };



///for eg

// {
//   "title":"my second post!",
//   "content":"this is the content of my second post"
// }

///ans


// {
//   "message": "Post created successfully!",
//   "post": {
//       "id": "2023-06-10T21:29:59.637Z",
//       "title": "my second post!",
//       "content": "this is the content of my second post"
//   }
// }