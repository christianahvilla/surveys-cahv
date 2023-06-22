// Shared across repositories interfaces

export interface RequestConfig {
  method: string;
  params?: any;
  url: string;
  useFullUrl?: boolean;
}
