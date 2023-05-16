export interface ICapsule {
  reuse_count: number;
  water_landings: number;
  land_landings: number;
  last_update: string;
  launches: string[];
  serial: string;
  status: string;
  type: string;
  id: string;
}

export interface ICores {
  asds_attempts: number;
  asds_landings: number;
  block: number;
  id: string;
  last_update: null | string;
  launches: string[];
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  serial: string;
  status: string;
}


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
