import { range } from "../utils/util";

interface RatingStarProps {
    rate: number;
    isVisited: boolean;
}

export function RatingStar(props: RatingStarProps) {
    if (props.rate < 1 || 10 < props.rate) {
        return <div>評価不明</div>;
    }
    return (
        // 訪問済: ★★★★★★★★☆☆
        // 未訪問: ☆☆☆☆☆☆☆☆
        <div className="flex flex-row text-xl leading-none">
            {props.isVisited ? (
                [...range(1, 10)].map(i => (
                    <span key={i} className={`flex place-items-center text-2xl ${(i <= props.rate) ? "text-yellow-300" : "text-gray-200"}`}>★</span>
                ))
            ) : (
                [...range(1, props.rate)].map(i => (
                    <span key={i} className="flex place-items-center text-2xl text-gray-200">☆</span>
                ))
            )}

        </div>
    );
}

