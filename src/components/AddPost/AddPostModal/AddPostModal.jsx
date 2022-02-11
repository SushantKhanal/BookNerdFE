import { Button, MenuItem, Modal, TextField } from '@mui/material';
import { StyledContainer, StyledForm, StyledItem } from './AddPostModalStyles';

const AddPostModal = ({openModal, setOpenModal}) => {
    return (
        <>
            <Modal open={openModal}>
                <StyledContainer>
                    <StyledForm autoComplete="off">
                        <StyledItem>
                            <TextField 
                                id="standard-basic" 
                                label="Author" 
                                variant="standard" 
                                size="small" 
                                style={{width:'100%'}}
                            />
                        </StyledItem>
                        <StyledItem>
                            <TextField
                                id="standard-multiline-static"
                                label="Enlighten us with the quote..."
                                multiline
                                rows={3}
                                variant="standard"
                                style={{width:'100%'}}
                            />
                        </StyledItem>
                        <StyledItem>
                            <TextField 
                                id="standard-basic" 
                                label="Book" 
                                variant="standard" 
                                size="small" 
                                style={{width:'100%'}}
                            />
                        </StyledItem>
                        <StyledItem style={{marginTop: 40}}>
                            <Button variant="outlined" color="primary" style={{marginRight: 20}} onClick={()=>{setOpenModal(false);}}>Create Post</Button>
                            <Button variant="outlined" color="secondary" onClick={() => setOpenModal(false)}>Cancel</Button>
                        </StyledItem>
                    </StyledForm>
                </StyledContainer>
            </Modal>
        </>
    )
}

export default AddPostModal;