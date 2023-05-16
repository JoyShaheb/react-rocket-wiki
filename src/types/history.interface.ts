export interface IHistory {
  links: {
    article: string;
  };
  title: string;
  event_date_utc: Date;
  event_date_unix: number;
  details: string;
  id: string;
}
