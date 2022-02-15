import { Button, Modal, TextField } from '@mui/material';
import { useState } from 'react';
import { StyledContainer, StyledForm, StyledItem } from './styles';
import { addPost } from '../addPostService';

const AddPostModal = ({openModal, setOpenModal}) => {
    const [authorName, setAuthorName] = useState('');
    const [textContent, setTextContent] = useState('');
    const [imageContent, setImageContent] = useState('');
    const [bookName, setBookName] = useState('');

    const createPost = () => {
        addPost({
            authorName,
            textContent,
            imageContent,
            bookName
        });
        console.log(authorName, textContent, bookName);
    }

    return (
        <>
            <Modal open={openModal}>
                <StyledContainer>
                    <StyledForm autoComplete="off">
                        <StyledItem>
                            <TextField 
                                id="standard-basic" 
                                label="Book name" 
                                variant="standard" 
                                size="small" 
                                style={{width:'100%'}}
                                value={bookName}
                                onChange={(event)=>setBookName(event.target.value)}
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
                                value={textContent}
                                onChange={(event)=>setTextContent(event.target.value)}
                            />
                        </StyledItem>
                        <StyledItem>
                            <TextField 
                                id="standard-basic" 
                                label="Author Name" 
                                variant="standard" 
                                size="small" 
                                style={{width:'100%'}}
                                value={authorName}
                                onChange={(event)=>setAuthorName(event.target.value)}
                            />
                        </StyledItem>
                        <StyledItem style={{marginTop: 40}}>
                            <Button variant="outlined" color="primary" style={{marginRight: 20}} 
                            onClick={()=>{
                                createPost();
                                setOpenModal(false);
                            }}>
                                Create Post
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={() => setOpenModal(false)}>Cancel</Button>
                        </StyledItem>
                    </StyledForm>
                </StyledContainer>
            </Modal>
        </>
    )
}

export default AddPostModal;
