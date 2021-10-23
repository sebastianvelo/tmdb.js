import CompanyRequest from "./request/company/CompanyRequest";
import CreditRequest from "./request/credit/CreditRequest";
import DiscoverRequest from "./request/discover/DiscoverRequest";
import FindRequest from "./request/find/FindRequest";
import GenreRequest from "./request/genre/GenreRequest";
import GuestSessions from "./request/guest-sessions/GuestSessionRequest";
import KeywordRequest from "./request/keyword/KeywordRequest";
import MovieRequest from "./request/movie/MovieRequest";

type TMDBVersion = "3" | "4";
class TMDBClient {
  public readonly version: TMDBVersion;

  public readonly apiKey: string;

  public readonly discover: DiscoverRequest;

  public readonly credit: CreditRequest;

  public readonly company: CompanyRequest;

  public readonly genre: GenreRequest;

  public readonly find: FindRequest;

  public readonly guestSessions: GuestSessions;

  public readonly keyword: KeywordRequest;

  public readonly movie: MovieRequest;

  constructor(apiKey: string, version: TMDBVersion = "3") {
    this.version = version;
    this.apiKey = apiKey;
    this.discover = new DiscoverRequest(this.version, this.apiKey);
    this.credit = new CreditRequest(this.version, this.apiKey);
    this.company = new CompanyRequest(this.version, this.apiKey);
    this.genre = new GenreRequest(this.version, this.apiKey);
    this.find = new FindRequest(this.version, this.apiKey);
    this.guestSessions = new GuestSessions(this.version, this.apiKey);
    this.keyword = new KeywordRequest(this.version, this.apiKey);
    this.movie = new MovieRequest(this.version, this.apiKey);
  }
}

export default TMDBClient;
