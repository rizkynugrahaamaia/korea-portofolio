import React from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

// interface User {
//   id: number;
//   name: string;
// }

export default async function Home() {
  // URL dasar untuk API Route `users`
  // const baseUrl = process.env.BASE_URL;

  // Memanggil API `users` untuk mendapatkan data
  // const usersRes = await fetch(`${baseUrl}/api`, { cache: 'no-store' });
  // const users: User[] = await usersRes.json();

  return (
    <div className="min-h-screen">
      <div className="top-background">
        <Header />
        <Main />
      </div>

      <Footer />
      {/* <div>
        <h1>Daftar Pengguna</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
