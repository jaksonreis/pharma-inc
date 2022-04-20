import { useEffect, useState } from 'react';
import { UsersProps } from '../../dtos/usersDTO';
import { useUsers } from '../../hooks/users';
import { Button } from '../Button';
import { FilterBox } from '../FilterBox';
import { ListItem } from '../ListItem';
import { Modal } from '../Modal';
import { Pagination } from '../Pagination';

import {
  Container,
  Table,
  Header,
  HeaderStyle,
  Row,
  ModalConponent,
} from './styles';

interface ParamsProps {
  uuid: string;
  page: string;
}

interface Props {
  moreUsers: () => void;
  userLink: ParamsProps;
}

export function ListUsers({ moreUsers, userLink }: Props) {
  const { users } = useUsers()
  const [page, setPage] = useState(1)
  const [scrollY, setScrollY] = useState(0)
  const [infoFilter, setInfoFilter] = useState({ search: "", genre: "" })
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState<UsersProps>({} as UsersProps)

  const perPage = 10

  const pageStart = (page - 1) * perPage

  const pageEnd = pageStart + perPage;

  function userLinkModal(params: ParamsProps) {
    if (params.uuid !== "0" && params.uuid !== "0") {
      const found = users.find(element => element.login.uuid == params.uuid)
      if (!!found) {
        handleOpenModal(found)
        setPage(Number(params.page))
      } else {

        alert("Link inválido! Não encontramos o usuário especificado.");
      }
    }

  }


  function handleOpenModal(user: UsersProps) {
    setCurrentUser(user)
    setIsModalVisible(true);


  }

  function filterUsers(value: string, search: boolean) {
    setPage(1)
    if (search) {
      setInfoFilter(oldState => {

        return {
          ...oldState,
          search: value.toUpperCase()
        }
      })

    } else {
      setInfoFilter(oldState => {

        return {
          ...oldState,
          genre: value
        }
      })

    }
  }

  function showFiltered(user: UsersProps) {
    return (
      user.gender !== infoFilter.genre && user.name.title.concat(user.name.first, user.name.last, user.location.country).toUpperCase().includes(infoFilter.search)
    )
  }

  function handleButtonClick() {
    moreUsers()
    setPage(page + 1)
  }


  useEffect(() => { userLinkModal(userLink) }, [userLink])


  useEffect(function () {
    function scrollPosition() {
      setScrollY(window.scrollY)

    }
    window.addEventListener('scroll', scrollPosition)
  }, [])



  return (
    <Container>
      <FilterBox filterUsers={filterUsers} infoFilter={infoFilter} />

      <Table>
        <thead>
          <Row>
            <Header> </Header>
            <Header><HeaderStyle>Nome</HeaderStyle></Header>
            <Header><HeaderStyle>Gênero</HeaderStyle></Header>
            <Header><HeaderStyle>Nascimento</HeaderStyle></Header>
            <Header><HeaderStyle> </HeaderStyle></Header>

          </Row>
        </thead>
        <tbody>

          {

            users.length > 0 &&
            users.filter(showFiltered).slice(pageStart, pageEnd).map((element, index, array) =>
              <ListItem key={index} data={element}
                onPress={() => { handleOpenModal(element) }}
              />
            )

          }


        </tbody>
      </Table>

      {
        (Math.ceil(users.filter(showFiltered).length / perPage) == page || users.filter(showFiltered).length == 0) && page < 5 && users.length < 50 ?

          <Button
            icon='FiLoader'
            onClick={handleButtonClick} text="Mais usuários"
          /> : <></>
      }
        <ModalConponent>
          {
            isModalVisible &&
            <Modal currentPage={page} onClose={() => { setIsModalVisible(false) }} currentUser={currentUser} />
          }
        </ModalConponent>
      <Pagination
        totalCountOfRegisters={
          users.length > 0 ? users.filter(showFiltered).length : 0
        }

        registersPerPage={perPage}
        currentPage={page}
        onPageChange={setPage}
      />
    </Container>
  );
}