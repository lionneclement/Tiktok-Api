// Generate by https://jStickersOnItemEntityilk.com/MakeTypes/

export interface HashtagDescription {
  seoProps: SeoProps;
  $language: string;
  statusCode: number;
  statusMsg: string;
  challengeInfo: ChallengeInfo;
}
export interface SeoProps {
  pageId: string;
  pageType: number;
  predictedLanguage: string;
  metaParams: MetaParams;
  jsonldList?: ((string | string | string | itemList)[] | null)[] | null;
}
export interface MetaParams {
  title: string;
  keywords: string;
  description: string;
  canonicalHref: string;
  robotsContent: string;
  applicableDevice: string;
}

export interface itemList {
  itemListElement?: ItemListElementEntity[] | null;
}
export interface ItemListElementEntity {
  '@type': string;
  position: number;
  item: Item;
}
export interface Item {
  '@type': string;
  '@id': string;
  name: string;
}
export interface ChallengeInfo {
  challenge: Challenge;
  stats: Stats;
  challengeAnnouncement: ChallengeAnnouncement;
  itemList?: null[] | null;
}
export interface Challenge {
  id: string;
  title: string;
  desc: string;
  profileLarger: string;
  profileMedium: string;
  profileThumb: string;
  coverLarger: string;
  coverMedium: string;
  coverThumb: string;
  isCommerce: boolean;
}
export interface Stats {
  videoCount: number;
  viewCount: number;
}
export interface ChallengeAnnouncement {
  body: string;
  title: string;
}
