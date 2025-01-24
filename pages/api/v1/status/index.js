import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("select 1+3 AS SOMA");
  console.log(result);
  response.status(200).json({ texto: "testando" });
}
export default status;
