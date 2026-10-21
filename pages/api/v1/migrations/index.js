import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();
  const defaultDatabaseConfiguration = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    console.log("GET method");
    const pendentMigrations = await migrationRunner(
      defaultDatabaseConfiguration,
    );
    await dbClient.end();
    response.status(200).json(pendentMigrations);
  }
  if (request.method === "POST") {
    console.log("POST method");
    const migratedMigrations = await migrationRunner({
      ...defaultDatabaseConfiguration,
      dryRun: false,
    });
    await dbClient.end();
    if (migratedMigrations.length > 0) {
      response.status(201).json(migratedMigrations);
    }
    response.status(200).json(migratedMigrations);
  }

  response.status(405).json({ message: "Method not allowed" });
}
