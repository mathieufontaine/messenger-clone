import Image from "next/image";
import LogoutButton from "./components/buttons/LogoutButton";
import SignInButton from "./components/buttons/SignInButton";

function Header() {
  const session = true;

  return (
    <header className="w-full sticky top-0 z-50 bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/800px-Facebook_Messenger_logo_2020.svg.png"
            alt="Picture of the author"
            width={60}
            height={60}
          />
          <h1 className="text-2xl font-bold p-2 ">Messenger</h1>
        </div>
        {session ? (
          <div className="flex items-center justify-between">
            <div className="mr-4">
              <p>Logged in as: </p>
              <p className="font-bold">Mathieu</p>
            </div>
            <LogoutButton />
          </div>
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
}

export default Header;
