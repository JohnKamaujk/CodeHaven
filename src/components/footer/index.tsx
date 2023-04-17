import Logo from "@/assets/Logo.png";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© CodeHaven All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <div className="my-5 flex items-center">
            <AiFillFacebook className="mr-2" size={26} />
            <p>Code_Haven1010s</p>
          </div>
          <div className="my-5 flex items-center">
            <AiFillTwitterCircle className="mr-2" size={26} />
            <p>CodingKnights</p>
          </div>
          <div className="flex items-center">
            <AiFillInstagram className="mr-2" size={26} />
            <p>CODE_HAVEN_901</p>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Nairobi, Moi Avenue Lane, 658-3245</p>
          <p>(+254)745-419231</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
