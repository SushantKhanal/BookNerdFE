import AddIcon from '@mui/icons-material/Add';
import { StyledFAB } from './styles';
import { useState } from 'react';
import AddPostModal from '../AddPostModal';

const AddPostFAB = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <StyledFAB color="primary" aria-label="add" onClick={() => setOpenModal(true)}>
                <AddIcon />
            </StyledFAB>
            <AddPostModal openModal={openModal} setOpenModal={(state) => {setOpenModal(state)}}/>
        </>

    )
}

export default AddPostFAB;
