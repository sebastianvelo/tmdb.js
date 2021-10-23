type ExternalSource = 'imdb_id' |  'freebase_mid' |  'freebase_id' |  'tvdb_id' |  'tvrage_id' |  'facebook_id' |  'twitter_id' |  'instagram_id';

export interface FindParams {
    language?: string;
    external_source: ExternalSource;
}