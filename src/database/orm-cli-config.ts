import { CreateCoursesTable1707386984349 } from './../migrations/1707386984349-CreateCoursesTable';
import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCoursesTable1707386984349]
})