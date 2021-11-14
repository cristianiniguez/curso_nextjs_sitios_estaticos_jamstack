import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type IAsset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<IAssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetUrlArgs = {
  transform?: Maybe<IImageTransformOptions>;
};

export type IAssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<IAsset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IAssetFilter = {
  AND?: Maybe<Array<Maybe<IAssetFilter>>>;
  OR?: Maybe<Array<Maybe<IAssetFilter>>>;
  contentType?: Maybe<Scalars['String']>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<IContentfulMetadataFilter>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName?: Maybe<Scalars['String']>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  height?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size?: Maybe<Scalars['Int']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sys?: Maybe<ISysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  url_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  width?: Maybe<Scalars['Int']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  authorCollection?: Maybe<IAuthorCollection>;
  categoryCollection?: Maybe<ICategoryCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  plantCollection?: Maybe<IPlantCollection>;
};


export type IAssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsCategoryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsPlantCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum IAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthor = IEntry & {
  __typename?: 'Author';
  biography?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  fullName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<IAuthorLinkingCollections>;
  linkedIn?: Maybe<Scalars['String']>;
  photo?: Maybe<IAsset>;
  sys: ISys;
  twitter?: Maybe<Scalars['String']>;
};


/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthorBiographyArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthorFullNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthorHandleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthorLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthorLinkedInArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthorPhotoArgs = {
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


/** Plant entry creator [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/author) */
export type IAuthorTwitterArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type IAuthorCollection = {
  __typename?: 'AuthorCollection';
  items: Array<Maybe<IAuthor>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IAuthorFilter = {
  AND?: Maybe<Array<Maybe<IAuthorFilter>>>;
  OR?: Maybe<Array<Maybe<IAuthorFilter>>>;
  biography?: Maybe<Scalars['String']>;
  biography_contains?: Maybe<Scalars['String']>;
  biography_exists?: Maybe<Scalars['Boolean']>;
  biography_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  biography_not?: Maybe<Scalars['String']>;
  biography_not_contains?: Maybe<Scalars['String']>;
  biography_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<IContentfulMetadataFilter>;
  fullName?: Maybe<Scalars['String']>;
  fullName_contains?: Maybe<Scalars['String']>;
  fullName_exists?: Maybe<Scalars['Boolean']>;
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_not?: Maybe<Scalars['String']>;
  fullName_not_contains?: Maybe<Scalars['String']>;
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle?: Maybe<Scalars['String']>;
  handle_contains?: Maybe<Scalars['String']>;
  handle_exists?: Maybe<Scalars['Boolean']>;
  handle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle_not?: Maybe<Scalars['String']>;
  handle_not_contains?: Maybe<Scalars['String']>;
  handle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn?: Maybe<Scalars['String']>;
  linkedIn_contains?: Maybe<Scalars['String']>;
  linkedIn_exists?: Maybe<Scalars['Boolean']>;
  linkedIn_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn_not?: Maybe<Scalars['String']>;
  linkedIn_not_contains?: Maybe<Scalars['String']>;
  linkedIn_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  photo_exists?: Maybe<Scalars['Boolean']>;
  sys?: Maybe<ISysFilter>;
  twitter?: Maybe<Scalars['String']>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IAuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  plantCollection?: Maybe<IPlantCollection>;
};


export type IAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};


export type IAuthorLinkingCollectionsPlantCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum IAuthorOrder {
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  LinkedInAsc = 'linkedIn_ASC',
  LinkedInDesc = 'linkedIn_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/category) */
export type ICategory = IEntry & {
  __typename?: 'Category';
  categoryDescription?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  icon?: Maybe<IAsset>;
  linkedFrom?: Maybe<ICategoryLinkingCollections>;
  slug?: Maybe<Scalars['String']>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/category) */
export type ICategoryCategoryDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/category) */
export type ICategoryIconArgs = {
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/category) */
export type ICategoryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/category) */
export type ICategorySlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/category) */
export type ICategoryTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ICategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<ICategory>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ICategoryFilter = {
  AND?: Maybe<Array<Maybe<ICategoryFilter>>>;
  OR?: Maybe<Array<Maybe<ICategoryFilter>>>;
  categoryDescription?: Maybe<Scalars['String']>;
  categoryDescription_contains?: Maybe<Scalars['String']>;
  categoryDescription_exists?: Maybe<Scalars['Boolean']>;
  categoryDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryDescription_not?: Maybe<Scalars['String']>;
  categoryDescription_not_contains?: Maybe<Scalars['String']>;
  categoryDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<IContentfulMetadataFilter>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys?: Maybe<ISysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ICategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  plantCollection?: Maybe<IPlantCollection>;
};


