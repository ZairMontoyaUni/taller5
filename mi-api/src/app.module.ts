import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';

import { Module } from '@nestjs/common';
import { MetricsModule } from './metrics/metrics.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:        'better-sqlite3',
      database:    'instagram.db',     // archivo local
      autoLoadEntities: true,
      synchronize: true,           // solo dev
    }),
    AuthModule,
    MetricsModule,
    UsersModule,
    PostsModule,                  // ← nuevo
  ],
})
export class AppModule {}