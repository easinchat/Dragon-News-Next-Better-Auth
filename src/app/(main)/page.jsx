import { redirect } from "next/navigation";

const default_category_id = "0";

const Home = async () => {
  redirect(`/category/${default_category_id}`);
};

export default Home;
