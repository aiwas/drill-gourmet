import { GoogleSpreadsheet } from "google-spreadsheet";

export type FoodCategory =
  "和食" |
  "中華" |
  "イタリアン" |
  "フレンチ" |
  "洋食" |
  "そば・うどん" |
  "ラーメン" |
  "エスニック" |
  "スペイン" |
  "居酒屋" |
  "焼肉" |
  "寿司" |
  "その他";

export interface RestaurantInfo {
  name: string;
  priority: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  link: URL | string;
  category: FoodCategory;
  type: "ランチ" | "ディナー";
  address: string;
  closestStation: string;
  isVisited: boolean;
  comment: string;
}

const DrillGourmetAnswerKey = {
  Timestamp: "タイムスタンプ",
  Name: "店名",
  Priority: "優先度",
  Link: "リンク",
  Category: "カテゴリ",
  LunchOrDinner: "ランチ：ディナー？",
  Address: "住所",
  ClosestStation: "最寄り駅",
  IsVisited: "既訪ですか？",
  Comment: "補足情報",
} as const;

// type DrillGourmetAnswerKeyList = typeof DrillGourmetAnswerKey[keyof typeof DrillGourmetAnswerKey];

async function init() {
  const s = new GoogleSpreadsheet(process.env.SHEET_ID);
  await s.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SA_CLIENT_EMAIL!,
    private_key: process.env.GOOGLE_SA_PRIVATE_KEY!.replace(new RegExp("\\\\n", "\g"), "\n"),
  });

  await s.loadInfo();

  return s;
}

export async function getRestaurantList() {
  const s = await init();

  // console.debug(s.title);

  return (await s.sheetsByIndex[0].getRows()).map(row => {
    const info = {
      name: row[DrillGourmetAnswerKey.Name] as string,
      priority: row[DrillGourmetAnswerKey.Priority] as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
      link: row[DrillGourmetAnswerKey.Link] as string,
      category: row[DrillGourmetAnswerKey.Category] as string,
      type: row[DrillGourmetAnswerKey.LunchOrDinner] as string,
      address: row[DrillGourmetAnswerKey.Address] as string,
      closestStation: row[DrillGourmetAnswerKey.ClosestStation] as string,
      isVisited: row[DrillGourmetAnswerKey.IsVisited] === "訪問済み",
      comment: row[DrillGourmetAnswerKey.Comment] as string,
    } as RestaurantInfo;

    // console.debug(info);

    return info;
  });
};
