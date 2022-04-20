import { FiXCircle } from 'react-icons/fi';
import { Search } from '../Search';

import {
    Container,
    ButtonContainer,
    Button,
    ButtonIcon
} from './styles';

interface Props {
    filterUsers: (value: string, search: boolean) => void;
    infoFilter: { search: string, genre: string }
}

export function FilterBox({filterUsers, infoFilter}: Props) {
    return (
        <Container>
            <ButtonContainer>
                <Button isActive={infoFilter.genre == "female"} onClick={()=> filterUsers("female", false)}>Masculino</Button>
                <Button isActive={infoFilter.genre == "male"} onClick={() => filterUsers("male", false)}>Feminino</Button>
                { infoFilter.genre !== "" && <ButtonIcon onClick={() => filterUsers("", false)}/>}
            </ButtonContainer>
            <Search onChange={filterUsers} />

        </Container>
    );
}