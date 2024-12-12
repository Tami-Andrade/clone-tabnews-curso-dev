function status(request, response) {
  response.status(200).json({ texto: "testando" });
}
export default status;
