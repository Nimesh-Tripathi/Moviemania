// import React from 'react';
// import { useSelector } from "react-redux";

// import "./style.scss";

// const Genres = ({ data }) => {
//     const { genres } = useSelector((state) => state.home);
//   return (
//    <div className="genres">
//     {data?.map((g) => {
//         if(!genres[g]?.name) return;
//         return (
//             <div key={g} className="genre">
//                 {genres[g]?.name}
//             </div>
//         )
//     })}
//    </div>
//   );
// };

// export default Genres
import React from 'react';
import {useSelector} from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
    const {genres} = useSelector((state) => state.home);

  return (
    <div className="genres">
        {data?.map((g) => {
            if (!genres?.[g]?.name) return;
            return (
                <div key={g} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>
  );
};

export default Genres;

// import React from 'react';
// import { useSelector } from 'react-redux';

// import "./style.scss";

// const Genres = ({ data }) => {
//   const { genres } = useSelector((state) => state.home);

//   return (
//     <div className="genres">
//       {data?.map((g) => {
//         const genreName = g?.name;
//         if (!genreName || !genres[genreName]) return null;

//         return (
//           <div key={genreName} className="genre">
//             {genres[genreName]}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Genres;
