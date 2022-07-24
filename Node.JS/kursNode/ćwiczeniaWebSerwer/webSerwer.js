// 1. Postaw web serwer za pomocą biblioteki "express"
// Serwer powinien obsługiwać 4 adresy:
// strona główna:    GET /
// kontakt:          GET /kontakt
// użytkownicy:      GET /profile
// użytkownicy:      GET /profile/:id/:mode?

// Przykładowa tabela użytkowników:
const users = [
  { id: 1, name: 'Janek', email: 'janek@gmail.com' },
  { id: 2, name: 'Adam', email: 'adam@gmail.com' },
  { id: 3, name: 'Tomasz', email: 'tomek@my.com' },
  { id: 4, name: 'Dawid', email: 'dawid@email.com' },
];

// Rezultat /profile
// `Znaleziono 4 profile.
// - <a href="/profile/1">Janek (id: 1)</a>
// - Adam (id: 2)
// - Tomasz (id: 3)
// - Dawid (id: 4) `

// Rezultat /profile/1
// `Dane użytkownika:: imię "Janek" `

// Rezultat /profile/1/szczegoly
// `Dane użytkownika:: imię "Janek", id "1", email "janek@gamil.com"`

const express = require('express');
const port = 3000;

const app = express();

app.get('/',(req,res) => {
  res.send('Strona główna')
});

app.get('/kontakt',(req,res) => {
  res.send('Kontakt z nami')
});

app.get('/profile',(req,res) => {
  let html = `Znaleziono ${users.length} profile. <br>`
  users.forEach(user => html += `- <a href="/profile/${user.id}">${user.name} (id: ${user.id})</a> <br>`)

  res.send(html);
});

app.get('/profile/:id/:mode?',(req,res) => {
  const { id, mode } = req.params;
  const user = users.find(x => x.id === parseInt(id))

  let html = `Dane użytkownika:: imię: "${user.name}" `

  if(mode && mode === 'szczegoly') {
    html += `id "${user.id}", email "${user.email}"`;
  }

  res.send(html)
});

app.listen(port)