export default async function handler(req, res) {
  const { shortId } = req.query;

  try {
    const response = await fetch(
      `https://oz25s5y03c.execute-api.us-east-1.amazonaws.com/prod/${shortId}`
    );

    const data = await response.json();

    if (!data.originalUrl) {
      return res.status(404).send("Not found");
    }

    res.writeHead(302, {
      Location: data.originalUrl,
    });
    res.end();
  } catch (error) {
    res.status(500).send("Error");
  }
}