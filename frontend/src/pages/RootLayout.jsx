import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      {/* {navigation.state === "loading" && <p>loading...</p>} */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

// membuat loading di dalam loader kita bisa menggunakan  useNavigation from react-router-dom

export default RootLayout;
