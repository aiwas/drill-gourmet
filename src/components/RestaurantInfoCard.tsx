import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fas from "@fortawesome/free-solid-svg-icons";
import { RestaurantInfo } from "../utils/data";
import { RatingStar } from "./RatingStar";

interface RestaurantInfoCardProps {
  info: RestaurantInfo;
  onClickFilteringElement: (str: string) => void;
}

export default function RestaurantInfoCard(props: RestaurantInfoCardProps) {
  return (
    <div className="rounded-2xl border-4 border-gray-800 bg-gray-800 p-4 text-white">
      <h2 className="mb-4 text-5xl font-bold text-white">{props.info.name}</h2>
      <div className="my-2 flex flex-row flex-wrap gap-2">
        <div className="flex place-items-center">
          {/* {props.info.isVisited ? (
            <span
              onClick={(_e) => props.onClickFilteringElement("visited:true")}
              className="rounded bg-green-700 px-2 py-1 hover:cursor-pointer"
            >訪問済</span>
          ) : (
            <span
              onClick={(_e) => props.onClickFilteringElement("visited:false")}
              className="rounded bg-red-700 px-2 py-1 hover:cursor-pointer"
            >未訪問</span>
          )} */}
          <span
            onClick={() => props.onClickFilteringElement(`visited:${props.info.isVisited}`)}
            className={`rounded ${props.info.isVisited ? "bg-green-700" : "bg-red-700"} whitespace-nowrap px-2 py-1 hover:cursor-pointer`}
          >{props.info.isVisited ? "訪問済" : "未訪問"}</span>
        </div>
        <RatingStar rate={props.info.priority} isVisited={props.info.isVisited} />
      </div>
      <div className="my-2">
        <div className="inline-flex place-items-center gap-2 rounded bg-gray-600 px-2 py-1">
          <FontAwesomeIcon icon={fas.faMapLocation} className="w-4 min-w-[1rem]" />
          <span>
            <a
              href={props.info.link.toString()}
              target="_blank"
              rel="noreferrer"
              className="text-white underline"
            >{props.info.address}</a>（最寄り駅：{props.info.closestStation}）
          </span>
        </div>
      </div>
      <div className="my-2 flex gap-2">
        <span
          onClick={(_e) => props.onClickFilteringElement("type:" + props.info.type)}
          className="inline-flex flex-row place-items-center gap-0.5 rounded bg-gray-600 px-2 py-1 hover:cursor-pointer hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={fas.faHashtag} className="w-3 min-w-[.75rem]" />
          <span>{props.info.type}</span>
        </span>
        <span
          onClick={(_e) => props.onClickFilteringElement("category:" + props.info.category)}
          className="inline-flex flex-row place-items-center gap-0.5 rounded bg-gray-600 px-2 py-1 hover:cursor-pointer hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={fas.faHashtag} className="w-3 min-w-[.75rem]" />
          <span>{props.info.category}</span>
        </span>
      </div>
      <div>
        <div className="flex gap-2 rounded bg-gray-600 p-2">
          <span className="flex min-w-max place-items-center">
            <FontAwesomeIcon icon={fas.faComment} className=" w-4 min-w-[1rem]" />
          </span>
          <p>{props.info.comment}</p>
        </div>
      </div>
    </div>
  );
}
