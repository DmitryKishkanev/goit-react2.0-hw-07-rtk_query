const myKey = process.env.VITE_TMDB_TOKEN;

export default async function handler(request, response) {
  const { searchQuery = '', currentPage = 1, pageSize = 5 } = request.query;

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    {
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    },
  );

  if (!res.ok) {
    return response
      .status(res.status)
      .json({ error: 'Ошибка запроса к NewsAPI' });
  }

  const data = await res.json();
  response.status(200).json(data.articles);
}