export type ICategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};


export type ICategoryLinkingCollectionsPlantCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum ICategoryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type IContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<IContentfulTag>>;
};

export type IContentfulMetadataFilter = {
  tags?: Maybe<IContentfulMetadataTagsFilter>;
  tags_exists?: Maybe<Scalars['Boolean']>;
};

export type IContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type IContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IEntry = {
  contentfulMetadata: IContentfulMetadata;
  sys: ISys;
};

export type IEntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<IEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IEntryFilter = {
  AND?: Maybe<Array<Maybe<IEntryFilter>>>;
  OR?: Maybe<Array<Maybe<IEntryFilter>>>;
  contentfulMetadata?: Maybe<IContentfulMetadataFilter>;
  sys?: Maybe<ISysFilter>;
};

export enum IEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum IImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum IImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum IImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type IImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<IImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<IImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<IImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlant = IEntry & {
  __typename?: 'Plant';
  author?: Maybe<IAuthor>;
  category?: Maybe<ICategory>;
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<IPlantDescription>;
  image?: Maybe<IAsset>;
  linkedFrom?: Maybe<IPlantLinkingCollections>;
  plantName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: ISys;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlantAuthorArgs = {
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlantCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlantDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlantImageArgs = {
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlantLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlantPlantNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/sl3v8axw5oze/content_types/plant) */
export type IPlantSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type IPlantCollection = {
  __typename?: 'PlantCollection';
  items: Array<Maybe<IPlant>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IPlantDescription = {
  __typename?: 'PlantDescription';
  json: Scalars['JSON'];
  links: IPlantDescriptionLinks;
};

export type IPlantDescriptionAssets = {
  __typename?: 'PlantDescriptionAssets';
  block: Array<Maybe<IAsset>>;
  hyperlink: Array<Maybe<IAsset>>;
};

export type IPlantDescriptionEntries = {
  __typename?: 'PlantDescriptionEntries';
  block: Array<Maybe<IEntry>>;
  hyperlink: Array<Maybe<IEntry>>;
  inline: Array<Maybe<IEntry>>;
};

export type IPlantDescriptionLinks = {
  __typename?: 'PlantDescriptionLinks';
  assets: IPlantDescriptionAssets;
  entries: IPlantDescriptionEntries;
};

export type IPlantFilter = {
  AND?: Maybe<Array<Maybe<IPlantFilter>>>;
  OR?: Maybe<Array<Maybe<IPlantFilter>>>;
  author?: Maybe<ICfAuthorNestedFilter>;
  author_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<ICfCategoryNestedFilter>;
  category_exists?: Maybe<Scalars['Boolean']>;
  contentfulMetadata?: Maybe<IContentfulMetadataFilter>;
  description_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  plantName?: Maybe<Scalars['String']>;
  plantName_contains?: Maybe<Scalars['String']>;
  plantName_exists?: Maybe<Scalars['Boolean']>;
  plantName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  plantName_not?: Maybe<Scalars['String']>;
  plantName_not_contains?: Maybe<Scalars['String']>;
  plantName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys?: Maybe<ISysFilter>;
};

export type IPlantLinkingCollections = {
  __typename?: 'PlantLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type IPlantLinkingCollectionsEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum IPlantOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type IQuery = {
  __typename?: 'Query';
  asset?: Maybe<IAsset>;
  assetCollection?: Maybe<IAssetCollection>;
  author?: Maybe<IAuthor>;
  authorCollection?: Maybe<IAuthorCollection>;
  category?: Maybe<ICategory>;
  categoryCollection?: Maybe<ICategoryCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  plant?: Maybe<IPlant>;
  plantCollection?: Maybe<IPlantCollection>;
};


export type IQueryAssetArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type IQueryAssetCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<IAssetOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<IAssetFilter>;
};


export type IQueryAuthorArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type IQueryAuthorCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<IAuthorOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<IAuthorFilter>;
};


export type IQueryCategoryArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type IQueryCategoryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<ICategoryOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<ICategoryFilter>;
};


