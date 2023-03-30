import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import { join } from 'path';
import { UsersModule } from './users/users.module';
import * as process from "process";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
  }), UsersModule, ],

})
export class AppModule {}
