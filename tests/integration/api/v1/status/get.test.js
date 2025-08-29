test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(parseUpdatedAt);

  expect(responseBody.database.version).not.toBe(null);
  expect(responseBody.database.alive_connections).toEqual(1);

  console.log(responseBody);
});