export type IQueryEntryCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<IEntryOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<IEntryFilter>;
};


export type IQueryPlantArgs = {
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['Boolean']>;
};


export type IQueryPlantCollectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  order?: Maybe<Array<Maybe<IPlantOrder>>>;
  preview?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<IPlantFilter>;
};

export type ISys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type ISysFilter = {
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  id?: Maybe<Scalars['String']>;
  id_contains?: Maybe<Scalars['String']>;
  id_exists?: Maybe<Scalars['Boolean']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ICfAuthorNestedFilter = {
  AND?: Maybe<Array<Maybe<ICfAuthorNestedFilter>>>;
  OR?: Maybe<Array<Maybe<ICfAuthorNestedFilter>>>;
  biography?: Maybe<Scalars['String']>;
  biography_contains?: Maybe<Scalars['String']>;
  biography_exists?: Maybe<Scalars['Boolean']>;
  biography_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  biography_not?: Maybe<Scalars['String']>;
  biography_not_contains?: Maybe<Scalars['String']>;
  biography_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<IContentfulMetadataFilter>;
  fullName?: Maybe<Scalars['String']>;
  fullName_contains?: Maybe<Scalars['String']>;
  fullName_exists?: Maybe<Scalars['Boolean']>;
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_not?: Maybe<Scalars['String']>;
  fullName_not_contains?: Maybe<Scalars['String']>;
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle?: Maybe<Scalars['String']>;
  handle_contains?: Maybe<Scalars['String']>;
  handle_exists?: Maybe<Scalars['Boolean']>;
  handle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle_not?: Maybe<Scalars['String']>;
  handle_not_contains?: Maybe<Scalars['String']>;
  handle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn?: Maybe<Scalars['String']>;
  linkedIn_contains?: Maybe<Scalars['String']>;
  linkedIn_exists?: Maybe<Scalars['Boolean']>;
  linkedIn_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedIn_not?: Maybe<Scalars['String']>;
  linkedIn_not_contains?: Maybe<Scalars['String']>;
  linkedIn_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  photo_exists?: Maybe<Scalars['Boolean']>;
  sys?: Maybe<ISysFilter>;
  twitter?: Maybe<Scalars['String']>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ICfCategoryNestedFilter = {
  AND?: Maybe<Array<Maybe<ICfCategoryNestedFilter>>>;
  OR?: Maybe<Array<Maybe<ICfCategoryNestedFilter>>>;
  categoryDescription?: Maybe<Scalars['String']>;
  categoryDescription_contains?: Maybe<Scalars['String']>;
  categoryDescription_exists?: Maybe<Scalars['Boolean']>;
  categoryDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryDescription_not?: Maybe<Scalars['String']>;
  categoryDescription_not_contains?: Maybe<Scalars['String']>;
  categoryDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata?: Maybe<IContentfulMetadataFilter>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys?: Maybe<ISysFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IAssetFieldsFragment = { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined };

export type IAuthorFieldsFragment = { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined };

export type ICategoryFieldsFragment = { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined };

export type IPlantFieldsFragment = { __typename?: 'Plant', slug?: string | null | undefined, plantName?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, description?: { __typename?: 'PlantDescription', json: any } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined };

export type IGetPlantListQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Maybe<IPlantOrder>> | Maybe<IPlantOrder>>;
  locale?: Maybe<Scalars['String']>;
}>;


export type IGetPlantListQuery = { __typename?: 'Query', plantCollection?: { __typename?: 'PlantCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'Plant', slug?: string | null | undefined, plantName?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, description?: { __typename?: 'PlantDescription', json: any } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type IGetPlantQueryVariables = Exact<{
  slug: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}>;


export type IGetPlantQuery = { __typename?: 'Query', plantCollection?: { __typename?: 'PlantCollection', items: Array<{ __typename?: 'Plant', slug?: string | null | undefined, plantName?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, description?: { __typename?: 'PlantDescription', json: any } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type ISearchPlantQueryVariables = Exact<{
  term: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type ISearchPlantQuery = { __typename?: 'Query', plantCollection?: { __typename?: 'PlantCollection', total: number, skip: number, limit: number, items: Array<{ __typename?: 'Plant', slug?: string | null | undefined, plantName?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, description?: { __typename?: 'PlantDescription', json: any } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type IGetCategoryListQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Maybe<ICategoryOrder>> | Maybe<ICategoryOrder>>;
}>;


export type IGetCategoryListQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type IGetAuthorListQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Maybe<IAuthorOrder>> | Maybe<IAuthorOrder>>;
}>;


export type IGetAuthorListQuery = { __typename?: 'Query', authorCollection?: { __typename?: 'AuthorCollection', items: Array<{ __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type IGetPlantListByAuthorQueryVariables = Exact<{
  authorId: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
}>;


export type IGetPlantListByAuthorQuery = { __typename?: 'Query', plantCollection?: { __typename?: 'PlantCollection', items: Array<{ __typename?: 'Plant', slug?: string | null | undefined, plantName?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, description?: { __typename?: 'PlantDescription', json: any } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export type IGetPlantListByCategoryQueryVariables = Exact<{
  category: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type IGetPlantListByCategoryQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined> } | null | undefined, plantCollection?: { __typename?: 'PlantCollection', items: Array<{ __typename?: 'Plant', slug?: string | null | undefined, plantName?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined, description?: { __typename?: 'PlantDescription', json: any } | null | undefined, author?: { __typename?: 'Author', fullName?: string | null | undefined, handle?: string | null | undefined, biography?: string | null | undefined, twitter?: string | null | undefined, linkedIn?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, photo?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined, category?: { __typename?: 'Category', slug?: string | null | undefined, title?: string | null | undefined, categoryDescription?: string | null | undefined, sys: { __typename?: 'Sys', id: string }, icon?: { __typename?: 'Asset', title?: string | null | undefined, url?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined> } | null | undefined };

export const AssetFieldsFragmentDoc = gql`
    fragment AssetFields on Asset {
  title
  url
  width
  height
}
    `;
export const AuthorFieldsFragmentDoc = gql`
    fragment AuthorFields on Author {
  sys {
    id
  }
  fullName
  handle
  photo {
    ...AssetFields
  }
  biography
  twitter
  linkedIn
}
    ${AssetFieldsFragmentDoc}`;
export const CategoryFieldsFragmentDoc = gql`
    fragment CategoryFields on Category {
  sys {
    id
  }
  slug
  title
  categoryDescription
  icon {
    ...AssetFields
  }
}
    ${AssetFieldsFragmentDoc}`;
export const PlantFieldsFragmentDoc = gql`
    fragment PlantFields on Plant {
  sys {
    id
  }
  slug
  plantName
  image {
    ...AssetFields
  }
  description {
    json
  }
  author {
    ...AuthorFields
  }
  category {
    ...CategoryFields
  }
}
    ${AssetFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}
${CategoryFieldsFragmentDoc}`;
export const GetPlantListDocument = gql`
    query getPlantList($limit: Int = 10, $skip: Int = 0, $order: [PlantOrder] = sys_publishedAt_DESC, $locale: String) {
  plantCollection(limit: $limit, skip: $skip, order: $order, locale: $locale) {
    total
    skip
    limit
    items {
      ...PlantFields
    }
  }
}
    ${PlantFieldsFragmentDoc}`;
export const GetPlantDocument = gql`
    query getPlant($slug: String!, $preview: Boolean = false, $locale: String) {
  plantCollection(
    where: {slug: $slug}
    preview: $preview
    limit: 1
    locale: $locale
  ) {
    items {
      ...PlantFields
    }
  }
}
    ${PlantFieldsFragmentDoc}`;
export const SearchPlantDocument = gql`
    query searchPlant($term: String!, $locale: String, $limit: Int = 10, $skip: Int = 0) {
  plantCollection(
    where: {plantName_contains: $term}
    locale: $locale
    limit: $limit
    skip: $skip
  ) {
    total
    skip
    limit
    items {
      ...PlantFields
    }
  }
}
    ${PlantFieldsFragmentDoc}`;
export const GetCategoryListDocument = gql`
    query getCategoryList($limit: Int = 10, $skip: Int = 0, $order: [CategoryOrder] = sys_publishedAt_DESC) {
  categoryCollection(limit: $limit, skip: $skip, order: $order) {
    items {
      ...CategoryFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}`;
export const GetAuthorListDocument = gql`
    query getAuthorList($limit: Int = 10, $skip: Int = 0, $order: [AuthorOrder] = sys_publishedAt_DESC) {
  authorCollection(limit: $limit, skip: $skip, order: $order) {
    items {
      ...AuthorFields
    }
  }
}
    ${AuthorFieldsFragmentDoc}`;
export const GetPlantListByAuthorDocument = gql`
    query getPlantListByAuthor($authorId: String!, $limit: Int = 10) {
  plantCollection(limit: $limit, where: {author: {sys: {id: $authorId}}}) {
    items {
      ...PlantFields
    }
  }
}
    ${PlantFieldsFragmentDoc}`;
export const GetPlantListByCategoryDocument = gql`
    query getPlantListByCategory($category: String!, $locale: String, $limit: Int = 10) {
  categoryCollection(limit: 1, locale: $locale, where: {slug: $category}) {
    items {
      ...CategoryFields
    }
  }
  plantCollection(
    limit: $limit
    locale: $locale
    where: {category: {slug: $category}}
  ) {
    items {
      ...PlantFields
    }
  }
}
    ${CategoryFieldsFragmentDoc}
${PlantFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPlantList(variables?: IGetPlantListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetPlantListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetPlantListQuery>(GetPlantListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPlantList');
    },
    getPlant(variables: IGetPlantQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetPlantQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetPlantQuery>(GetPlantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPlant');
    },
    searchPlant(variables: ISearchPlantQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ISearchPlantQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ISearchPlantQuery>(SearchPlantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchPlant');
    },
    getCategoryList(variables?: IGetCategoryListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetCategoryListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetCategoryListQuery>(GetCategoryListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCategoryList');
    },
    getAuthorList(variables?: IGetAuthorListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetAuthorListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetAuthorListQuery>(GetAuthorListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAuthorList');
    },
    getPlantListByAuthor(variables: IGetPlantListByAuthorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetPlantListByAuthorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetPlantListByAuthorQuery>(GetPlantListByAuthorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPlantListByAuthor');
    },
    getPlantListByCategory(variables: IGetPlantListByCategoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetPlantListByCategoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetPlantListByCategoryQuery>(GetPlantListByCategoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPlantListByCategory');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;