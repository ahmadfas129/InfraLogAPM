export type PricingPlan = {
  id: string;
  name: string;
  priceMonthly: number;
  description: string;
  features: string[];
};

export type MetricDatum = {
  name: string;
  value: number;
  unit: string;
};

export type LogEntry = {
  id: string;
  level: string;
  message: string;
  service: string;
  timestamp: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  category: string;
  read: boolean;
  createdAt: string;
};
