import { Controller, Get, Post, Query, Body, UseGuards } from '@nestjs/common';
import { ApiKeyGuard }    from '../auth/api-key.guard';
import { CalcService }    from './calc.service';
import { CircleQueryDto } from './dto/circle-query.dto';
import { KinematicsDto }  from './dto/kinematics.dto';

@Controller('calc')
export class CalcController {
  constructor(private calc: CalcService) {}

  @Get('circle')
  circle(@Query() query: CircleQueryDto) {
    return this.calc.circle(query);
  }

  @Post('kinematics')
  @UseGuards(ApiKeyGuard)
  kinematics(@Body() dto: KinematicsDto) {
    return this.calc.kinematics(dto);
  }
}