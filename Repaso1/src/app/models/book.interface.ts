export interface BookResponse {
  docs: Doc[];
}

export interface Doc {
  cover_edition_key?: string;
  cover_i?: number;
  first_publish_year?: number;
  title: string;
}
