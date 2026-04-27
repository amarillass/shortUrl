export default function handler(req, res) {
  const { shortId } = req.query;

  res.writeHead(302, {
    Location: `https://oz25s5y03c.execute-api.us-east-1.amazonaws.com/prod/${shortId}`,
  });

  res.end();
}
