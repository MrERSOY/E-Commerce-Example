import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white z-shadow shadow">
      <Link href={"/"}>
        <Image
          src="https://secure.img1-cg.wfcdn.com/im/59113267/compr-r85/2190/219090901/flea-market-banner-sign.jpg"
          width={70}
          height={70}
          alt="Logo"
        />
      </Link>
      <div className="flex items-center space-x-2.5 text-sm">
        <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
          Giriş Yap
        </button>
        <button className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent">
          Kayıt Ol
        </button>
      </div>
    </header>
  );
}

export default Header;
