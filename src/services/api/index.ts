export async function getHeroesData() {
  const res = await fetch(`${process.env.API_URL}/api/heroes`);

  if (!res.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  console.log(res.json);
  return res.json();
}
