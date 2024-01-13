export interface LogEntry {
  timestamp: string;
  level?: string;
  message: string;
  context?: any;
  extra?: any;
  ip?: string;
  method?: string;
  url?: string;
  protocol?: string;
  status?: number;
  size?: number;
  referer?: string;
  userAgent?: string;
  requestTime?: number;
  fileName?: string;
}

export interface LogParserStrategy {
  parse(log: string): LogEntry|null;
}