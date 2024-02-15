import { CreateTagsTable1707956415922 } from './../migrations/1707956415922-CreateTagsTable';
import { CreateCoursesTable1707386984349 } from './../migrations/1707386984349-CreateCoursesTable';
import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1707386984349, CreateTagsTable1707956415922]
})