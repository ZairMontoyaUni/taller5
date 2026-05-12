import { Injectable } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { EngagementQueryDto } from './dto/engagementQuery.dto';
import { CpmQueryDto } from './dto/cpmQuery.dto';

type MetricRecord = {
  id: number;
  name: string;
  value: number;
  createdAt: Date;
};

@Injectable()
export class MetricsService {
  private metrics: MetricRecord[] = [];
  private nextId = 1;

  create(createMetricDto: CreateMetricDto) {
    const metric = {
      id: this.nextId++,
      ...(createMetricDto as Record<string, unknown>),
      createdAt: new Date(),
    } as MetricRecord;
    this.metrics.push(metric);
    return metric;
  }

  findAll() {
    return this.metrics;
  }

  findOne(id: number) {
    return this.metrics.find((metric) => metric.id === id) ?? null;
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    const metric = this.findOne(id);
    if (!metric) return null;
    Object.assign(metric, updateMetricDto);
    return metric;
  }

  remove(id: number) {
    const index = this.metrics.findIndex((metric) => metric.id === id);
    if (index === -1) return null;
    const [removed] = this.metrics.splice(index, 1);
    return removed;
  }

  // Calculate engagement rate as percentage: ((likes + comments) / followers) * 100
  engagement(query: EngagementQueryDto) {
    const { likes, comments, followers } = query;
    if (followers === 0) return { rate: 0 };
    const rate = ((likes + comments) / followers) * 100;
    return { rate };
  }

  // Calculate CPM: (cost / impressions) * 1000
  cpm(query: CpmQueryDto) {
    const { cost, impressions } = query;
    if (impressions === 0) return { cpm: 0 };
    const cpm = (cost / impressions) * 1000;
    return { cpm };
  }
}
