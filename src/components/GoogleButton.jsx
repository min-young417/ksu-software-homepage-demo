import { GoogleAuthProvider, signInWithPopup,
  // signInWithRedirect,
} from "firebase/auth";
import styled from "styled-components";
import { authService } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  background-color: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: black;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GoogleButton() {
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // 1) 팝업 방식
      await signInWithPopup(authService, provider);
      // 2) 리다이렉트 방식
      // await signInWithRedirect(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="assets/icons/google-logo.svg" />
      Continue with Google
    </Button>
  );
}