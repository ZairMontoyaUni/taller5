import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { Query } from '@nestjs/common';
import { EngagementQueryDto } from './dto/engagementQuery.dto';
import { CpmQueryDto } from './dto/cpmQuery.dto';
import { Public } from '../auth/public.decorator';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Post()
  create(@Body() createMetricDto: CreateMetricDto) {
    return this.metricsService.create(createMetricDto);
  }

  @Get()
  findAll() {
    return this.metricsService.findAll();
  }

  @Public()
  @Get('engagement')
  engagement(@Query() query: EngagementQueryDto) {
    return this.metricsService.engagement(query);
  }

  @Public()
  @Get('cpm')
  cpm(@Query() query: CpmQueryDto) {
    return this.metricsService.cpm(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metricsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetricDto: UpdateMetricDto) {
    return this.metricsService.update(+id, updateMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricsService.remove(+id);
  }
}
