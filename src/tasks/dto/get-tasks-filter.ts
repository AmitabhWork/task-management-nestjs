import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../tasks.model';

export class GetTasksFilterDto {
  @ApiPropertyOptional()
  status?: TaskStatus;
  @ApiPropertyOptional()
  search?: string;
}
