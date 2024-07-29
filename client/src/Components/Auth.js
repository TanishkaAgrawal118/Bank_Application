import React, { useState, useRef } from "react";
import firebase from "./firebase";

const Auth = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [verificationId, setverificationId] = useState("");
  const recaptchaRef = useRef(null);

  const handleSendOtp = () => {
    if (recaptchaRef.current) {
        recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>'
     }
    const verifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, verifier)
      .then((cofirmationResult) => {
        setverificationId(cofirmationResult.verificationId);
        //    logic after sending or verifying otp
      })

      .catch((error) => {
        console.error("Error Sending otp:", error);
      });
  };

  return (
    <div>
      <h1> Phone OTP Authentication </h1>
      <div ref={recaptchaRef}></div>
      <input
        type="tel"
        placeholder="+916392472195"
        value={phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
    </div>
  );
};

export default Auth;


// import React, { useState, useEffect } from "react";
// import { auth } from "./firebase";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// const Auth = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [confirmationResult, setConfirmationResult] = useState(null);

//   useEffect(() => {
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         'recaptcha-container',
//         {
//           size: 'normal',
//           callback: (response) => {
//             // reCAPTCHA solved, allow signInWithPhoneNumber.
//           },
//           'expired-callback': () => {
//             // Response expired. Ask user to solve reCAPTCHA again.
//           }
//         },
//         auth
//       );
//     }
//   }, []);

//   const handleSendOtp = () => {
//     const appVerifier = window.recaptchaVerifier;
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         setConfirmationResult(confirmationResult);
//       })
//       .catch((error) => {
//         // Error; SMS not sent
//         console.error("Error during signInWithPhoneNumber:", error);
//       });
//   };

//   const onSignInSubmit = () => {
// const appVerifier = window.recaptchaVerifier;
//     signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });
//   };

//   return (
//     <div>
//       <h1>Phone OTP Authentication</h1>
//       <div id="recaptcha-container"></div>
//       <input
//         type="tel"
//         placeholder="+916392472195"
//         value={phoneNumber}
//         onChange={(e) => setPhoneNumber(e.target.value)}
//       />
//       <button onClick={handleSendOtp}>Send OTP</button>

//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       <button onClick={onSignInSubmit}>Verify OTP</button>
//     </div>
//   );
// };

// export default Auth;




//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [verificationId, setVerificationId] = useState("");
//   const recaptchaRef = useRef(null);

//   useEffect(() => {
//     if (recaptchaRef.current) {
//       recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>';
      
//       const verifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
//         size: "invisible",
//         callback: (response) => {
//           // reCAPTCHA solved - allow user to proceed
//         },
//         'expired-callback': () => {
//           // Response expired. Ask user to solve reCAPTCHA again.
//           verifier.render().then((widgetId) => {
//             window.recaptchaWidgetId = widgetId;
//           });
//         }
//       });

//       verifier.render().then((widgetId) => {
//         window.recaptchaVerifier = verifier;
//         window.recaptchaWidgetId = widgetId;
//       });
//     }
//   }, []);

//   const handleSendOtp = () => {
//     const verifier = window.recaptchaVerifier;
    
//     verifier.verify().then(() => {
//       firebase
//         .auth()
//         .signInWithPhoneNumber(phoneNumber, verifier)
//         .then((confirmationResult) => {
//           setVerificationId(confirmationResult.verificationId);
//           // Logic after sending or verifying OTP
//         })
//         .catch((error) => {
//           console.error("Error Sending OTP:", error);
//         });
//     }).catch((error) => {
//       console.error("Error verifying reCAPTCHA:", error);
//     });
//   };
