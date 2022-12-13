import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCardImage,
  MDBTextArea,
} from "mdb-react-ui-kit";
// import { useAuthUser } from "react-auth-kit";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
// import { fetchUserData } from "../../Reducers/ProfileReducer";

const qs = require("qs");

export default function EditExpectation({
  basicModal,
  setBasicModal,
  toggleShow,
  postId,
}) {
  //   const auth = useAuthUser();
  //   const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [expectationData, setExpectationData] = useState({});
  //   const userPosts = useSelector(
  //     (state) =>
  //       state.userData.data.data.User_posts.filter((ele) => {
  //         return ele.postId === postId;
  //       })[0]
  //   );
  //   const [postContent, setPostContent] = useState({
  //     content: userPosts.content,
  //   });
  //   const profileConfigs = {
  //     method: "get",
  //     url: "http://127.0.0.1:8000/api/expectation",
  //     headers: {
  //       Accept: "application/vnd.api+json",
  //       "Content-Type": "application/vnd.api+json",
  //     //   Authorization: `Bearer ${auth().token}`,
  //     },
  //   };
  const config = {
    method: "put",
    url: `http://127.0.0.1:8000/api/expectation/${expectationId}`,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/x-www-form-urlencoded",
      //   Authorization: `Bearer ${auth().token}`,
    },
    data: qs.stringify({
      content: expectationData.content,
    }),
  };
  useEffect(() => {
    dispatch(fetchUserData(profileConfigs));
  }, [update]);
  const handleEdit = () => {
    if (postContent.content == "") return null;
    axios(config)
      .then(function (res) {
        console.log(res.data);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "white",
          customClass: {
            popup: "colored-toast",
          },
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
        setUpdate(!update);
        toggleShow();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return;
  //    (
  //     <>
  //       <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
  //         <MDBModalDialog size="lg">
  //           <MDBModalContent>
  //             <MDBModalHeader>
  //               <MDBModalTitle>Edit expectation </MDBModalTitle>
  //               <MDBBtn
  //                 className="btn-close"
  //                 color="none"
  //                 onClick={toggleShow}
  //               ></MDBBtn>
  //             </MDBModalHeader>
  //             <MDBModalBody>
  //               <div className="d-flex flex-start w-100">
  //                 <MDBCardImage
  //                   className="rounded-circle shadow-1-strong me-3"
  //                   src={auth().user.profileImage}
  //                   alt="avatar"
  //                   width="45"
  //                   height="45"
  //                 />
  //                 <MDBTextArea
  //                   label="Write your Post"
  //                   id="textAreaExample"
  //                   rows={6}
  //                   style={{ backgroundColor: "#fff" }}
  //                   wrapperClass="w-100"
  //                   value={postContent.content}
  //                   onChange={(e) => {
  //                     setPostContent((pervs) => ({
  //                       ...pervs,
  //                       content: e.target.value,
  //                     }));
  //                   }}
  //                 />
  //               </div>
  //             </MDBModalBody>

  //             <MDBModalFooter>
  //               <MDBBtn
  //                 color="danger"
  //                 onClick={() => {
  //                   setPostContent((pervs) => ({
  //                     ...pervs,
  //                     content: userPosts.content,
  //                   }));
  //                   toggleShow();
  //                 }}
  //               >
  //                 Close
  //               </MDBBtn>
  //               <MDBBtn onClick={handleEdit}>
  //                 {" "}
  //                 <i class="fas fa-share-square"></i>Save changes
  //               </MDBBtn>
  //             </MDBModalFooter>
  //           </MDBModalContent>
  //         </MDBModalDialog>
  //       </MDBModal>
  //     </>
  //   );
}
