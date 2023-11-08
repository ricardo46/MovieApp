// import { useEffect, useState } from "react";
// import { MyTimer } from "./Timer";
// import { useError } from "../../context/ErrorContext";
// import { useNavigate } from "react-router-dom";
// import { usePage } from "../../context/PageContext";
// import { ErrorMessage } from "../../components/StyledComponents";

// const ErrorPage = () => {
//   const navigate = useNavigate();
//   const [count, setCount] = useState(20);

//   const { subPageData, setSubPageData } = usePage();
//   const { error, setError } = useError();

//   useEffect(() => {
//     setSubPageData(() => ({ name: "Error Page" }));
//     if (error.message == undefined) {
//       navigate("/");
//     }
//   }, []);

//   useEffect(() => {
//     if (count == 0) {
//       navigate(0);
//     }
//   }, [count]);

//   const updateCount = (newCount) => {
//     setCount(newCount);
//   };

//   const time = new Date();
//   time.setSeconds(time.getSeconds() + count);
//   return (
//     <>
//       <ErrorMessage>{error.message}</ErrorMessage>
//       <ErrorMessage>{`Redirecting to Home Page in ${count} seconds.`}</ErrorMessage>
//       <MyTimer expiryTimestamp={time} updateCount={updateCount} />
//     </>
//   );
// };

// export default ErrorPage;
