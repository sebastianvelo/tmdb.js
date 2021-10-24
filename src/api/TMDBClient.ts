import CompanyRequest from "./request/company/CompanyRequest";
import CreditRequest from "./request/credit/CreditRequest";
import DiscoverRequest from "./request/discover/DiscoverRequest";
import EpisodeRequest from "./request/episode/EpisodeRequest";
import FindRequest from "./request/find/FindRequest";
import GenreRequest from "./request/genre/GenreRequest";
import GuestSessionRequest from "./request/guest-sessions/GuestSessionRequest";
import KeywordRequest from "./request/keyword/KeywordRequest";
import MovieRequest from "./request/movie/MovieRequest";
import NetworkRequest from "./request/network/NetworkRequest";
import PersonRequest from "./request/person/PersonRequest";
import ReviewRequest from "./request/review/ReviewRequest";
import SearchRequest from "./request/search/SearchRequest";
import TrendingRequest from "./request/trending/TrendingRequest";
import TVShowRequest from "./request/tv-show/TVShowRequest";
import WatchProviderRequest from "./request/watch-provider/WatchProviderRequest";

type TMDBVersion = "3" | "4";
class TMDBClient {
  public readonly version: TMDBVersion;

  public readonly apiKey: string;

  public readonly company: CompanyRequest;

  public readonly credit: CreditRequest;

  public readonly discover: DiscoverRequest;

  public readonly episode: EpisodeRequest;

  public readonly find: FindRequest;

  public readonly genre: GenreRequest;

  public readonly guestSessions: GuestSessionRequest;

  public readonly keyword: KeywordRequest;

  public readonly movie: MovieRequest;

  public readonly network: NetworkRequest;

  public readonly person: PersonRequest;

  public readonly review: ReviewRequest;

  public readonly search: SearchRequest;

  public readonly trending: TrendingRequest;

  public readonly tvShow: TVShowRequest;

  public readonly watchProvider: WatchProviderRequest;

  constructor(apiKey: string, version: TMDBVersion = "3") {
    this.version = version;
    this.apiKey = apiKey;
    this.discover = new DiscoverRequest(this.version, this.apiKey);
    this.credit = new CreditRequest(this.version, this.apiKey);
    this.company = new CompanyRequest(this.version, this.apiKey);
    this.genre = new GenreRequest(this.version, this.apiKey);
    this.find = new FindRequest(this.version, this.apiKey);
    this.guestSessions = new GuestSessionRequest(this.version, this.apiKey);
    this.keyword = new KeywordRequest(this.version, this.apiKey);
    this.movie = new MovieRequest(this.version, this.apiKey);
    this.tvShow = new TVShowRequest(this.version, this.apiKey);
    this.network = new NetworkRequest(this.version, this.apiKey);
    this.person = new PersonRequest(this.version, this.apiKey);
    this.review = new ReviewRequest(this.version, this.apiKey);
    this.search = new SearchRequest(this.version, this.apiKey);
    this.trending = new TrendingRequest(this.version, this.apiKey);
    this.watchProvider = new WatchProviderRequest(this.version, this.apiKey);
    this.episode = new EpisodeRequest(this.version, this.apiKey);
  }
}

export default TMDBClient;
