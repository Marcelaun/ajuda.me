import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { LoginComponent } from "../../components/LoginComponent/LoginComponent";

export function Login() {
  return (
    <>
      <Navbar />
      <div className="login-page-main-container">
      <LoginComponent/>
      </div>

      <Footer />
    </>
  );
}
