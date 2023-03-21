import { InferGetStaticPropsType, NextPage } from "next";
import RestaurantInfoCard from "../components/RestaurantInfoCard";
import { getRestaurantList } from "../utils/data";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const getStaticProps = async () => {
  const list = await getRestaurantList();

  console.debug("取得件数: " + list.length);

  return { props: { list } };
};

export const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  // console.debug("取得件数: " + props.list.length);
  // console.debug(props);

  const [keyword, setKeyword] = useState<string>("");

  // const [list, setList] = useState<RestaurantInfo[]>(props.list);
  // TODO: 高度な検索を実装する
  let filterdList = props.list;
  const words = keyword.split(/\s+/);
  words.forEach(w => {
    if (w.startsWith("visited:true")) {
      filterdList = filterdList.filter(info => info.isVisited);
      return;
    }
    if (w.startsWith("visited:false")) {
      filterdList = filterdList.filter(info => !info.isVisited);
      return;
    }
    if (w.startsWith("address:")) {
      const addressPart = w.replace("address:", "");
      filterdList = filterdList.filter(info => info.address.includes(addressPart));
      return;
    }
    if (w.startsWith("type:")) {
      filterdList = filterdList.filter(info => w.replace("type:", "") === info.type);
      return;
    }
    if (w.startsWith("category:")) {
      filterdList = filterdList.filter(info => w.replace("category:", "") === info.category);
      return;
    }
    filterdList = filterdList.filter(info => info.name.includes(w.trim()));
  });

  return (
    <>
      <header className="sticky top-0 flex flex-wrap place-items-center gap-2 bg-gray-900 px-8 py-4 shadow">
        <h1 className="text-2xl font-bold text-white">大卒ドリルのグルメ情報館</h1>
        {/* <div className="flex place-items-center">
        </div> */}
        <input
          type="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="検索キーワードを入力"
          className="max-w-[14rem] rounded bg-gray-800 px-2 py-1 text-white outline-none"
        />
        <a
          href="https://forms.gle/Dq7UeXkkAo3AS574A"
          target="_blank"
          rel="noreferrer"
          className="ml-auto rounded bg-blue-800 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-900"
        >投稿する</a>

      </header>
      <ResponsiveMasonry columnsCountBreakPoints={{ 600: 1, 900: 2, 1350: 3, 1800: 4 }} className="p-6">
        <Masonry gutter="1rem" className="mx-auto max-w-[1920px]">
          {filterdList.map((info, i) => (
            <RestaurantInfoCard info={info} onClickFilteringElement={(str) => { setKeyword(str); }} key={i} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default Index;
