import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { StyledFAB } from './AddPostFABStyles';
import { useState } from 'react';
import AddPostModal from '../AddPostModal/AddPostModal';

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
