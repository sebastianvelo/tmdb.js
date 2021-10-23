import Company from './request/company/Company';
import Credit from './request/credit/Credit';
import Discover from './request/discover/Discover';
import Genre from './request/genre/Genre';

type TMDBVersion = '3' | '4';
class TMDBClient {
  public readonly version: TMDBVersion;

  public readonly apiKey: string;

  public readonly discover: Discover;

  public readonly credit: Credit;

  public readonly company: Company;

  public readonly genre: Genre;

  constructor(version: TMDBVersion, apiKey: string) {
    this.version = version;
    this.apiKey = apiKey;
    this.discover = new Discover(this.version, this.apiKey);
    this.credit = new Credit(this.version, this.apiKey);
    this.company = new Company(this.version, this.apiKey);
    this.genre = new Genre(this.version, this.apiKey);
  }
}

export default TMDBClient;
