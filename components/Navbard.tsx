import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbard = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] flex justify-between mx-auto items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt={"Card hub logo"}
            width={140}
            height={20}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title={"Sign In"}
          containeStyles={
            "text-primary-blue rounded-full bg-white min-w-[130px]"
          }
          btnType={"button"}
        />
      </nav>
    </header>
  );
};

export default Navbard;
