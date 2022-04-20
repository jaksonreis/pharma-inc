import { useEffect, useState } from 'react'
import './App.css'


import { Header } from './components/Header'
import { ListUsers } from './components/ListUsers'
import { moreUsers, useUsers } from './hooks/users'
import { Spinner } from './components/Spinner'
import { useQuery } from 'react-query'
import { FilterBox } from './components/FilterBox'




let results = 0;
let paramsLink = { uuid: "0", page: "0" }

function App() {

  const { users, setUsers } = useUsers();

  function inicialize() {

    if (location.search.includes('&')) {
      if (location.search.split('=').length - 1 == 2 && location.search.split('&').length - 1 == 1) {

        const params = location.search.split('&');
        paramsLink = { uuid: params[0].split('=')[1], page: params[1].split('=')[1] };

      } else {
        alert("Link inválido! Utilize um link válido.");
      }
    }

    window.history.pushState("", "", "/");

    if (paramsLink.page == "0" || !Number.isInteger(Number(paramsLink.page))) {

      results = results + 10
    } else {

      results = Number(paramsLink.page) * 10;


    if (results> 50) {
        
      alert("Link inválido! Utilize um link válido.");
      results = 10;
      paramsLink = {uuid: "0" , page: "0"}
  }
    }

    moreUsers(results)
      .then((users) => {
        setUsers(users)
      })
      .catch((err) => {})

  }

  function handleButtonUser() {
    results = results + 10
    moreUsers(results)
      .then((users) => {
        setUsers(users)
      })
      .catch((err) => {})
  }




  useEffect(() => { inicialize(); }, [])


  return (
    <div className="App">

      <Header />
      {
        users.length > 0 ?
          <ListUsers moreUsers={handleButtonUser} userLink={paramsLink} /> : <Spinner />

      }
    </div>
  )
}

export default App
