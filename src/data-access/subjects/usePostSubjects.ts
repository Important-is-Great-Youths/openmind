import { useState } from "react";
import { axiosInstance } from "../../util/axiosInstance";

export const usePostSubjects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);

  const postSubjects = async (name) => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("subjects/", {
        "name": name
      });
      setPostData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, postData, postSubjects };
};

// 이하 사용 예시
// const PostSubjects = () => {
//   const [name, setName] = useState("");
//   const { loading, error, postData, postSubjects } = usePostSubjects();

//   const handleSubmit = () => {
//     postSubjects(name);
//   };

//   return (
//     <div>
//       <label>Name: </label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit} disabled={loading}>
//         Submit
//       </button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {postData && <p>Data Posted: {JSON.stringify(postData)}</p>}
//     </div>
//   );
// };
