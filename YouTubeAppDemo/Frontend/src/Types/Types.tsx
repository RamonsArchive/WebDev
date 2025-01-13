//----------------- Video Types -----------------//
export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface VideoId {
  kind: string;
  videoId?: string;
  channelId?: string;
}

export interface VideoSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishedTime: string;
  publishedAt: string;
  thumbnails: {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
  };
  title: string;
}

export interface VideoItem {
  kind: string;
  id: VideoId;
  snippet: VideoSnippet;
}

//----------------- Channel Types -----------------//

export interface ChannelBrandingSettings {
  channel: {
    title: string;
    description: string;
    keywords: string;
    unsubscribedTrailer: string;
    country: string;
  };
  immage: {
    bannerExternalUrl: string;
  };
}

export interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: false;
  videoCount: string;
}
export interface ChannelContentDetails {
  relatedPlaylists: {
    likes: string;
    uploads: string;
  };
}
export interface ChannelSnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
    localized: {
      title: string;
      description: string;
      country: string;
    };
  };
}

export interface ChannelInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface ChannelItems {
  kind: string;
  id: string;
  snippet: ChannelSnippet;
  contentDetails: ChannelContentDetails;
  statistics: ChannelStatistics;
  brandingSettings: ChannelBrandingSettings;
  0: {};
}

export interface ChannelItem {
  kind: string;
  pageInfo: ChannelInfo;
  items: ChannelItems;
}
