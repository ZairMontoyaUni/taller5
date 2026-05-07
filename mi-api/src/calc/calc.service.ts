import { Injectable } from '@nestjs/common';
import { CircleQueryDto } from './dto/circle-query.dto';
import { KinematicsDto }  from './dto/kinematics.dto';

@Injectable()
export class CalcService {

  circle(dto: CircleQueryDto) {
    const { radius } = dto;
    return {
      area:      Math.PI * radius ** 2,
      perimeter: 2 * Math.PI * radius,
    };
  }

  kinematics(dto: KinematicsDto) {
    const { v0, a, t } = dto;
    return {
      velocity: v0 + a * t,
      distance: v0 * t + 0.5 * a * t ** 2,
    };
  }
}