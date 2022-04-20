import { useState } from "react";
import { UsersProps } from "../../dtos/usersDTO";
import { useUsers } from "../../hooks/users";
import { dateFormatter } from "../../utils/dateFormatter";
import { genreTranslate } from "../../utils/genreTranslate";

import {
    Container,
    Avatar,
    InfoCard,
    InfoTitle,
    TitleName,
    InfoText,
    Content,
    ButtonContainer,
    Button,

} from "./styles"

interface Props {
    id?: string;
    onClose?: () => void;
    currentUser: UsersProps;
    currentPage: number;
}

export function Modal({ id = "modal", onClose = () => { }, currentUser, currentPage }: Props) {
    const [onCopy, setOnCopy] = useState(false);
    const { users } = useUsers();


    function useClipboard(uuid: string, currentUser: UsersProps) {

        const current_url = window.location.href;
        const currentLinkPage = Math.ceil((users.indexOf(currentUser) + 1) / 10)

        const textCopy = `${current_url}?id=${uuid}&page=${currentLinkPage}`

        navigator.clipboard.writeText(textCopy);
        setOnCopy(true)

    }
    return (
        <div
            id={id}
            className="modal">
            <Container className="container">
                <Avatar src={currentUser.picture.large} />
                <InfoCard>
                    <TitleName>{currentUser.name.title} {currentUser.name.first} {currentUser.name.last}</TitleName>
                    <InfoTitle>{currentUser.dob.age} anos - {genreTranslate(currentUser.gender)} - {currentUser.nat}</InfoTitle>
                    <Content>
                        <InfoText>{currentUser.email}</InfoText>
                        <InfoText></InfoText>
                        <InfoText>{dateFormatter(currentUser.dob.date)}</InfoText>
                        <InfoText>{currentUser.phone}</InfoText>
                        <InfoText>{currentUser.location.street.name}, {currentUser.location.street.number}</InfoText>
                        <InfoText>{currentUser.location.state} - {currentUser.location.country}</InfoText>
                        <InfoText>ID: {currentUser.login.uuid}</InfoText>
                    </Content>
                    <ButtonContainer>
                        <Button light className="close" onClick={onClose}>Voltar</Button>
                        <Button className="close" onClick={() => useClipboard(currentUser.login.uuid, currentUser)}>{onCopy ? "Link Copiado!" : "Copiar Link"}</Button>
                    </ButtonContainer>
                </InfoCard>
            </Container>
        </div>
    )
}