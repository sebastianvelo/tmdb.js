import Company from "./request/company/Company";
import Credit from "./request/credit/Credit";
import Discover from "./request/discover/Discover";
import Movie from "./request/film/movie/Movie";
import Find from "./request/find/Find";
import Genre from "./request/genre/Genre";
import GuestSessions from "./request/guest-sessions/GuestSessions";
import Keyword from "./request/keyword/Keyword";

type TMDBVersion = "3" | "4";
class TMDBClient {
  public readonly version: TMDBVersion;

  public readonly apiKey: string;

  public readonly discover: Discover;

  public readonly credit: Credit;

  public readonly company: Company;

  public readonly genre: Genre;

  public readonly find: Find;

  public readonly guestSessions: GuestSessions;

  public readonly keyword: Keyword;

  public readonly movie: Movie;

  constructor(apiKey: string, version: TMDBVersion = "3") {
    this.version = version;
    this.apiKey = apiKey;
    this.discover = new Discover(this.version, this.apiKey);
    this.credit = new Credit(this.version, this.apiKey);
    this.company = new Company(this.version, this.apiKey);
    this.genre = new Genre(this.version, this.apiKey);
    this.find = new Find(this.version, this.apiKey);
    this.guestSessions = new GuestSessions(this.version, this.apiKey);
    this.keyword = new Keyword(this.version, this.apiKey);
    this.movie = new Movie(this.version, this.apiKey);
  }
}

export default TMDBClient;
