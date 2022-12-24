import Head from "next/head";
import Image from "next/image";
import { InferGetStaticPropsType, NextPage } from "next";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { getRestaurantList, RestaurantInfo } from "../utils/data";

export const getStaticProps = async () => {
  const list = await getRestaurantList();

  console.debug("取得件数: " + list.length);

  return { props: { list } };
};

export const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  // console.debug("取得件数: " + props.list.length);
  console.debug(props);
  return (
    <>
      <header className="sticky top-0 flex justify-between bg-gray-900 px-8 py-4 shadow">
        <div className="flex place-items-center">
          <h1 className="text-2xl font-bold text-white">大卒ドリルのグルメ情報館</h1>
        </div>
        <div className="flex place-items-center">
          <a href="https://forms.gle/Dq7UeXkkAo3AS574A" target="_blank" rel="noreferrer" className="rounded bg-blue-800 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-900">投稿する</a>
        </div>
      </header>
      {/* <div className="flex min-h-screen flex-wrap gap-8 p-8"> */}
      <div className="grid gap-8 p-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))" }}>
        {props.list?.map((info, i) => (
          <RestaurantInfoCard info={info} key={i} />
        ))}
      </div>
    </>
  );
};

export default Index;
