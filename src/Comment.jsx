// const Comment = ({ comment }) => {
//   const { name, email, body, id } = comment;
//   return (
//     <div className="Style">
//       <p>Name:{name}</p>
//       <p>Email:{email}</p>
//       <p>Body:{body}</p>
//       <p>Id:{id}</p>
//     </div>
//   );
// };

// export default Comment;

const Comment = ({ comment }) => {
  // Fallback to default values if `comment` is not defined or properties are missing.
  const {
    name = "Unknown",
    email = "No email provided",
    body = "No content available",
    id = "N/A",
  } = comment || {};

  return (
    <div className="Style">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
      <p>Id: {id}</p>
    </div>
  );
};

export default Comment;
