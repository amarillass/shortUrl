export default async function handler(req, res) {
  const { shortId } = req.query;

  try {
    const response = await fetch(
      `https://oz25s5y03c.execute-api.us-east-1.amazonaws.com/prod/${shortId}`,
      { redirect: "manual" } // 🔥 clave
    );

    const location = response.headers.get("location");

    if (!location) {
      return res.status(404).send("Not found");
    }

    res.writeHead(302, {
      Location: location,
    });
    res.end();

  } catch (error) {
    res.status(500).send("Error");
  }
}
