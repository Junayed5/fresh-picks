const { auth } = require("@/firebase/firebase.config");
const { GoogleAuthProvider, signInWithPopup } = require("firebase/auth");
const { default: toast } = require("react-hot-toast");

const provider = new GoogleAuthProvider();

export default async function signInWithGoogle() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      if (result?.user) {
        toast.success("Login Successful :)");
      }
    })
    .catch((error) => toast.error(error?.message));
}
