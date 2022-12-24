import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fas from "@fortawesome/free-solid-svg-icons";
import { RestaurantInfo } from "../utils/data";
import { RatingStar } from "./RatingStar";

interface RestaurantInfoCardProps {
  info: RestaurantInfo;
}

export default function RestaurantInfoCard(props: RestaurantInfoCardProps) {
  return (
    <div className="h-[fit-content] flex-1 rounded-2xl border-4 border-gray-800 bg-gray-800 p-8 text-white">
      <h2 className="mb-4 text-5xl font-bold text-white">{props.info.name}</h2>
      <div className="my-2 flex flex-row gap-2">
        <div className="flex place-items-center">
          {props.info.isVisited ? (
            <span className="rounded bg-green-700 px-2 py-1">訪問済</span>
          ) : (
            <span className="rounded bg-red-700 px-2 py-1">未訪問</span>
          )}
        </div>
        <RatingStar rate={props.info.priority} isVisited={props.info.isVisited} />
      </div>
      <div className="my-2">
        <div className="inline-flex place-items-center gap-2 rounded bg-gray-600 px-2 py-1">
          <FontAwesomeIcon icon={fas.faMapLocation} className="w-4" />
          <span>
            <a href={props.info.link.toString()} target="_blank" rel="noreferrer" className="text-white underline">{props.info.address}</a>（最寄り駅：{props.info.closestStation}）
          </span>
        </div>
      </div>
      <div className="my-2 flex gap-2">
        <span className="inline-flex flex-row place-items-center gap-0.5 rounded bg-gray-600 px-2 py-1">
          <FontAwesomeIcon icon={fas.faHashtag} className="w-3" />
          <span>{props.info.type}</span>
        </span>
        <span className="inline-flex flex-row place-items-center gap-0.5 rounded bg-gray-600 px-2 py-1">
          <FontAwesomeIcon icon={fas.faHashtag} className="w-3" />
          <span>{props.info.category}</span>
        </span>
      </div>
      <div>
        <div className="flex gap-2 rounded bg-gray-600 p-2">
          <span className="flex min-w-max place-items-center">
            <FontAwesomeIcon icon={fas.faComment} className=" w-4" />
          </span>
          <p>{props.info.comment}</p>
        </div>
      </div>
    </div>
  );
}
