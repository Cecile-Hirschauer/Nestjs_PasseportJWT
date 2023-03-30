import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';
import { UsersModule } from './users/users.module';
import * as process from "process";

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }), UsersModule, ],

})
export class AppModule {}
