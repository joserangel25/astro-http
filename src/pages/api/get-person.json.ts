import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, request }) => {
  const person = {
    name: 'Jose Rangel',
    age: 30,
    email: 'jose.rangel@gmail.com',
    phone: '+56 987654321'
  }

  return new Response(JSON.stringify(person), {
    headers: { 'Content-Type': 'application/json' },
    status: 400
  })
}
