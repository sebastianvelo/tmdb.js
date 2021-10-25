import CompanyRequest from "./api/request/company/CompanyRequest";
import CreditRequest from "./api/request/credit/CreditRequest";
import DiscoverRequest from "./api/request/discover/DiscoverRequest";
import EpisodeRequest from "./api/request/episode/EpisodeRequest";
import FindRequest from "./api/request/find/FindRequest";
import GenreRequest from "./api/request/genre/GenreRequest";
import GuestSessionRequest from "./api/request/guest-sessions/GuestSessionRequest";
import KeywordRequest from "./api/request/keyword/KeywordRequest";
import MovieRequest from "./api/request/movie/MovieRequest";
import NetworkRequest from "./api/request/network/NetworkRequest";
import PersonRequest from "./api/request/person/PersonRequest";
import ReviewRequest from "./api/request/review/ReviewRequest";
import SearchRequest from "./api/request/search/SearchRequest";
import TrendingRequest from "./api/request/trending/TrendingRequest";
import TVShowRequest from "./api/request/tv-show/TVShowRequest";
import WatchProviderRequest from "./api/request/watch-provider/WatchProviderRequest";

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
