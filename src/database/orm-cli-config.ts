import { CreateTagsTable1694706531026 } from "./../migrations/1707956415922-CreateTagsTable";
import { CreateCoursesTable1694705312546  } from "./../migrations/1707386984349-CreateCoursesTable";
import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { CreateCoursesTagsTable1695042750118 } from "src/migrations/1708423524918-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1695043757120 } from "src/migrations/1708425175260-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1695044746630 } from "src/migrations/1708428140322-AddTagsIdToCoursesTagsTable";

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1694705312546,
    CreateTagsTable1694706531026,
    CreateCoursesTagsTable1695042750118,
    AddCoursesIdToCoursesTagsTable1695043757120,
    AddTagsIdToCoursesTagsTable1695044746630,
  ],
});
