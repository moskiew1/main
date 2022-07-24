const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'node-kurs'

async function main() {
    await client.connect();
    console.log('połączenie udane')

    const db = client.db(dbName)

    //tworzenie nowej kolekcji z wproawadzeniem danych

    //await db
        //.collection('companies')
        //.insertOne({ slug: 'tworcastron', name: 'Tworca Stron.pl' });

    // znajdowanie danych w bazie

    //const res = await db
    //.collection('companies')
    //.find({slug: 'tworcastron'})
    //.toArray();
    //console.log(res);

    //usuwanie 
    //const colletion = db.collection('companies');
    //await colletion.deleteOne({ slug: 'tworcastron' });

}

main()
.catch(ex => console.log('coś poszło nie tak')) // zabezpieczenie przed wywalaniem apki
.finally(() => client.close()); // zamyka apkę na końcu