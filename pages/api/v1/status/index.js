import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const dbVersion = await database.query("SHOW server_version;");

  const dbMaxConnections = await database.query("SHOW max_connections;");

  const dbAliveConnections = await database.query(
    "SELECT COUNT(*) FROM pg_stat_activity WHERE state = 'active'",
  );

  response.status(200).json({
    updated_at: updatedAt,
    database: {
      version: dbVersion.rows[0].server_version,
      max_connections: parseInt(dbMaxConnections.rows[0].max_connections),
      alive_connections: parseInt(dbAliveConnections.rows[0].count),
    },
  });
}
export default status;
